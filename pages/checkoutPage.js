const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class checkoutPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        bolsa:'//span[normalize-space()="shopping_bag"]'
    };

    //Metodos

}

module.exports = new checkoutPage();