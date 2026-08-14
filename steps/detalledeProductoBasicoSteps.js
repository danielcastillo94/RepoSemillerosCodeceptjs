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