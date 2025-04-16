const { I } = inject();
const CarritoPage = require('../pages/CarritoPage');

// ESCENARIO 3: Agregar producto al carrito
Given('estoy en la página de resultados de búsqueda de {string}', (producto) => {
  CarritoPage.buscarProductoDesdeInicio(producto);
});

When('selecciono el primer producto disponible', () => {
  CarritoPage.seleccionarPrimerProductoDisponible();
});

When('doy clic en "Agregar al carrito"', () => {
  CarritoPage.agregarAlCarrito();
});

Then('debería ver el mensaje "Se agregó al carrito"', () => {
  CarritoPage.verificarProductoEnCarrito();
});
