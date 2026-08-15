const {ProductDetailPage, ReviewsPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    ProductDetailPage.iniciocatplayera();
});
When(/^El usuario aplica filtros$/, () => {
    ProductDetailPage.aplicacionfiltros();
});
When(/^El usuario da clic en un producto de su agrado$/, () => {
    ProductDetailPage.productoelejido();
});

//TC026--------------------
Then(/^El usuario ve las reseñas del producto$/, () => {
    ReviewsPage.reseñas();
});

//TC027--------------------
When(/^El usuario ordena los comentarios por mayor calificación$/, () => {
    ReviewsPage.ordenaropinion();
});

//TC028--------------------
When(/^El usuario da clic sobre la imagen del producto$/, () => {
    ReviewsPage.imagenreview();
});
Then(/^El usuario puede ver a detalla el producto$/, () => {
    ReviewsPage.review();
});
