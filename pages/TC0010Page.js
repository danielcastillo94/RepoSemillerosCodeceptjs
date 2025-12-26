class TC0010Page {
  constructor(I) {
    this.I = I;

    // Elementos
    this.iconoTwitter = 'img[alt="x twitter"]';
    this.iconoFacebook = 'img[alt="facebook"]';
    this.iconoYouTube = 'img[alt="youtube"]';
    this.iconoHolaTelcel = 'img[alt="hola telcel"]';
  }

  // Desplazarse al footer
  async desplazarseAlFooter() {
    const I = this.I;
    I.scrollPageToBottom();
    I.wait(2);
  }

  // Verificar que los iconos sean visibles
  async verificarIconosFooter() {
    const I = this.I;

    I.waitForElement(this.iconoTwitter, 10);
    I.seeElement(this.iconoTwitter);

    I.waitForElement(this.iconoFacebook, 10);
    I.seeElement(this.iconoFacebook);

    I.waitForElement(this.iconoYouTube, 10);
    I.seeElement(this.iconoYouTube);

    I.waitForElement(this.iconoHolaTelcel, 10);
    I.seeElement(this.iconoHolaTelcel);
  }
}

module.exports = TC0010Page;
