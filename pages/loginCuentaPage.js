const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */
const readline = require('readline');

class loginCuentaPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urllogin: 'https://login.liverpool.com.mx/u/login?state=hKFo2SBucXY0YUh5LWlXZmVJeE1namg3NVlkUk9odnV3aml4bKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIG91VXZRcE1mS1F3RlExcFJMY3ItN0o2X2RpUnRKY1Rzo2NpZNkgSjFXOVJPZ1RZaWltbkM5UGl0ZDJKd3Y3RXpqV05VQWo',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlmiCuenta: 'https://www.liverpool.com.mx/tienda/users/myAccount',
        urldirecciones: 'https://www.liverpool.com.mx/tienda/users/addressBook'
    };
    
    fields={
        // Home
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        // Login
        correoElectronico:'#username',
        contrasena:'#password',
        botonIniciarSesion:'//button[@data-action-button-primary="true" and normalize-space()="Iniciar sesión"]',
        crearCuenta:'//a[normalize-space()="Crear cuenta"]',
        // Registro
        botonCrearCuenta:'//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]',
        // Verificación
        tituloCodigoVerificacion: '//h1[normalize-space()="Código de verificación"]',
        campoCodigoVerificacion: '#code',
        botonContinuarVerificacion: '//button[@data-action-button-primary="true" and normalize-space()="Continuar"]',
         // Mi cuenta
        botonPerfil: '[data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]',
        breadcrumbMiCuenta: '[data-testid="breadcrumb-test"]',
        // Direcciones
        enlaceDirecciones: '[data-testid="my-account-menu-item-3-direcciones-link"]',
        tabMisDirecciones: '[data-testid="address-tabs-tab-0"]',
        // Registro
        tituloCrearCuenta: '//h1[normalize-space()="Crear cuenta"]',
        correoRegistro: '#email',
        contrasenaRegistro: '#password',
        botonCrearCuenta: '//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]',

// Datos personales
        campoNombre: 'input[name="firstName"]',
        campoApellidoPaterno: 'input[name="lastName"]',
        campoApellidoMaterno: 'input[name="motherLastName"]',
        botonCrearCuentaPerfil: '[data-testid="form-signup-submit-button"]'
    };

    //Metodos

    // TC-065

    async abrirRegistro() {
        await I.click(this.fields.crearCuenta);
    }

    async verificarPaginaRegistro() {
        await I.waitForElement(this.fields.tituloCrearCuenta, 10);
    }

    async ingresarCorreoRegistro() {
        await I.waitForElement(this.fields.correoRegistro, 10);
        await I.fillField(this.fields.correoRegistro,process.env.LIVERPOOL_EMAIL_REGISTRO);
    }

    async ingresarContrasenaRegistro() {
        await I.waitForElement(this.fields.contrasenaRegistro, 10);
        await I.fillField(this.fields.contrasenaRegistro,process.env.LIVERPOOL_PASSWORD_REGISTRO);
    }

    async clicCrearCuenta() {
        await I.waitForElement(this.fields.botonCrearCuenta, 10);
        await I.click(this.fields.botonCrearCuenta);
    }   

    async verificarFormularioDatosPersonales() {
        await I.waitForElement(this.fields.campoNombre, 10);
        await I.waitForElement(this.fields.campoApellidoPaterno, 10);
        await I.waitForElement(this.fields.campoApellidoMaterno, 10);
        I.seeElement(this.fields.campoNombre);
        I.seeElement(this.fields.campoApellidoPaterno);
        I.seeElement(this.fields.campoApellidoMaterno);
    }

    // TC-066

    async abrirLogin() {
        await I.amOnPage(this.urls.urllogin);
    }

    async ingresarCorreo() {
        await I.waitForElement(this.fields.correoElectronico, 10);
        await I.fillField(this.fields.correoElectronico,process.env.LIVERPOOL_EMAIL);
    }

    async ingresarContrasena() {
        await I.waitForElement(this.fields.contrasena, 10);
        await I.fillField(this.fields.contrasena,process.env.LIVERPOOL_PASSWORD);
    }

    async clicIniciarSesion() {
        await I.waitForElement(this.fields.botonIniciarSesion, 10);
        await I.click(this.fields.botonIniciarSesion);
    }

    async ingresarCodigoVerificacion() {
        await I.waitForElement(this.fields.tituloCodigoVerificacion, 10);
        await I.waitForElement(this.fields.campoCodigoVerificacion, 10);

        console.log('\n========================================');
        console.log('📱 Código de verificación requerido');
        console.log('Revisa el código enviado a tu celular.');
        console.log('========================================');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const codigo = await new Promise((resolve) => {
            rl.question('Ingresa el código de verificación: ', (respuesta) => {
                rl.close();
                resolve(respuesta.trim());
            });
        });
        if (!/^\d+$/.test(codigo)) {
            throw new Error(
                `El código de verificación debe contener únicamente números. Código recibido: "${codigo}"`
            );
        }
        await I.fillField(this.fields.campoCodigoVerificacion,codigo);
        console.log('✓ Código de verificación ingresado.');
    }

    async clicContinuarVerificacion() {
        await I.waitForElement(this.fields.botonContinuarVerificacion, 10);
        await I.click(this.fields.botonContinuarVerificacion);
    }

    // TC-067

    async clicPerfil() {
        await I.waitForElement(this.fields.botonPerfil, 10);
        await I.click(this.fields.botonPerfil);
    }

    async verificarPaginaMiCuenta() {
        I.waitInUrl('/tienda/users/myAccount');
        I.seeInCurrentUrl('/tienda/users/myAccount');
        I.waitForElement(this.fields.breadcrumbMiCuenta, 10);
        I.see('Mi Cuenta', this.fields.breadcrumbMiCuenta);
    }

    async clicDirecciones() {
        I.waitForElement(this.fields.enlaceDirecciones, 10);
        I.click(this.fields.enlaceDirecciones);
    }

    async verificarDirecciones() {
        I.waitInUrl('/tienda/users/addressBook');
        I.seeInCurrentUrl('/tienda/users/addressBook');
        I.waitForElement(this.fields.tabMisDirecciones, 10);
        I.see('Mis direcciones', this.fields.tabMisDirecciones);
    }

    async iniciarSesion() {
        await this.abrirLogin();
        await this.ingresarCorreo();
        await this.ingresarContrasena();
        await this.clicIniciarSesion();
        await this.ingresarCodigoVerificacion();
        await this.clicContinuarVerificacion();
    }

}

module.exports = new loginCuentaPage();