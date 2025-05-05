const MiHelper = require("../helpers/MiHelper");

const { I } = inject();

class youtubeLoginPage {
    constructor() {
        this.fields ={
            youtubeIcon: '(//yt-icon[@id="logo-icon"])[1]',
            accederButton: '(//a[@aria-label="Acceder"])[1]',
            iniciarSesionSpan: '//span[text()="Inicia sesión"]',
            emailInput:'//input[@type="email"]',
            siguienteButton: '//span[text()="Siguiente"]',
            emailError: '//div[contains(text(), "No pudimos encontrar tu Cuenta")]',
        }
    }

  estoyEnYoutube(){
    I.amOnPage('https://www.youtube.com/');
    I.waitForElement(this.fields.youtubeIcon, 20);
  }  

    presionoBotonLogin(){
        I.waitForVisible(this.fields.accederButton, 20);
        I.click(this.fields.accederButton);
        I.wait(2);
    }

    validarLoginPage(){
        I.waitForElement(this.fields.iniciarSesionSpan, 20);
        I.seeElement(this.fields.iniciarSesionSpan);
    }

    async ingresarCredencialesIncorrectas(){
        I.waitForElement(this.fields.emailInput, 20);
        //I.fillField(this.fields.emailInput, 'jorge@prueba.com')
       await I.login('jorge@prueba.com')
    }

    presionoBotonSiguiente(){
       // I.waitForElement(this.fields.siguienteButton, 20);
        //I.click(this.fields.siguienteButton);
        I.wait(3);
    }

    validarCorreoIncorrecto(){
       // I.waitForElement(this.fields.emailError, 20);
       // I.seeElement(this.fields.emailError);
       I.esperarYValidar(this.fields.emailError);
    }


}

module.exports = new youtubeLoginPage();
