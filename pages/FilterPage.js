const { I } = inject();

class FilterPage {

    urls = {
        urlTenisCasuales: 'https://www.liverpool.com.mx/tienda/tenis-casuales/catst4003357',
        urlPlayerasMujer: 'https://www.liverpool.com.mx/tienda/playeras/catst25229539'
    };

    fields = {
        minimo : '//input[@placeholder="Mínimo ($)"]',
        mayor: '//input[@placeholder="Máximo ($$)"]',
        filtrarFlecha: '//button[@data-testid="chevron-right-icon-btn"]',
        filtroSeleccionado: '//span[text()="$100.0 -$500.0"]',
        botonporMenorMayor: '//button[@id="sorting-button"]',
        opcionMenorPrecio: '//li[text()="Menor precio"]',
        precioEspecifico: '//span[@data-testid="plp-page-plp-filter-discounts-filter-1-radio"]',
        validarRangoEspecifico : '//span[text()="$500.0 -$1000.0"]',
        //cantidadTotalProductos: '1635 artículos',
        //campoMarca: '//span[@class="text-body-sm font-semibold text-base" and text()="Marcas"]',
        contenedorOverflow: 'div.w-full.overflow-auto',
        seleccionarCampoMarca: '//input[@type="checkbox" and @value="ADIDAS"]',
        seleccionarCampoMarca1: '//input[@type="checkbox" and @value="ACTVITTA"]',
        productosMarca: '//h4[text()="ADIDAS"]',
        productosMarca1: '(//span[text()="ACTVITTA"])[1]',     //'//h4[contains(text(),"ACTVITTA")]',
        filtroMedida: '//input[@type="checkbox" and @value="Mediano"]',
        validarFiltro: '//button[@data-testid="Mediano"]',
        filtroColor: '//input[@type="checkbox" and @value="Rosa~~#e522e2"]',
        productosColorRosa: '//button[contains(@style,"rgb(247, 110, 165)")]'
    };

//GIVEN---------------------------------------------------------------------------------------------------------------

  PaginPrincipal() {
    //Pagina de inicio de Liverpool
    I.amOnPage('/');
  }

  //@TC-007-----------------------------------------------------------------
    PaginTenisCasuales() {
        I.amOnPage(this.urls.urlTenisCasuales);
    }

    filtrarPrecioMenorMayor() {
        I.fillField(this.fields.minimo, '100');
        I.fillField(this.fields.mayor, '500');
        I.click(this.fields.filtrarFlecha);
        I.click(this.fields.botonporMenorMayor);
        I.click(this.fields.opcionMenorPrecio);
    }

    

//@TC-008-----------------------------------------------------------------
    PaginTenisCasualesrango() {
        I.amOnPage(this.urls.urlTenisCasuales);
       
    }

    seleccionPrecioEspecifico(){
        I.click(this.fields.precioEspecifico)
    }

//@TC-009-----------------------------------------------------------------
    async validarprecio(){
      //I.see('Filtros seleccionados');
      I.seeElement(this.fields.filtroSeleccionado);
    }

    validarPrecioRango(){
      I.seeElement(this.fields.validarRangoEspecifico);  
    }

//@TC-010-----------------------------------------------------------------
    seleccionarMarca(){
        //I.locate(this.fields.contenedorOverflow);
        I.scrollTo(this.fields.seleccionarCampoMarca);
        I.click(this.fields.seleccionarCampoMarca);
        I.wait(10);
    }

    marcaPerteneciente(){
        I.wait(10);
        I.waitForElement(this.fields.productosMarca);
       // I.seeElement(this.fields.marcaPerteneciente);

    }

//@TC-011----------------------------------------------------------------
    seleccionarMasMarcas(){
        I.scrollTo(this.fields.seleccionarCampoMarca);
        I.click(this.fields.seleccionarCampoMarca);
        I.wait(10);
        I.click(this.fields.seleccionarCampoMarca1);
        I.wait(5);
    }

    marcasPertenecientes(){
        I.wait(10);
        I.waitForElement(this.fields.productosMarca);
        I.scrollTo(this.fields.productosMarca1);
        I.waitForElement(this.fields.productosMarca1);
    }

//@TC-012---------------------------------------------------------------
     desseleccionarMarca(){
        //I.locate(this.fields.contenedorOverflow);
        I.click(this.fields.seleccionarCampoMarca);
        I.wait(5);
    }
    validarCheckNoSeleccionado(){
         I.dontSeeCheckboxIsChecked(this.fields.seleccionarCampoMarca);
    }
//@TC-013---------------------------------------------------------------
    paginaPlayerasMujer(){
         I.amOnPage(this.urls.urlPlayerasMujer);
    }
    filtroTalla(){
        I.scrollTo(this.fields.filtroMedida);
        I.click(this.fields.filtroMedida);
        I.wait(5);
    }
    filtroValidoTalla() {
        I.waitForElement(this.fields.validarFiltro);
    }
//@TC-014---------------------------------------------------------------
    paginaPlayerasMujer(){
         I.amOnPage(this.urls.urlPlayerasMujer);
    }
    filtroColor(){
        I.scrollTo(this.fields.filtroColor);
        I.click(this.fields.filtroColor);
        I.wait(5);
    }
    filtroValido(){
        I.waitForElement(this.fields.productosColorRosa);
    }

    //@TC-015---------------------------------------------------------------
    paginaPlayerasMujer(){
        I.amOnPage(this.urls.urlPlayerasMujer);
    }

    combinacionFiltro(){
        I.scrollTo(this.fields.filtroMedida);
        I.click(this.fields.filtroMedida);
        I.wait(5);
        I.scrollTo(this.fields.filtroColor);
        I.click(this.fields.filtroColor);
        I.wait(5);
    }
    filtroValidoCombinacion(){
        I.waitForElement(this.fields.validarFiltro);
        I.waitForElement(this.fields.productosColorRosa);
    }


}

module.exports = new FilterPage();