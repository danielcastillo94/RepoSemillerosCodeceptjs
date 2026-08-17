const { I } = inject();

class resultsPage {
    fields = {
      // Resultados
      searchResults: '//div[@class="flex items-center"]/h1',
      // Mensaje cuando no existen resultados
      noResultsMessage: '//h2[contains(text(), "Lo sentimos")]',
      //Valudar que los productos mostrados sean algo relacionado con la busqueda
      validarresultadomostrado: '//h1[contains(text(), "Zapatillas")]',
      ordenarPor: '//button[@id="sorting-button"]',
      destacada: '//li[@role="option" and text()="Destacados"]', 
      novedades: '//li[normalize-space(text())="Novedades"]',
      menorPrecio: '//li[normalize-space(text())="Menor precio"]',
      mayorPrecio: '//li[normalize-space(text())="Mayor precio"]',
      mayorCalificados: '//li[normalize-space(text())="Mejor calificados"]',
      productoDestacado: '//section[@data-testid="1202132878-card"]//h4',
      productoMenorPrecio: '//h3[normalize-space(text())="Playera manga corta cuello redondo para mujer"]',
      productoMayorPrecio: '//h3[normalize-space(text())="Playera manga corta cuello redondo para mujer"]',
      productosMejorCalificados: '//h3[normalize-space(text())="Playera manga al codo cuello redondo para mujer"]'
    };

    urls = {
      urlzapatillas: 'https://www.liverpool.com.mx/tienda?s=zapatillas',
      urlnohayresultados: 'https://www.liverpool.com.mx/tienda?s=productoxyz99999',
      urlPlayeraMujer: 'https://www.liverpool.com.mx/tienda/playeras/catst25229539',
    };

    //GIVEN-PRIMCIPAL---------------------------------------------------------------------------------------------------------------
    pagina(){
        I.amOnPage('/');
       
    }

//@TC-001--------------------------------------------------------------------------------------------------------------
    validarResultados() {
        I.waitForURL(this.urls.urlzapatillas);
        I.see('Zapatillas');
        I.waitForElement(this.fields.searchResults, 10);
        I.seeElement(this.fields.searchResults);
    }
//@TC-002--------------------------------------------------------------------------------------------------------------
    validarNoHayResultados() {
        I.waitForURL(this.urls.urlnohayresultados);
        I.see('Lo sentimos, no encontramos nada para');   
        I.waitForElement(this.fields.noResultsMessage, 10);
        I.seeElement(this.fields.noResultsMessage);
    }

//@TC-003--------------------------------------------------------------------------------------------------------------
    validarResultadosMostrados() {
        I.waitForElement(this.fields.validarresultadomostrado, 10);
        I.seeElement(this.fields.validarresultadomostrado, 10);
    }
//@TC-016----------------------------------------------------------------------------------
    playerasMujer(){
        I.amOnPage(this.urls.urlPlayeraMujer);
        I.wait(10);
    }
    ordenarPor(){
        I.click( this.fields.ordenarPor)
    }

    opcionesPosiblesOrdenar(){
        I.waitForElement(this.fields.destacada);
        I.seeElement(this.fields.destacada);
        I.waitForElement(this.fields.novedades);
        I.seeElement(this.fields.novedades);
        I.waitForElement(this.fields.menorPrecio);
        I.seeElement(this.fields.menorPrecio);
        I.waitForElement(this.fields.mayorPrecio);
        I.seeElement(this.fields.mayorPrecio);
        I.waitForElement(this.fields.mayorCalificados);
        I.seeElement(this.fields.mayorCalificados);
    }
    destacados(){
        I.click( this.fields.destacada)
        I.wait(5);
    }
    resultadoDestacado(){
        I.waitForElement(this.fields.productoDestacado);
        I.seeElement(this.fields.productoDestacado);
    }

//@TC-017----------------------------------------------------------------   
    menorPrecio(){
        I.click( this.fields.menorPrecio );
        I.wait(5)
    }

    productoMenorPrecio(){
        I.waitForElement(this.fields.productoMenorPrecio);
        I.seeElement(this.fields.productoMenorPrecio);
    }

//@TC-018---------------------------------------------------
    mayorPrecio(){
        I.click( this.fields.mayorPrecio );
        I.wait(5)
    }
    productoMayorPrecio(){
        I.waitForElement(this.fields.productoMayorPrecio);
        I.seeElement(this.fields.productoMayorPrecio);
    }
    //@TC-019---------------------------------------------------
    majorCalificacion(){
        I.click( this.fields.mayorCalificados );
        I.wait(5)
    }

    productosMejorCalificados(){
        I.waitForElement(this.fields.productosMejorCalificados);
        I.seeElement(this.fields.productosMejorCalificados);
    }


}   
module.exports = resultsPage;