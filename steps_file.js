const { I } = inject();

module.exports = function () {
  return actor({
    PaginaPrincipal() {
      return I.goToHome();
    },

    verificoContenidoCompleto() {
      return I.verifyAllContentVisible();
    },
  });
};
