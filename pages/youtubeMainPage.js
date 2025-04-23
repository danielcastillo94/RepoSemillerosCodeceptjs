const { I } = inject();

module.exports = {
  goToHome() {
    I.amOnPage("https://www.youtube.com");
  },

  verificarLogo() {
    I.seeElement('a#logo'); // más preciso
  },

  verificarCampoBusqueda() {
    I.seeElement('input#search'); // ya es correcto
  },

  verificarBotonIniciarSesion() {
    I.seeElement('ytd-button-renderer#sign-in-button, tp-yt-paper-button[aria-label="Iniciar sesión"]');
  },

  verificarMiniaturas() {
    I.seeNumberOfElements('ytd-rich-grid-media', 10);
  }
};