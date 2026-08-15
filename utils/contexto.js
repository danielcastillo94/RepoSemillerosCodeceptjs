/**
 * Contexto compartido de la ejecución.
 *
 * PARA QUÉ SIRVE:
 * Hay datos que nacen en una página y se validan en otra. Ejemplo real de este
 * update: el nombre y el precio del producto se leen en la PDP, pero se
 * verifican en la bolsa. Sin un lugar donde guardarlos, las opciones son malas:
 *
 *   1. Variables globales sueltas  -> nadie sabe quién las escribe.
 *   2. Que CartPage importe a ProductDetailPage -> acopla dos páginas que no
 *      tienen por qué conocerse.
 *   3. Pasarlo por el Gherkin como parámetro -> ensucia el lenguaje de negocio
 *      con detalles técnicos.
 *
 * Este módulo es la cuarta opción: un almacén explícito, con nombre, que
 * cualquier Page Object puede leer y escribir. Es el patrón "Test Context"
 * (también llamado "Scenario Context" en el mundo Cucumber).
 *
 * OJO — el estado vive mientras dura el proceso de Node, no por escenario.
 * Por eso `limpiar()` se llama desde `SearchPage.abrirHome()`, que es el
 * primer paso de todos los Background del proyecto: así ningún escenario
 * hereda datos del anterior y un fallo no se propaga en cadena.
 */
const datos = new Map()

module.exports = {
  guardar(clave, valor) {
    datos.set(clave, valor)
    return valor
  },

  leer(clave) {
    return datos.get(clave)
  },

  limpiar() {
    datos.clear()
  }
}
