const { I } = inject();
const SauceDemoPage = require("../pages/sauceDemoPage");


Given('El usuario esta en SauceDemo', () => {

  I.amOnPage("https://www.saucedemo.com/");

});


When('El usuario inicia sesion', () => {

  SauceDemoPage.iniciarSesion();

});


Then('El usuario visualiza los productos', () => {

  SauceDemoPage.validarProductos();

});