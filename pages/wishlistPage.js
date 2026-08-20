const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class wishlistPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
    };
    
    fields={

    };

    //Metodos wishlist


}

module.exports = new wishlistPage();