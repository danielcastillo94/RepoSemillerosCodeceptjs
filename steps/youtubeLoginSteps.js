const { I } = inject();
const youtubeLoginPage = require('../pages/youtubeLoginPage.js');

Given("Estoy en la pagina de youtube",  () => {
  youtubeLoginPage.estoyEnYoutube();
});

When("Presiono el boton de login",  () => {
     youtubeLoginPage.presionoBotonLogin();
  });

  Then("Valido si la loginpage tiene el login",  () => {
    youtubeLoginPage.validarLoginPage();
  });

  Then("Ingreso las credenciales de usuario y password incorrectas",  async () => {
    await youtubeLoginPage.ingresarCredencialesIncorrectas();
  });

  
  Then("Presiono el boton de siguiente",  () => {
    youtubeLoginPage.presionoBotonSiguiente();
  });

  Then("Valido si el correo no es correcto",  () => {
    youtubeLoginPage.validarCorreoIncorrecto();
  });