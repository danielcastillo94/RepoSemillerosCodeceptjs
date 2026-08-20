const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class codigoPromocionalPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart'
    };
    
    fields={
        // Home
        bolsa:'//span[normalize-space()="shopping_bag"]'
    };

    //Metodos
    abrirHome() {
        I.amOnPage(this.urls.urlhome);
    }

    volverAlInicio() {
    I.scrollPageToTop();
    I.wait(3);
    }

}

module.exports = new codigoPromocionalPage();