const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class liverpoolPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        bolsa:'//span[normalize-space()="shopping_bag"]',
        // Busqueda
        resultadoBusqueda: '[data-testid="plp-page-heading-title-title"]',
        mensajeSinResultados: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
        //Categorias
        submenuCategorias: '[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]',
        opcionProductoVideojuegos: '//h3[normalize-space()="Juegos XBOX"]',
        videojuegos:'//span[@data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label" and normalize-space()="Videojuegos"]',
        //Filtros
        botonOrdenar: '[data-testid="dropdown-sorting-button"]',
        opcionMenorPrecio: '//li[@role="option"][normalize-space(.)="Menor precio"]',
        preciosProductos: '[data-testid$="-price"]',
        // Login
        correoElectronico:'#username',
        contrasena:'#password',
        botonIniciarSesion:'//button[@data-action-button-primary="true" and normalize-space()="Iniciar sesión"]',
        crearCuenta:'//a[normalize-space()="Crear cuenta"]',
        // Registro
        botonCrearCuenta:'//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]'
    };

    //Metodos
    abrirHome() {
        I.amOnPage(this.urls.urlhome);
    }

    //SmokeTest
    verificarElementosHome() {

        I.waitForElement(this.fields.barraBusqueda, 10);
        I.seeElement(this.fields.barraBusqueda);

        I.waitForElement(this.fields.categorias, 10);
        I.seeElement(this.fields.categorias);

        I.waitForElement(this.fields.perfil, 10);
        I.seeElement(this.fields.perfil);

        I.waitForElement(this.fields.bolsa, 10);
        I.seeElement(this.fields.bolsa);
    }

    //Escenario 1: Busqueda de productos

    // TC-001 Busqueda
    
    clicBarraBusqueda() {
        I.click(this.fields.barraBusqueda);
    }

    ingresarProducto(producto) {
        I.type(producto);
    }

    presionarEnter() {
        I.pressKey('Enter');
    }

    async verificarResultados(producto) {
    I.waitForElement(this.fields.resultadoBusqueda, 10);

    const resultado = await I.grabTextFrom(this.fields.resultadoBusqueda);

    I.assertEqual(resultado.toLowerCase(),producto.toLowerCase());
    }

    // TC-002 

    verificarMensajeSinResultados(producto) {
    I.waitForElement(this.fields.mensajeSinResultados, 10);
    I.see('Lo sentimos, no encontramos nada para', this.fields.mensajeSinResultados);
    I.see(producto, this.fields.mensajeSinResultados);
    }

    // TC-003
    verificarURL(producto) {
    I.waitForElement(this.fields.resultadoBusqueda,10);    
    I.seeInCurrentUrl(producto.toLowerCase());
    }

    // TC-004
    clicCategorias() {
    I.click(this.fields.categorias);
    }

    verificarSubmenuCategorias() {
    I.waitForElement(this.fields.submenuCategorias, 10);
    I.seeElement(this.fields.submenuCategorias);
    }

    // TC-005
    clicVideojuegos() {
    I.click(this.fields.videojuegos);
    }

    verificarCategoriaVideojuegos() {
    I.waitForURL(this.urls.urlvideojuegos);
    }

    // TC-006

    verificarOpcionesVideojuegos() {
    I.waitForElement(this.fields.opcionProductoVideojuegos, 10);
    I.scrollTo(this.fields.opcionProductoVideojuegos);
    I.seeElement(this.fields.opcionProductoVideojuegos);
    }

    // TC-007

    // TC-008

    // TC-009
}

module.exports = new liverpoolPage();