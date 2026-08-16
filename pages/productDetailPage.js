const { I } = inject();

class productDetailPage {
       
    urls = {        
        urlPaginaDetalleProducto: 'https://www.liverpool.com.mx/tienda/pdp/playera-tipo-polo-hollister-para-mujer/1201006488',
        urlPlayeraMujer: 'https://www.liverpool.com.mx/tienda/playeras/catst25229539'
    }
    fields = {
        producto: '//section[@data-testid="1201006488-card"]',
        hollister: '//span[text()="HOLLISTER"]',
        breveDescripcionDetalle: '//h1[text()="Playera tipo polo para mujer"]',

        precio: '(//span[@data-testid="discounted"]//span[text()="472"])[1]',
        botonCaracteristicas: '//button[@data-testid="ml-list-item-specs"]/h3[text()="Características"]',
        caracteristicas: '//div[h3[text()="Características"] and button[@data-testid="close"]]',
        caracteristicasNombre: '//p[text()="Playera tipo polo con manga corta"]',
        caracteristicaGeneral: '//th[text()="Familia o colección"]',
        caracteristicaDetalleAplicacion: '//th[text()="Fit"]',
        caracteristicaDetalleSinAplicacion: '//td[text()="Regular"]',
        caracteristicaComposicion: '//td[text()="Algodón"]',
        carateriscasLargoDeManga: '//td[text()="Corta"]',
        imagen: '//img[@data-testid="pdp-1201006488-gallery__gallery-0__image__image"]',
        validarImagen: '//img[@alt="Playera tipo polo para mujer 1"]'
    }
//GIVEN---------------------------------------------------------------------------------------------------------------
  PaginPrincipal() {
    //Pagina de inicio de Telcel
    I.amOnPage('/');
  }

 //@TC-020-----------------------------------------------------------------
    PaginaPlayerasMujeres() {
        I.amOnPage(this.urls.urlPlayeraMujer);
        I.wait(10)
    }

    seleccionProducto() {
        I.click(this.fields.producto);
        I.wait(10);
    }

    detalleProducto(){
        I.waitForElement( this.fields.hollister,
                          this.fields.breveDescripcionDetalle,
                        ) 
    }

    //@TC-021-----------------------------------------------------------------
    detalleProductoComplejo(){
        I.waitForElement( this.fields.precio ) 
        I.click( this.fields.botonCaracteristicas )
        I.waitForElement( this.fields.caracteristicas,
                          this.fields.caracteristicasNombre,
                          this.fields.caracteristicaGeneral,
                          this.fields.caracteristicaDetalleAplicacion,
                          this.fields.caracteristicaDetalleSinAplicacion,
                          this.fields.caracteristicaComposicion,
                          this.fields.carateriscasLargoDeManga,
                          
        )  
    }
    //@TC-022-----------------------------------------------------------------
    paginaPlayeraHollister(){
         I.amOnPage(this.urls.urlPaginaDetalleProducto);
         I.wait(10)
    }
    
    
    galeriaImagenes(){
        I.click( this. fields.imagen );
        I.wait(10);

    }
    validaImagen(){
        I.waitForElement( this.fields.validarImagen );
        I.seeElement( this. fields.validarImagen);
}
        
}
module.exports = new productDetailPage();