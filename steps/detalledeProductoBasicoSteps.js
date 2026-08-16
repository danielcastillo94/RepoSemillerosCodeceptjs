const { ProductoDetail } = inject();

//GIven---------------------------------------------------------------
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  ProductoDetail.PaginPrincipal();
});

//@TC-020-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
  ProductoDetail.PaginaPlayerasMujeres();
});

When(/^El usuario selecciona el primer producto HOLLISTER$/, () => { //selecciona algun plan
  ProductoDetail.seleccionProducto(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^El usuario debe visualizar el producto$/, () =>{
  ProductoDetail.detalleProducto();
});

//@TC-021-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
  ProductoDetail.PaginaPlayerasMujeres();
});
When(/^El usuario selecciona el primer producto HOLLISTER$/, () => { //selecciona algun plan
  ProductoDetail.seleccionProducto(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^El usuario debe visualizar el nombre del producto, precio y descripcion del producto$/, () =>{
  ProductoDetail.detalleProducto();
  ProductoDetail.detalleProductoComplejo();
});

//@TC-022-----------------------------------------------------------------
Given(/^El usuario se encuentra en la página de la playera hollister tipo polo$/, () => {
  ProductoDetail.paginaPlayeraHollister();
});
When(/^El usuario selecciona la primera imagen$/, () => { //selecciona algun plan
  ProductoDetail.galeriaImagenes(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^El usuario debe visualizar la galería de imágenes del producto$/, () =>{
  ProductoDetail.validaImagen();
});