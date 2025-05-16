const { container } = require('codeceptjs');

module.exports = function () {
  const dailyHelper = container.helpers().DailyHelper;

  return actor({
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
