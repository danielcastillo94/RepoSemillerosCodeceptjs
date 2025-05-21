const { Helper } = require("codeceptjs");
const fields = require("../locators/fields.js");

class RechargeHelper extends Helper {
  get I() {
    return this.helpers["Playwright"];
  }

  async navigateRechargeSection() {
    const I = this.I;

    I.scrollTo(fields.paquetesYRecargasButton);
    I.waitForVisible(fields.paquetesYRecargasButton, 5);
    I.click(fields.paquetesYRecargasButton);

    await I.usePlaywrightTo(
      "Esperar a que la red esté inactiva",
      async ({ page }) => {
        await page.waitForLoadState("load", { timeout: 10000 });
      }
    );
  }

  async fillRechargeForm(amount, phoneNumber) {
    const I = this.I;

    I.waitForElement(fields.iframe, 20);

    await I.usePlaywrightTo(
      "Completar formulario de recarga en iframe",
      async ({ page }) => {
        const frameLocator = page.frameLocator(fields.iframe);

        // Rellenar número de teléfono y validador
        await frameLocator
          .locator(fields.numeroInput)
          .waitFor({ timeout: 20000 });
        await frameLocator.locator(fields.numeroInput).fill(phoneNumber);
        await frameLocator.locator(fields.numeroValidator).fill(phoneNumber);

        // Seleccionar tipo de compra
        await frameLocator.locator(fields.tipoCompra).click();
        await frameLocator
          .locator(fields.tipoCompraSaldo)
          .waitFor({ timeout: 10000 });
        await frameLocator.locator(fields.tipoCompraSaldo).click();

        // Botón siguiente
        await frameLocator
          .locator(fields.siguienteButton)
          .waitFor({ timeout: 10000 });
        await frameLocator.locator(fields.siguienteButton).click();

        // Seleccionar monto
        const amountSelector = `//div[contains(@class, "btn-selectable")]//button[.//span[text()="${amount}"]]`;
        await frameLocator.locator(amountSelector).waitFor({ timeout: 10000 });
        await frameLocator.locator(amountSelector).click();

        // Botón siguiente otra vez
        await frameLocator
          .locator(fields.siguienteButton)
          .waitFor({ timeout: 10000 });
        await frameLocator.locator(fields.siguienteButton).click();

        // Espera corta antes de salir del iframe
        await page.waitForTimeout(2000);
      }
    );

  }
}

module.exports = RechargeHelper;
