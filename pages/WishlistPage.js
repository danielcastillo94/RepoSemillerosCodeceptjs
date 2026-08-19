const {I} = inject();
require('dotenv').config();

class WishlistPage {
    urls = {
        urlwishlist: 'https://www.liverpool.com.mx/tienda/users/wishlist',
        urlcarrito: 'https://www.liverpool.com.mx/tienda/cart',
    };
    locator = {
        btniniciosesion: '//button[@data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]',
        inputcorreo: '//input[@id="username"]',
        inputcontrasenia: '//input[@id="password"]',
        btniniciarsesion: '//button[contains(text(),"Iniciar sesión")]',
        btnaceptarsms: '//button[contains(text(),"Continuar")]',
        btncarrito: '//a[@class="flex items-center gap-1 disabled:cursor-default transition-colors p-1 text-header-primary hover:bg-header-secondary rounded-full font-bold"][1]',
        btnwishlist: '(//a[@data-testid="blt26617d4f2e17657d-header-shopping-cart-favourites-link"])[1]',
        btnmovera: '//span[contains(text(),"Mover a Wishlist")]',
        btnwishelejida: '//button[@class="flex gap-5 px-4 py-3 bg-white rounded cursor-pointer h-32"]',
        miwishlist: '//a[@data-testid="wishlist-6a8269b012b4e26773f6c85b-button"]',
        btnopcion: '(//button[@class="flex items-center"])[2]',
        lieliminar: '//li[contains(text(),"Eliminar")]',
        btnconfitmareliminar: '(//span[contains(text(),"Eliminar")])[2]',
        msjconfirmareliminar: '//span[contains(text(),"Eliminar lista")]',
    };

    iniciarsesion(){
        I.amOnPage('/');
        I.wait(5); //tiempo de espera que que carge bien la pagina
        I.click(this.locator.btniniciosesion);
        I.wait(2); //tiempo de espera para cargar el inicio de sesion
        I.fillField(this.locator.inputcorreo, process.env.EMAIL);
        I.fillField(this.locator.inputcontrasenia, process.env.PASSWORD);
        I.click(this.locator.btniniciarsesion);
        I.wait(30);
        I.click(this.locator.btnaceptarsms);
    }

    //TC035----------------------------
    agregarwishlist(){ //utiliza el mismo producto para todos los casos
        I.click(this.locator.btncarrito);
        I.waitForURL(this.urls.urlcarrito);
        I.click(this.locator.btnmovera);
        I.waitForVisible(this.locator.btnwishelejida);
        I.click(this.locator.btnwishelejida);
    }

    //TC036----------------------------
    verwishlist(){
        I.click(this.locator.btnwishlist);
        I.waitForURL(this.urls.urlwishlist);
        I.click(this.locator.miwishlist);
    }

    //TC037----------------------------
    removerdewishlist(){
        I.click(this.locator.btnopcion);
        I.waitForVisible(this.locator.btnopcion);
        I.click(this.locator.lieliminar);
        I.waitForVisible(this.locator.msjconfirmareliminar);
        I.click(this.locator.btnconfitmareliminar)
    }
}

module.exports = new WishlistPage();