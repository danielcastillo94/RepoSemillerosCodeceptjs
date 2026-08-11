const { I } = inject();

class resultsPage {
    fields = {
      // Resultados
      searchResults: '//div[@class="flex items-center"]/h1',
      // Mensaje cuando no existen resultados
      noResultsMessage: '//h2[contains(text(), "Lo sentimos")]',
      //Valudar que los productos mostrados sean algo relacionado con la busqueda
      validarresultadomostrado: '//h3[contains(text(), "Zapatilla Charol")]'
    };

    urls = {
      urlzapatillas: 'https://www.liverpool.com.mx/tienda?s=zapatillas',
      urlnohayresultados: 'https://www.liverpool.com.mx/tienda?s=productoxyz99999'
    };

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
}
module.exports = resultsPage;