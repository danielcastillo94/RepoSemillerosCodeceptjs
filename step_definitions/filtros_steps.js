const filterPage = require('../pages/FilterPage')
const resultsPage = require('../pages/ResultsPage')

// Los steps de "estar en la home" y "buscar el producto" NO se redefinen aquí:
// ya existen en busqueda_steps.js y CodeceptJS carga todos los archivos de
// step_definitions. Reutilizarlos es exactamente el criterio "sin duplicación".

When(/^ordena los resultados por "([^"]*)"$/, (criterio) =>
  filterPage.ordenarPor(criterio)
)

When(/^filtra los resultados por un precio entre (\d+) y (\d+)$/, (minimo, maximo) =>
  filterPage.filtrarPorRangoDePrecio(Number(minimo), Number(maximo))
)

Then(/^los precios mostrados están ordenados de forma "([^"]*)"$/, (direccion) =>
  resultsPage.validarOrdenPorPrecio(direccion)
)

Then(/^todos los precios mostrados están entre (\d+) y (\d+)$/, (minimo, maximo) =>
  resultsPage.validarPreciosEnRango(Number(minimo), Number(maximo))
)
