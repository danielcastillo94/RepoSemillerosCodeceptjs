const { I } = inject();
const { expect } = require("chai");

class SearchPage {
  constructor() {
    this.fields = {
      firstResultDuration:
        '(//span[@class="style-scope ytd-thumbnail-overlay-time-status-renderer"])[1]',
    };
  }

  async validateDurationSpan() {
    await I.waitForElement(this.fields.firstResultDuration, 5);
    console.log("Existe el campo de duración");
  }

  async validateHiddenDuration() {

    const xpath = this.fields.firstResultDuration + "/.."
    const parent = await locate(xpath);

    const isHidden = await I.grabAttributeFrom(parent, "hidden");
    expect(isHidden, "El campo duración no esta oculto").to.not.be.null;
    console.log("El campo de duración está oculto");
  }

  async validateDurationFormat() {
    
    const durationText = await I.grabTextFrom(this.fields.firstResultDuration);
    const durationPattern = /^(\d{1,3}:\d{2}(:\d{2})?)$/;

    console.log("Texto de duración:", durationText.trim());
    expect(
      durationPattern.test(durationText.trim()),
      "El formato de duración no es válido"
    ).to.be.true;
    console.log("El formato de duración es válido:");
  }
}

module.exports = new SearchPage();