const { I } = inject();

module.exports = {
searchInput: '[data-testid="blt26617d4f2e17657d-header-search-input"]',

buscarProducto(producto) {
I.fillField(this.searchInput, producto);
I.pressKey('Enter');
}
};
