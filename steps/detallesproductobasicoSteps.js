const {ProductDetailPage, FilterPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    ProductDetailPage.iniciocatplayera();
});
When(/^El usuario aplica filtros$/, () => {
    ProductDetailPage.aplicacionfiltros();
});
When(/^El usuario da clic en un producto de su agrado$/, () => {
    ProductDetailPage.productoelejido();
});

//TC020
Then(/^El usuario puede ver los detalles del producto$/, () => {
    ProductDetailPage.detallesproducto();
});

//TC021------------------
Then(/^El usuario ve las caracteristicas del producto$/, () => {
    ProductDetailPage.caracteristicasbasicas();
});

//TC022------------------
Then(/^El usuario ve las imagenes del producto$/, () => {
    ProductDetailPage.galeriaimagenes();
});