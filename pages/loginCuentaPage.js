const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class loginCuentaPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup'
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
        botonCrearCuenta:'//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]'
    };

    //Metodos

}

module.exports = new loginCuentaPage();