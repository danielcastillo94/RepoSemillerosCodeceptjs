const {I} = inject();
require('dotenv').config();

class RegisterPage {

    locartor = {
        sesion: '//button[@data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]',
        enlacecrearcuenta: '//a[contains(text(),"Crear cuenta")]',
        craearcuenta: '//button[contains(text(),"Crear cuenta")]',
        correo: '//input[@id="email"]',
        contrasenia: '//input[@id="password"]',
        nombre: '//input[@placeholder="Nombre(s)"]',
        apaterno: '//input[@placeholder="Apellido paterno"]',
        amaterno: '//input[@placeholder="Apellido materno"]',
        contentdia: '//div[@data-testid="form-signup-field-day"]',
        valordia: '//li[@data-value="1"]', //primero un I.click despues waitforElement y al ultimo I.click
        contentmes :'//div[@data-testid="form-signup-field-month"]', 
        valormes: '//li[@data-value="1"]',
        contentanio: '//div[@data-testid="form-signup-field-year"]',
        valoranio: '//li[@data-value="2001"]',
        Genero: '(//input[@class="PrivateSwitchBase-input css-j8yymo"])[2]',
        creacion: '//button[@data-testid="form-signup-submit-button"]',
        celular: '//input[@id="phone"]',
    	btncontinuar: '//button[contains(text(),"Continuar")]',
        spancrearcuenta: '//span[contains(text(),"Crear cuenta")]',
        spanbienvenidacontinuar: '//span[contains(text(),"Continuar")]',

    };

    home(){
        I.amOnPage('/');
        I.wait(2);
    }
    
    ingresarsesion(){
        I.click(this.locartor.sesion);
        I.wait(2);
    }

    crearcuenta(){
        I.click(this.locartor.enlacecrearcuenta);
    }

    correo(){
        I.wait(2); //tiempo de espera para cargar el inicio de sesion
        I.fillField(this.locartor.correo, process.env.EMAILPRUEBA);
        I.fillField(this.locartor.contrasenia, process.env.PASSWORD);
        I.wait(2);
        I.click(this.locartor.craearcuenta);
    }

    datospersonales(){
        I.wait(3);
        I.fillField(this.locartor.nombre, process.env.NOMBRE);
        I.fillField(this.locartor.apaterno, process.env.APATERNO);
        I.fillField(this.locartor.amaterno, process.env.AMATERNO);
        //dia
        I.click(this.locartor.contentdia);
        I.waitForElement(this.locartor.valordia);
        I.click(this.locartor.valordia);
        //mes
        I.click(this.locartor.contentmes);
        I.waitForElement(this.locartor.valormes);
        I.click(this.locartor.valormes);
        //anio
        I.click(this.locartor.contentanio);
        I.waitForElement(this.locartor.valoranio);
        I.click(this.locartor.valoranio);
        //genero
        I.click(this.locartor.Genero);
        I.wait(2);

        I.click(this.locartor.spancrearcuenta);

        I.wait(3);
    }

    ncelular(){
        I.fillField(this.locartor.celular, process.env.CELULAR);
        I.click(this.locartor.btncontinuar);
        I.wait(3);
    }
    
    sms(){
        pause();
        I.click(this.locartor.btncontinuar);
        I.wait(2);
        I.click();
        I.wait(80);
    }
}

module.exports = new RegisterPage();