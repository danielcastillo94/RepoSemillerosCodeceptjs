/**
 * playwrightVideoAllure_helper.js
 *
 * QUÉ RESUELVE:
 * Playwright graba video y traza de cada prueba, pero los deja como archivos
 * sueltos en ./output. Allure no los muestra a menos que alguien se los
 * ADJUNTE explícitamente al caso de prueba. Este helper es ese alguien.
 *
 * EL PROBLEMA DE TIEMPOS (lo importante de entender):
 * El archivo .webm NO existe mientras la prueba corre. Playwright lo escribe
 * cuando se CIERRA el browser context. Por eso este código no puede vivir en
 * `_passed()` ni en `_failed()`: en esos hooks el contexto sigue abierto y el
 * archivo o no existe, o todavía se está escribiendo. El único punto seguro es
 * `_after()`, que corre después de que el helper de Playwright cerró el
 * contexto (con `restart: 'context'`, uno por prueba).
 *
 * Por eso además:
 *   - se guarda `test.artifacts` en `event.test.started` (ahí sí es accesible),
 *   - se espera a que el archivo exista y deje de crecer antes de leerlo.
 *
 * REGISTRO (en codecept.conf.js, DESPUÉS de Playwright):
 *   helpers: {
 *     Playwright: { ... video: true, trace: true },
 *     AllureEvidencia: { require: './utils/playwrightVideoAllure_helper.js' }
 *   }
 */
const fs = require('fs')
const path = require('path')
const { container, event, output } = require('codeceptjs')

/**
 * La clase base de los helpers cambió de paquete entre versiones de
 * CodeceptJS. Se resuelve en cascada para que el helper funcione tanto en
 * proyectos que tienen `@codeceptjs/helper` instalado como en los que no.
 */
let Helper
try {
  Helper = require('@codeceptjs/helper')
} catch (e) {
  try {
    Helper = require('codeceptjs/lib/helper')
  } catch (e2) {
    Helper = class {}
  }
}

const INTENTOS_ARCHIVO = 20
const ESPERA_ENTRE_INTENTOS_MS = 500

const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class AllureEvidenciaHelper extends Helper {
  constructor(config) {
    super(config)

    this.artefactos = {}

    // `test.artifacts` es el objeto donde el helper de Playwright deja las
    // rutas del video y de la traza. Se captura aquí porque en `_after()`
    // ya no se recibe el test como parámetro de forma confiable.
    event.dispatcher.on(event.test.started, (test) => {
      this.artefactos = test.artifacts || {}
    })
  }

  async _after() {
    const allure = container.plugins('allure')

    if (!allure) {
      output.log('[evidencia] El plugin allure no está activo; no se adjunta nada.')
      return
    }

    await this._cerrarContextoSiSigueAbierto()

    const video = this.artefactos.video || (await this._buscarVideoMasReciente())

    await this._adjuntar(allure, 'Video de la ejecución', video, 'video/webm')
    await this._adjuntar(
      allure,
      'Traza de Playwright (abrir con: npx playwright show-trace)',
      this.artefactos.trace,
      'application/zip'
    )

    this.artefactos = {}
  }

  /**
   * Cerrar el contexto es lo que obliga a Playwright a volcar el .webm a disco.
   * Con `restart: 'context'` el propio helper de Playwright ya lo cerró antes
   * que nosotros, así que esto normalmente es un no-op: está aquí como red de
   * seguridad para otras configuraciones de `restart`. Cerrar dos veces es
   * inofensivo en Playwright.
   */
  async _cerrarContextoSiSigueAbierto() {
    try {
      const playwright = container.helpers('Playwright')
      if (playwright && playwright.browserContext) {
        await playwright.browserContext.close()
      }
    } catch (e) {
      output.log(`[evidencia] No se pudo cerrar el contexto: ${e.message}`)
    }
  }

  async _adjuntar(allure, nombre, ruta, tipoMime) {
    if (!ruta) {
      output.log(`[evidencia] Sin archivo para "${nombre}".`)
      return
    }

    const listo = await this._esperarArchivoEstable(ruta)

    if (!listo) {
      output.log(`[evidencia] El archivo nunca quedó listo: ${ruta}`)
      return
    }

    try {
      allure.addAttachment(nombre, fs.readFileSync(ruta), tipoMime)
      output.log(`[evidencia] Adjuntado a Allure: ${path.basename(ruta)}`)
    } catch (e) {
      output.log(`[evidencia] Falló el adjunto de ${ruta}: ${e.message}`)
    }
  }

  /**
   * Un archivo puede EXISTIR y aún estar escribiéndose. Leerlo en ese momento
   * produce un video truncado que Allure muestra en negro. Se considera listo
   * cuando su tamaño es mayor a cero y no cambió entre dos lecturas.
   *
   * Esto es una espera explícita sobre una condición real, no un `wait(5)`.
   */
  async _esperarArchivoEstable(ruta) {
    let tamanoAnterior = -1

    for (let intento = 0; intento < INTENTOS_ARCHIVO; intento++) {
      if (fs.existsSync(ruta)) {
        const { size } = fs.statSync(ruta)

        if (size > 0 && size === tamanoAnterior) return true
        tamanoAnterior = size
      }

      await pausa(ESPERA_ENTRE_INTENTOS_MS)
    }

    return false
  }

  /**
   * Plan B: si `test.artifacts.video` viene vacío (pasa cuando la prueba falla
   * dentro de un Before), se busca el .webm más reciente en output/videos.
   */
  async _buscarVideoMasReciente() {
    const carpeta = path.join(global.output_dir || './output', 'videos')

    if (!fs.existsSync(carpeta)) return null

    const videos = fs
      .readdirSync(carpeta)
      .filter((archivo) => archivo.endsWith('.webm'))
      .map((archivo) => {
        const completa = path.join(carpeta, archivo)
        return { ruta: completa, modificado: fs.statSync(completa).mtimeMs }
      })
      .sort((a, b) => b.modificado - a.modificado)

    return videos.length > 0 ? videos[0].ruta : null
  }
}

module.exports = AllureEvidenciaHelper
