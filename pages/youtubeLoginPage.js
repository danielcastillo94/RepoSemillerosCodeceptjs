const MiHelper = require("../helpers/MiHelper");

const { I } = inject();

class youtubeLoginPage {
    constructor() {
        this.fields = {
          youtubeIcon: '(//yt-icon[@id="logo-icon"])[1]',
          accederButton: '(//a[@aria-label="Acceder"])[1]',
          emailInput: "#identifierId",
          siguienteButton: "#identifierNext",
          emailError:
            '//div[contains(text(), "No pudimos encontrar tu Cuenta")]',
        };
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
        I.wait(5);
        I.see("Inicia sesión");
    }

    async ingresarCredencialesIncorrectas(){
        I.waitForElement(this.fields.emailInput, 20);
        I.login('jorge@prueba.com')
    }

    presionoBotonSiguiente(){
       I.waitForElement(this.fields.siguienteButton, 20);
        I.click(this.fields.siguienteButton);
    }

    validarCorreoIncorrecto(){
        I.wait(2);
       I.see("No pudimos encontrar tu Cuenta de Google");
    }


}

module.exports = new youtubeLoginPage();
