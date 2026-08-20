const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class carritoPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        bolsa:'//span[normalize-space()="shopping_bag"]',
    };

    //Metodos


}

module.exports = new carritoPage();