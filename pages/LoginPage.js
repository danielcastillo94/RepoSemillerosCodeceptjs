const { I } = inject();

class LoginPage {
  goToHome() {
    I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
    I.waitForElement('#nav-link-accountList', 10);
  }

  clickLoginButton() {
    I.click('#nav-link-accountList');
  }

  fillEmail(email) {
    I.waitForElement('input[name="email"]', 5);
    I.fillField('input[name="email"]', email);
    I.click('Continuar');
  }

  fillPassword(password) {
    I.waitForElement('//input[@type="password" and not(contains(@class, "hide"))]', 10);
    I.fillField('//input[@type="password" and not(contains(@class, "hide"))]', password);
    I.click('Iniciar sesión');
  }

  goBackToHome() {
    I.waitForElement('a[href="/ref=ap_frn_logo"]', 10);
    I.click('a[href="/ref=ap_frn_logo"]');
  }

  verifyLoginSuccess() {
    I.waitForElement('#nav-link-accountList-nav-line-1', 10);
    I.see('Hola', '#nav-link-accountList-nav-line-1');
  }
}

module.exports = new LoginPage();
