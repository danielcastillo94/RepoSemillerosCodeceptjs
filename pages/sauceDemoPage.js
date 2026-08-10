const { I } = inject();

class SauceDemoPage {

  locators = {
    username: "//input[@id='user-name']",
    password: "//input[@id='password']",
    loginButton: "//input[@id='login-button']",
    productsTitle: "//span[contains(text(),'Products')]"
  };


  iniciarSesion() {
    I.waitForElement(this.locators.username, 10);
    I.fillField(this.locators.username, "standard_user");
    I.fillField(this.locators.password, "secret_sauce");
    I.click(this.locators.loginButton);
  }


  validarProductos() {
    I.waitForElement(this.locators.productsTitle, 10);
  }

}

module.exports = new SauceDemoPage();