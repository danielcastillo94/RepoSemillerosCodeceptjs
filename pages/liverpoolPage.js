const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class liverpoolPage{

    urls={
        home: 'https://www.liverpool.com.mx/tienda/home',
        bolsa: 'https://www.liverpool.com.mx/tienda/cart',
        login: 'https://login.liverpool.com.mx/u/login',
        crearCuenta: 'https://login.liverpool.com.mx/u/signup'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        bolsa:'//span[normalize-space()="shopping_bag"]',
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
        I.amOnPage(this.urls.home);
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

    // TC001 Busqueda
    
    clicBarraBusqueda() {
        I.click(this.fields.barraBusqueda);
    }

    ingresarProducto(producto) {
        I.fillField(this.fields.barraBusqueda, producto);
    }

    presionarEnter() {
        I.pressKey('ENTER');
    }

    verificarResultados(producto) {
        I.waitForElement(this.fields.barraBusqueda, 10);
        I.seeInCurrentUrl(producto);
    }

    // TC002 

    // TC003



}

module.exports = new liverpoolPage();