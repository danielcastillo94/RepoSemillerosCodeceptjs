const searchPage = require('../pages/SearchPage')
const resultsPage = require('../pages/ResultsPage')

// Los steps SOLO orquestan: ni un selector, ni un I.click, ni una URL.
// Toda la mecánica vive en los Page Objects.

Given(/^que el usuario se encuentra en la página principal de Liverpool$/, () =>
  searchPage.abrirHome()
)

When(/^busca el producto "([^"]*)"$/, (producto) =>
  searchPage.buscarProducto(producto)
)

Then(/^se muestran resultados relacionados con la búsqueda$/, () =>
  resultsPage.validarResultados()
)

Then(/^no se muestran productos relacionados con "([^"]*)"$/, (producto) =>
  resultsPage.validarSinResultados(producto)
)

Then(/^los resultados muestran productos relacionados con "([^"]*)"$/, (producto) =>
  resultsPage.validarProductoRelacionado(producto)
)
