# RETO S6 — Automatización de liverpool.com.mx

Framework de pruebas automatizadas E2E sobre **liverpool.com.mx** construido con
CodeceptJS + Playwright + Gherkin + Allure.

Rama: `HectorPerez_Liverpool`

---

## Requisitos

| Requisito | Para qué |
|---|---|
| Node.js 18+ | Ejecutar CodeceptJS |
| Java (JRE 8+) | Allure CLI lo necesita para generar el reporte |
| Python 3 | Servir el reporte en WSL2 (ver "Reporte") |

---

## Instalación

```bash
npm ci
npx playwright install chromium

cp secreto.env.example secreto.env   # y completar los valores
```

Contenido de `secreto.env`:

```env
BASE_URL=https://www.liverpool.com.mx
TIMEOUT=15
```

`secreto.env` está en `.gitignore`. Lo que se versiona es
`secreto.env.example`, que documenta qué variables hacen falta sin exponer
valores. `codecept.conf.js` tiene una guarda que aborta con un mensaje claro si
`BASE_URL` falta, en lugar de fallar más adelante con un error confuso.

---

## Ejecución

```bash
npm test                # suite estable (excluye @pendiente) + evidencia completa
npm run test:todo       # incluye los escenarios pendientes
npm run test:dry        # no abre navegador: solo valida que cada step exista
npm run test:smoke      # regresión rápida
npm run test:busqueda   # una sola funcionalidad
npm run test:filtros
npm run test:detalle
npm run test:carrito

npx codeceptjs run --steps --grep "@TC-017"   # un caso puntual
```

Para iterar rápido sin grabar video ni traza:

```bash
EVIDENCIA=false npm test
```

---

## Reporte

```bash
npm run report          # genera y sirve en http://localhost:8080
npm run report:generate # solo genera en ./allure-report
```

**Nota sobre WSL2:** el servidor propio de Allure (`allure open`) abre un puerto
que Windows no alcanza desde WSL2. Por eso `report:serve` usa
`python3 -m http.server`, que sí es accesible desde el navegador del host.

### Evidencia incluida

| Evidencia | Origen | Cómo llega a Allure |
|---|---|---|
| Pasos del escenario | plugin `allure` | Automático |
| Screenshot | plugin `screenshot` (`on: 'fail'`) | Automático, solo en fallos |
| Video `.webm` | `video: true` en el helper Playwright | `utils/playwrightVideoAllure_helper.js` |
| Traza `.zip` | `trace: true` en el helper Playwright | `utils/playwrightVideoAllure_helper.js` |

La traza se inspecciona fuera de Allure:

```bash
npx playwright show-trace output/trace/<archivo>.zip
```

---

## Arquitectura

```text
features/            → QUÉ se prueba (Gherkin, lenguaje de negocio)
step_definitions/    → PEGAMENTO (traduce Gherkin a Page Objects)
pages/               → CÓMO se interactúa (selectores + acciones)
utils/               → LÓGICA PURA y soporte (config, precios, contexto, evidencia)
scripts/             → HERRAMIENTAS DE DIAGNÓSTICO (no forman parte de la suite)
```

| Page Object | Responsabilidad |
|---|---|
| `BasePage` | Apertura de rutas con reintento, cierre de modales, esperas comunes |
| `SearchPage` | Búsqueda desde el header |
| `ResultsPage` | PLP: validación, lectura de precios, apertura del detalle |
| `FilterPage` | Facet de precio y ordenamiento |
| `ProductDetailPage` | PDP: datos del producto y agregar a la bolsa |
| `CartPage` | Bolsa: contador, cantidades, subtotal, eliminación |

### Reglas que se respetan en todo el repo

1. **Un selector CSS nunca aparece fuera de `pages/`.** Un step definition con
   un selector adentro está mal ubicado.
2. **No se duplica una página para agregarle una capacidad.** `ResultsPage` se
   extendió con lectura de precios, y `ProductDetailPage` con "agregar a la
   bolsa", en vez de crear `ResultsPageConPrecios` o `ProductDetailPageConCarrito`.
3. **La lógica pura no toca el navegador.** El parseo de precios vive en
   `utils/precio.js` y lo usan por igual `ResultsPage`, `ProductDetailPage` y
   `CartPage`. Si Liverpool cambia el formato del precio, se ajusta un archivo.

### `utils/precio.js`

Liverpool renderiza los centavos dentro de un `<sup>`, así que al leer el texto
del nodo no hay punto decimal:

