const { I } = inject();

class productDetailPage {
       
    urls = {        
        urlPaginaDetalleProducto: 'https://www.liverpool.com.mx/tienda/pdp/playera-tipo-polo-hollister-para-mujer/1201006488',
        urlPlayeraMujer: 'https://www.liverpool.com.mx/tienda/playeras/catst25229539'
    }
    fields = {
        producto: '//section[@data-testid="1201006488-card"]',
        hollister: '//span[text()="HOLLISTER"]',
        breveDescripcionDetalle: '//h1[text()="Playera tipo polo para mujer"]'

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
        
}
module.exports = new productDetailPage();