class TC002Page {
  constructor(I) {
    this.I = I;
    this.seccionPlanes = 'h2.section-title.tc-text-color-active';
  }

  async verificarSeccionPlanes() {
    const I = this.I;
    I.waitForElement(this.seccionPlanes, 15);
    I.seeElement(this.seccionPlanes);
    I.see('Planes', this.seccionPlanes);
  }
}

module.exports = TC002Page;
