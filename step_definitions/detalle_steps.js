const resultsPage = require('../pages/ResultsPage')
const productDetailPage = require('../pages/ProductDetailPage')

When(/^abre el producto en la posición (\d+) de los resultados$/, (posicion) =>
  resultsPage.abrirProductoEnPosicion(Number(posicion))
)

Then(/^se muestra la página de detalle del producto$/, () =>
  productDetailPage.validarQueEstoyEnElDetalle()
)

Then(/^el detalle muestra nombre, precio y descripción$/, () =>
  productDetailPage.validarDatosDelProducto()
)
