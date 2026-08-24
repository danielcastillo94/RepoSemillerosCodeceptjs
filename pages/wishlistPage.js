const { loginCuentaPage, carritoPage, I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class wishlistPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
        urlwishlist: 'https://www.liverpool.com.mx/tienda/users/wishlist'
    };
    
    fields={
        botonMoverWishlist: '[data-testid^="move-to-wishlist-button-"]',
        listaWishlist: 'article[data-testid^="wishlist-"]',
        mensajeWishlistMovida: '[data-testid^="toast-"]',
        listaWishlist: '[data-testid^="wishlist-"]',
        botonAbrirLista:'button[data-testid^="wishlist-"][data-testid$="-chevron-btn"]',
        enlaceWishlist: '[data-testid="my-account-menu-item-5-wishlist-link"]',
        productoWishlist: '[data-testid^="wishlist-item-"][data-testid$="-title-link"]',
        menuTresPuntos: '[data-testid="ml-dots-menu"]',
        opcionEliminar: '//li[@role="menuitem" and normalize-space()="Eliminar"]',
        mensajeModalEliminarLista:'[data-testid="or-modal-delete-wishlist-modal-message"]',
        botonConfirmarEliminacion:'[data-testid="or-modal-delete-wishlist-modal-footer-secondary-button"]',
        mensajeEliminacion:'//span[contains(normalize-space(), "Eliminaste un artículo de tu lista")]'
    };

    //Metodos wishlist

    // TC-035

    async clicMoverWishlist() {
        await I.waitForElement(this.fields.botonMoverWishlist, 10);
        await I.click(this.fields.botonMoverWishlist);
    }

    async verificarSubmenuWishlist() {
        await I.waitForElement(this.fields.listaWishlist, 10);
    }

    async seleccionarWishlist() {
        await I.waitForElement(this.fields.listaWishlist, 10);
        await I.click(this.fields.listaWishlist);
    }

    async verificarMensajeWishlistMovida() {
        await I.waitForElement(this.fields.mensajeWishlistMovida, 10);
        I.see('Moviste artículos a Wishlist', this.fields.mensajeWishlistMovida);
    }

    // TC-036

    async clicPerfil() {
        await I.waitForElement(this.fields.botonPerfil, 10);
        await I.click(this.fields.botonPerfil);
    }

    async clicWishlist() {
        await I.waitForElement(this.fields.enlaceWishlist, 10);
        await I.click(this.fields.enlaceWishlist);
    }

    async verificarListaWishlist() {
        await I.waitForElement(this.fields.listaWishlist, 10);
    }

    async abrirListaWishlist() {
        await I.waitForElement(this.fields.botonAbrirLista, 10);
        await I.click(this.fields.botonAbrirLista);
    }

    async verificarProductoWishlist() {
        await I.waitForElement(this.fields.productoWishlist, 10);
        I.seeElement(this.fields.productoWishlist);
    }

    // TC-037

    async clicTresPuntosProducto() {
        await I.waitForElement(this.fields.menuTresPuntos, 10);
        await I.click(this.fields.menuTresPuntos);
    }

    async clicEliminar() {
        await I.waitForElement(this.fields.opcionEliminar, 10);
        await I.click(this.fields.opcionEliminar);
    }

    async verificarModalEliminacion() {
        await I.waitForElement(this.fields.mensajeModalEliminarLista,10);
    }

    async confirmarEliminacion() {
        await I.waitForElement(this.fields.botonConfirmarEliminacion,10);
        await I.click(this.fields.botonConfirmarEliminacion);
    }

    async verificarMensajeEliminacion() {
        await I.waitForElement(this.fields.mensajeEliminacion,10);
    }
}

module.exports = new wishlistPage();