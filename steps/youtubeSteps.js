const { I } = inject();

module.exports = {
  navigateToYouTubeHome: function () {
    I.amOnPage("https://www.youtube.com");
    I.verifyMenuIsVisible();
    I.click('//div[@id="start"]/yt-icon-button[@id="guide-button"]');
  },

  clickExploreButton: function () {
    I.waitForElement('(//h3[not(@hidden)]/yt-formatted-string[@id="guide-section-title"])[1]', 10);
  },

  verifyCategories: function (categories) {
    I.verifyMainCategories(categories.split(', '));
  },

  selectCategory: function (category) {
    I.click(category);
    I.wait(4);
  },

  verifyVideoElements: function () {
    I.verifyVideoElementsVisible();
  }
};