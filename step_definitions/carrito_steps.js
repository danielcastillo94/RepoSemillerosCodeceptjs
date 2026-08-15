const productDetailPage = require('../pages/ProductDetailPage')
const cartPage = require('../pages/CartPage')

// Igual que en los updates anteriores: los steps SOLO orquestan.
// Ni un selector, ni un I.click, ni una URL viven en este archivo.
// Los pasos de "estar en la home", "buscar" y "abrir el producto" NO se
// redefinen: ya existen en busqueda_steps.js y detalle_steps.js.

/* --------------------------------- Acciones -------------------------------- */

When(/^agrega el producto a la bolsa$/, () => productDetailPage.agregarAlCarrito())

When(/^abre la bolsa de compras$/, () => cartPage.abrirBolsa())

When(/^se registra el subtotal actual$/, () => cartPage.capturarSubtotal())

When(/^aumenta la cantidad del primer producto$/, () => cartPage.aumentarCantidad())

When(/^disminuye la cantidad del primer producto$/, () => cartPage.disminuirCantidad())

When(/^elimina el primer producto de la bolsa$/, () => cartPage.eliminarPrimerProducto())

/* ------------------------------- Validaciones ------------------------------ */

Then(/^el contador de la bolsa muestra (\d+) producto(?:s)?$/, (cantidad) =>
  cartPage.validarContadorDeBolsa(Number(cantidad))
)

Then(/^la bolsa contiene (\d+) producto(?:s)?$/, (cantidad) =>
  cartPage.validarCantidadDeArticulos(Number(cantidad))
)

Then(/^la bolsa muestra el producto que se agregó$/, () => cartPage.validarProductoAgregado())

Then(/^el subtotal de la bolsa es mayor que cero$/, () => cartPage.validarSubtotalPositivo())

Then(/^el subtotal de la bolsa aumentó$/, () => cartPage.validarSubtotalAumento())

Then(/^la cantidad del primer producto es (\d+)$/, (cantidad) =>
  cartPage.validarCantidadDelPrimerProducto(Number(cantidad))
)

Then(/^la bolsa queda vacía$/, () => cartPage.validarBolsaVacia())
