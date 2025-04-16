const { I } = inject();
const LoginPage = require('../pages/LoginPage');

Given('estoy en la página de inicio de Amazon', () => {
  LoginPage.goToHome();
});

When('doy clic en el botón de iniciar sesión', () => {
  LoginPage.clickLoginButton();
});

When('ingreso mi usuario y contraseña de Amazon', () => {
  LoginPage.fillEmail('jose_macias12@outlook.com');
  LoginPage.fillPassword('abcdsad12131!');
  LoginPage.goBackToHome();
});

Then('debería ver el nombre del usuario en la barra superior', () => {
  LoginPage.verifyLoginSuccess();
});
