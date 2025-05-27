const { container } = require('codeceptjs');
const helper = container.helpers('MiHelperValidacionYoutube');

module.exports = function () {
  return actor({
    async abrirYoutube() {
      this.amOnPage('/');
      this.wait(5);
    },

    async verificarLogo() {
      this.seeElement('a#logo');
    },

    async verificarCampoBusqueda() {
      this.seeElement('//input[@name="search_query"]');
    },

    async verificarBotonIniciarSesion() {
      this.seeElement('//a[@aria-label="Acceder"]');
    },

    async verificarMiniaturas() {
      await helper.verificarMiniaturas();
    }
  });
};
