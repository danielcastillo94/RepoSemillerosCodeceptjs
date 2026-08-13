const { I } = inject();

module.exports = {
productNames: 'section h3',
productPrices: 'section [data-testid$="-price"]',
noResultsMessage: 'h2:has-text("Lo sentimos, no encontramos nada para")',

validarResultados() {
I.waitForElement(this.productNames, 10);
},

validarSinResultados() {
I.waitForElement(this.noResultsMessage, 10);
I.see('Lo sentimos, no encontramos nada para', this.noResultsMessage);
},

validarNombreYPrecio() {
I.waitForElement(this.productNames, 10);
I.waitForElement(this.productPrices, 10);
}
};