```
"$1,86915"  →  $1,869.15
"$99900"    →  $999.00
```

Interpretar `$99900` como noventa y nueve mil sería un error de dos órdenes de
magnitud y rompería tanto el filtro por rango como la validación de orden.

### `utils/contexto.js`

Almacén compartido para datos que nacen en una página y se validan en otra: el
nombre y el precio se leen en la PDP y se verifican en la bolsa. Evita dos malas
alternativas — variables globales sueltas, o que `CartPage` importe a
`ProductDetailPage` y queden acopladas. Se limpia al inicio de cada escenario
desde `SearchPage.abrirHome()`.

### `utils/playwrightVideoAllure_helper.js`

Playwright graba el video y la traza pero los deja como archivos sueltos en
`./output`; Allure no los muestra si nadie se los adjunta al caso.

El detalle que hace que funcione: el `.webm` **no existe** mientras la prueba
corre — Playwright lo escribe al cerrar el browser context. Por eso el adjunto
ocurre en `_after()` y no en `_passed`/`_failed`, donde el archivo todavía se
está escribiendo, y por eso se espera a que el tamaño del archivo se estabilice
antes de leerlo.

---

## Ejecución por tags

| Nivel | Tags | Uso |
|---|---|---|
| Funcionalidad | `@busqueda`, `@filtros`, `@detalle`, `@carrito` | Ejecutar sólo un área |
| Caso de prueba | `@TC-001` … `@TC-043` | Trazabilidad con la matriz del reto |
| Criticidad | `@smoke` | Regresión rápida |
| Estado | `@pendiente` | Escenarios con limitación conocida |

---

## Matriz de escenarios

| Feature | Escenario | TC | Estado |
|---|---|---|---|
| `busqueda.feature` | Buscar un producto existente | TC-001 | ✅ |
| `busqueda.feature` | Buscar un producto inexistente | TC-002 | ✅ |
| `busqueda.feature` | Los resultados corresponden a la búsqueda | TC-003 | ✅ |
| `filtros.feature` | Ordenar de menor a mayor precio | TC-016, TC-017 | ✅ |
| `filtros.feature` | Ordenar de mayor a menor precio | TC-018 | ⚠️ pendiente |
| `filtros.feature` | Filtrar por rango de precio | TC-007, TC-008, TC-009 | ⚠️ pendiente |
| `detalle_producto.feature` | Abrir el detalle del producto | TC-020 | ✅ |
| `detalle_producto.feature` | Validar nombre, precio y descripción | TC-021 | ✅ |
| `carrito.feature` | Agregar producto y validar el contador | TC-029, TC-030, TC-031 | ✅ |
| `carrito.feature` | La bolsa muestra el producto agregado | TC-029, TC-032 | ✅ |
| `carrito.feature` | Aumentar cantidad recalcula el subtotal | TC-034, TC-041 | ✅ |
| `carrito.feature` | Eliminar producto deja la bolsa vacía | TC-043 | ✅ |

---

## Manejo de esperas

No hay un solo `I.wait(n)` en el proyecto, y tampoco
`waitForLoadState('networkidle')`.

| En lugar de | Se usa |
|---|---|
| `I.wait(3)` | `waitFor({ state: 'visible' })` sobre el elemento esperado |
| `networkidle` | Cambio de URL + presencia del grid |
| `I.wait(2)` tras buscar | `page.waitForURL(/[?&]s=/)` |
| Asumir que un clic funcionó | Releer el valor hasta que cambie (`esperarCondicion`) |

**Por qué se descartó `networkidle`:** Liverpool dispara analítica y publicidad
de forma continua, así que la red nunca queda inactiva 500 ms seguidos. Esa
espera se resolvía en unas ejecuciones y expiraba a los 30 s en otras, según
cuánta publicidad cargara la página. Una espera explícita sólo es tan buena como
la condición que espera: hay que esperar una **consecuencia directa de la propia
acción**, no una condición ambiental.

### `isVisible()` no espera

Aprendizaje que costó una tarde. En Playwright, `isVisible()`, `isEnabled()` e
`isChecked()` son **fotos del estado actual**: no reintentan y descartan el
parámetro `timeout`. Sólo `waitFor()`, `click()` y `expect()` tienen
auto-espera.

Con un modal que entra con animación, esto:

```js
if (await boton.isVisible({ timeout: 3000 })) await boton.click()   // ❌
```

devuelve `false` y el clic nunca ocurre. Lo correcto:

