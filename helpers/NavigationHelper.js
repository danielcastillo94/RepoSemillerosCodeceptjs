const { Helper } = require("codeceptjs");
const { I } = inject();

class NavigationHelper extends Helper {
  async openTelcelHomepage() {
    const { page } = this.helpers.Playwright;
    await page.goto("https://www.telcel.com");
    await page.waitForSelector("body", { timeout: 10000 });
  }

  async goToAllPlans() {
    const { page } = this.helpers.Playwright;
    await page.click(".btn.btn-link.btn-lg");
  }

  async goToSection(seccion) {
    const { page } = this.helpers.Playwright;
    I.scrollTo("#paquetes-recarga");
    I.waitForVisible("#paquetes-recarga", 5);
    I.click("#paquetes-recarga");
    IusePlaywrightTo(
      "espera a network idle en Paquetes y Recargas",
      async ({ page }) => {
        await page.waitForLoadState("networkidle", { timeout: 10000 });
      }
    );
    I.say(`Navegando a la sección ${seccion}`);
  }
}

module.exports = NavigationHelper;
