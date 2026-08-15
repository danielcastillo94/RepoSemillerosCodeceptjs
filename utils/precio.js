/**
 * Utilidades de precio.
 *
 * Estas funciones son PURAS: no conocen el navegador, ni CodeceptJS, ni el DOM.
 * Reciben texto o números y devuelven un resultado. Esto es intencional:
 *  - se pueden probar sin abrir un navegador,
 *  - se pueden reutilizar desde cualquier Page Object,
 *  - si Liverpool cambia el formato del precio, se ajusta UN solo archivo.
 *
 * IMPORTANTE — cómo renderiza Liverpool los precios:
 * Los centavos van en un <sup>, así que al leer el texto del nodo NO hay punto
 * decimal y quedan pegados a los pesos:
 *
 *    "$1,86915"  ->  $1,869.15
 *    "$99900"    ->  $999.00
 *
 * Interpretar "$99900" como noventa y nueve mil novecientos sería un error de
 * dos órdenes de magnitud y rompería tanto el filtro por rango como la
 * validación de ordenamiento.
 */

// Caso A: el texto SÍ trae punto decimal explícito -> "$1,299.00"
const PRECIO_CON_DECIMAL = /\$\s*(\d{1,3}(?:,\d{3})*|\d+)\.(\d{2})/

// Caso B: centavos pegados (render de <sup>) -> "$1,86915", "$99900"
// El grupo de pesos es greedy y se detiene dejando exactamente 2 dígitos
// de centavos al final.
const PRECIO_CENTAVOS_PEGADOS = /\$\s*(\d{1,3}(?:,\d{3})*)(\d{2})(?!\d)/

/**
 * Convierte un texto que contiene un precio en un número.
 * Devuelve null si no encuentra ningún precio reconocible.
 */
function parsearPrecio(texto) {
  if (typeof texto !== 'string') return null

  for (const patron of [PRECIO_CON_DECIMAL, PRECIO_CENTAVOS_PEGADOS]) {
    const coincidencia = texto.match(patron)
    if (!coincidencia) continue

    const pesos = Number(coincidencia[1].replace(/,/g, ''))
    const centavos = Number(coincidencia[2])

    if (!Number.isFinite(pesos) || !Number.isFinite(centavos)) continue

    return pesos + centavos / 100
  }

  return null
}

/**
 * Recibe una lista de textos (el contenido de cada tarjeta de producto)
 * y devuelve sólo los precios válidos, ya convertidos a número.
 *
 * Nota: de una tarjeta con precio promocional y precio de lista se toma el
 * PRIMERO, que es el precio vigente — el mismo que usa el sitio para ordenar.
 */
function extraerPrecios(textos = []) {
  return textos
    .map(parsearPrecio)
    .filter((precio) => precio !== null && precio > 0)
}

/**
 * Verifica que un arreglo de precios esté ordenado.
 * Devuelve el detalle del PRIMER desorden encontrado, para que el mensaje de
 * fallo diga exactamente dónde se rompió el orden en lugar de un simple
 * "expected true to be false".
 *
 * @param {number[]} precios
 * @param {'ascendente'|'descendente'} direccion
 */
function verificarOrden(precios, direccion = 'ascendente') {
  const esAscendente = direccion === 'ascendente'

  for (let i = 1; i < precios.length; i++) {
    const anterior = precios[i - 1]
    const actual = precios[i]

    // Se permite la igualdad: dos productos pueden costar lo mismo.
    const correcto = esAscendente ? actual >= anterior : actual <= anterior

    if (!correcto) {
      return {
        ordenado: false,
        indice: i,
        anterior,
        actual,
        mensaje:
          `Los precios NO están ordenados de forma ${direccion}. ` +
          `En la posición ${i} se encontró ${actual} después de ${anterior}. ` +
          `Secuencia leída: [${precios.join(', ')}]`
      }
    }
  }

  return {
    ordenado: true,
    mensaje: `Los ${precios.length} precios están ordenados de forma ${direccion}.`
  }
}

/**
 * Devuelve los precios que quedaron FUERA del rango solicitado.
 * Si el arreglo devuelto está vacío, el filtro funcionó.
 */
function preciosFueraDeRango(precios = [], minimo, maximo) {
  return precios.filter((precio) => precio < minimo || precio > maximo)
}

module.exports = {
  parsearPrecio,
  extraerPrecios,
  verificarOrden,
  preciosFueraDeRango
}