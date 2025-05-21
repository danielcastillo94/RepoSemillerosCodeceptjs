const { I } = inject();
const youtubeSteps = require('./steps/youtubeSteps');

module.exports = function() {
  return actor({
    // Steps existentes...
    
    // Añadir los nuevos steps
    navigateToYouTubeHome: youtubeSteps.navigateToYouTubeHome,
    clickExploreButton: youtubeSteps.clickExploreButton,
    verifyCategories: youtubeSteps.verifyCategories,
    selectCategory: youtubeSteps.selectCategory,
    verifyVideoElements: youtubeSteps.verifyVideoElements
  });
};