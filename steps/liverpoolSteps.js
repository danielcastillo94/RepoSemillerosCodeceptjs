const { I, liverpoolSearchPage, liverpoolResultsPage, liverpoolMenuPage } = inject();

Given('El usuario se encuentra en la página principal de Liverpool', () => {
  I.amOnPage('/');
});

When('El usuario busca el producto {string}', (producto) => {
  liverpoolSearchPage.buscarProducto(producto);
});

Then('El usuario visualiza resultados de búsqueda', () => {
  liverpoolResultsPage.validarResultados();
});

Then('El usuario visualiza el mensaje de producto no encontrado', () => {
  liverpoolResultsPage.validarSinResultados();
});

Then('El usuario visualiza productos con nombre y precio', () => {
  liverpoolResultsPage.validarNombreYPrecio();
});

When('El usuario abre el menú principal', () => {
  liverpoolMenuPage.abrirMenu();
});

When('El usuario abre el menú de "Categorías"', () => {
  liverpoolMenuPage.abrirCategorias();
});

When('El usuario selecciona la categoría "Mujer"', () => {
  liverpoolMenuPage.seleccionarMujer();
});

Then('El usuario visualiza la subcategoría "Ropa"', () => {
  liverpoolMenuPage.validarSubcategoriaRopa();
});

When('El usuario selecciona la subcategoría "Ropa"', () => {
  liverpoolMenuPage.seleccionarRopa();
});

Then('El usuario visualiza la página de Ropa', () => {
  liverpoolMenuPage.validarPaginaRopa();
});