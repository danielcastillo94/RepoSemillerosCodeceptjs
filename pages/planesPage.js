const { expect } = require("playwright/test");

const { I } = inject();

/*Se crearon 3 metodos para simular el flujo de navegación*/

class planesPage {

    inicio() { //método que dirige a la página principal de telcel
    I.amOnPage("/");
    }

    accedermenu() { //método que accede al menu, despliega el submenú y selecciona "Plan de Renta"
        I.moveCursorTo('//a[@id="telcel-menu-principal-boton"]');
        I.waitForElement('//ul[@id="level-1"]');
        I.seeElement('//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]');
        I.click('//a[@data-submenu="Plan de renta"]');
    }

    ventanaplanes() { //método que verífica que cargue la página de "Pland de Renta"
        I.waitForURL('https://www.telcel.com/planes-renta');
        I.waitForElement('//span[contains(text(), "Plan de Renta Telcel")]');
    }

}

module.exports = new planesPage();
