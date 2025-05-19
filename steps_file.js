const { container } = require('codeceptjs');
const { I } = inject();

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
    },
    async mobileRecharge(amount, phoneNumber) {
      console.log("Recargando:", amount, "al número:", phoneNumber);
      I.navigateRechargeSection();
      I.fillRechargeForm(amount, phoneNumber);
    }
  });
};
