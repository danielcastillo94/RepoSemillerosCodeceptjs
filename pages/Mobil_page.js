const { I } = inject();
const { devices } = require('playwright');
const home_page = require('../pages/TC001_Home_page.js');

class mobile_page {
    movilElements = {
        menuButton: '//*[@id="telcel-menu-principal-boton"]',
        peopleButton: '//*[@id="menu-telcel-active"]/a'
    }
    //Metodo para verificar el funcionamiento movil
    movilView(){
    session('mobile user', devices['iPhone 11'], () => {
        I.amOnPage('/');
        I.click(this.movilElements.menuButton);
        I.seeElement(this.movilElements.peopleButton);
        I.click(home_page.homeElements.movil);
        I.seeElement(home_page.homeElements.movil);      
    });    
    }
}

module.exports = new mobile_page();