```js
const aparecio = await boton.waitFor({ state: 'visible', timeout: 8000 })
  .then(() => true).catch(() => false)                              // ✅
```

### Reintento de navegación

`BasePage.abrir()` reintenta hasta 3 veces, **sólo** ante `ERR_ABORTED` y
errores de red equivalentes, que ocurren cuando el sitio cancela una navegación
en curso. El plugin `retryFailedStep` no cubre esto porque excluye `amOnPage`
de su lista de reintentos a propósito. Reintentar de forma indiscriminada
escondería bugs reales; reintentar ante un error concreto y conocido, no.

---

## Decisiones de diseño

**Subtotal y no total.** El resumen de la bolsa muestra
`Subtotal (1 producto): $799.00 / Descuento: $319.60 / Total: $479.40`. El total
ya trae el descuento aplicado, así que no es una función lineal de la cantidad y
sería una mala referencia para comprobar que el carrito recalcula. TC-034 valida
el **subtotal**, que sí escala con la cantidad ($799 → $1,598).

**Botón "Eliminar" y no "disminuir".** Con cantidad 1, el botón de disminuir
cambia de ícono a un bote de basura y también borra la línea. Los dos caminos
funcionan, pero el botón explícito expresa la intención de la prueba: una prueba
que hace lo correcto por accidente es una prueba que mañana falla por accidente.

**Productos patrocinados excluidos.** Son publicidad pagada: se insertan al
inicio y de forma periódica en la PLP, y no respetan el orden ni los filtros
aplicados. Incluirlos produciría fallos que no corresponden a un defecto.

---

## Limitaciones conocidas

Los escenarios marcados `@pendiente` quedan excluidos de `npm test`. Son
comportamientos del sitio, no fallas de arquitectura: usan los mismos Page
Objects y el mismo parser que los escenarios en verde.

### 1. Ordenamiento descendente por precio (`@TC-018`)

Al ordenar de mayor a menor, 3 de 56 tarjetas rompen la secuencia:

```
índice  0 → 1199    (esperado: el precio más alto)
índice 31 → 5943    (entre 6839.2 y 6599)
índice 49 → 1394    (entre 6293 y 6223)
```

Las otras 53 están perfectamente ordenadas. El **mismo** Page Object y el
**mismo** parser validan sin error el orden ascendente sobre esa misma PLP
(56/56 correctas), lo que descarta un fallo de parseo sistemático.

### 2. Filtro por rango de precio (`@TC-007/008/009`)

El facet acepta los valores y los refleja en la UI, pero el conjunto de
resultados es idéntico al no filtrado.

### 3. TC-042 (disminuir cantidad) no automatizado

Con cantidad 1 el botón de disminuir elimina la línea en lugar de decrementar,
así que un escenario para TC-042 tendría que partir de una cantidad mayor a 1.
Se omitió por alcance, no por limitación técnica.

---

## Alcance: qué quedó fuera y por qué

**Checkout, pago y registro de cuenta (TC-050 a TC-067) se excluyen
deliberadamente.** No es falta de tiempo, es criterio:

1. **Efectos secundarios reales.** Automatizar el checkout de un sitio
   productivo genera pedidos, correos y carga en sistemas de un tercero. Una
   suite de pruebas no debe producir efectos en producción ajena.
2. **Datos que no existen.** No hay ambiente de QA, ni cuentas de prueba, ni
   tarjetas sandbox. Sin datos controlados, cualquier escenario de pago sería no
   determinista por definición.
3. **CAPTCHA y antifraude.** El registro y el pago están protegidos por
   controles diseñados justamente para detener automatización.

Se cubre todo el flujo hasta la bolsa, que es el límite donde las pruebas siguen
siendo repetibles y no invasivas.

---

## Scripts de diagnóstico

`scripts/` contiene herramientas que **no** forman parte de la suite. Sirven
para descubrir selectores reales antes de escribirlos en un Page Object:

```bash
node scripts/descubrir-selectores.js
node scripts/inspeccionar-filtro.js mochila 500 2000
node scripts/inspeccionar-orden.js
node scripts/inspeccionar-carrito.js mochila
```

Abren un navegador visible, imprimen los `data-testid`, `aria-label` y textos de
los controles, y en algunos casos ceden el control al usuario para llegar a
mano al estado que interesa. Escribir selectores a ciegas y depurarlos a través
de la suite es mucho más lento que mirar el DOM una vez.
