const { container } = require('codeceptjs');
const { I } = inject();
const youtubeSteps = require('./steps/youtubeSteps');

module.exports = function () {
  const dailyHelper = container.helpers().DailyHelper;

  return actor({
    // Funciones de navegación personalizadas
    PaginaPrincipal() {
      return I.goToHome();
    },

    verificoContenidoCompleto() {
      return I.verifyAllContentVisible();
    },

    // Funciones de DailyHelper
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
    },

    // Steps de YouTube
    navigateToYouTubeHome: youtubeSteps.navigateToYouTubeHome,
    clickExploreButton: youtubeSteps.clickExploreButton,
    verifyCategories: youtubeSteps.verifyCategories,
    selectCategory: youtubeSteps.selectCategory,
    verifyVideoElements: youtubeSteps.verifyVideoElements
  });
};
