const { container } = require('codeceptjs');
const { I } = inject();

module.exports = function () {
const dailyHelper = container.helpers().DailyHelper;
  return actor({

    PaginaPrincipal() {
      return I.goToHome();
    },

    verificoContenidoCompleto() {
      return I.verifyAllContentVisible();
    },

    irADailyMotion: async () => {
      return dailyHelper.irADailyMotion();
    },

    clickEnSeguidos: async () => {
      return dailyHelper.clickEnSeguidos();
    },

    validarEnlaceSeguidos: async () => {
      return dailyHelper.validarEnlaceSeguidos();
    }
  });
};
