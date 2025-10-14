const { By } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.logo = By.css('img[data-menusup="Logo"');
        this.menu = By.css('a[id="telcel-menu-principal-boton"]');
        this.banner = By.css('(//img[contains(@class, "telcel-banner-simple--imagen")])[1]');
    }

    async isLogoVisible() {
        return await this.driver.findElement(this.logo).isDisplayed();
    }

    async isMenuVisible() {
        return await this.driver.findElement(this.menu).isDisplayed();
    }

    async isBannerVisible() {
        return await this.driver.findElement(this.banner).isDisplayed();
    }
}

module.exports = HomePage;