const { I } = inject();
const BusquedaPage = require('../pages/BusquedaPage');

// ESCENARIO 2: Buscar y ordenar producto de mayor a menor
Given('estoy en la página principal de Amazon', () => {
  BusquedaPage.irAPaginaPrincipal();
});

When('busco el producto {string}', (producto) => {
  BusquedaPage.buscarProducto(producto);
});

When('aplico el filtro de precio de mayor a menor', () => {
  BusquedaPage.aplicarFiltroMayorAMenor();
});

When('selecciono el primer producto de la lista', () => {
  BusquedaPage.seleccionarPrimerProducto();
});

Then('debería ver el nombre y el precio del producto', () => {
  BusquedaPage.verificarNombreYPrecio();
});
