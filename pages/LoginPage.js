const {I, MenuPage} = inject();
require('dotenv').config();

class LoginPage {
    locator = {
        liverpoollogo: '//img[@data-testid="blt26617d4f2e17657d-logo-default-image"]',

        btniniciosesion: '//button[@data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]',
        inputcorreo: '//input[@id="username"]',
        inputcontrasenia: '//input[@id="password"]',
        btniniciarsesion: '//button[contains(text(),"Iniciar sesión")]',
        btnaceptarsms: '//button[contains(text(),"Continuar")]',
        datospersonales: '//a[@data-testid="shortcut-button-0"]',
        textdatospersoanles: '//h2[contains(text(),"Datos personales")]',
        direcciones: '//span[contains(text(),"Direcciones")]',
        btnagregardireccion: '//a[@data-testid="add-address-button"]',
        btnmisdirecciones: '//button[@data-testid="address-tabs-tab-0"]',
        btntiendaclick: '//button[@data-testid="address-tabs-tab-1"]',
    };
    home(){
        MenuPage.inicio();
    }

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

    perfil(){
        I.wait(3);
        I.click(this.locator.btniniciosesion);
        I.waitForVisible(this.locator.datospersonales, 5);
        I.click(this.locator.datospersonales);
        I.waitForVisible(this.locator.textdatospersoanles, 5);
        I.wait(5); //espera que la pagina cargue

        I.click(this.locator.direcciones);
        I.waitForVisible(this.locator.btnagregardireccion, 
                        this.locator.btnmisdirecciones,
                        this.locator.btntiendaclick, 5
        );
        I.click(this.locator.btntiendaclick);
        I.wait(5);
    }
}

module.exports = new LoginPage();