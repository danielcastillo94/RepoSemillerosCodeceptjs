<<<<<<< HEAD
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
=======
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
    },
    async mobileRecharge(amount, phoneNumber) {
      console.log("Recargando:", amount, "al número:", phoneNumber);
      I.navigateRechargeSection();
      I.fillRechargeForm(amount, phoneNumber);
    }
  });
};
>>>>>>> f5125749a6b327bf9c74e3b8da89c79c71c34394
