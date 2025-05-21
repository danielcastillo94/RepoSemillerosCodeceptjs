const Helper = codeceptjs.helper;

class YouTubeHelper extends Helper {
  /**
   * Verifica que el menú de navegación esté visible
   */
  async verifyMenuIsVisible() {
    const { WebDriver } = this.helpers;
    await WebDriver.waitForElement('//div[@id="start"]/yt-icon-button[@id="guide-button"]', 20);
  }

  /**
   * Verifica que las categorías principales estén presentes
   * @param {Array} categories - Lista de categorías a verificar
   */
  async verifyMainCategories(categories) {
    for (const category of categories) {
      await this.helpers.WebDriver.see(category);
    }
  }

  /**
   * Verifica que los elementos de video sean visibles
   */
  async verifyVideoElementsVisible() {
    const { WebDriver } = this.helpers;
    await WebDriver.waitForElement('//*[@id="hero-title"]', 20);
    await WebDriver.seeElement('//*[@id="hero-title"]');
    await WebDriver.seeElement('//*[@id="description"]/span[1]');
  }
}

module.exports = YouTubeHelper;