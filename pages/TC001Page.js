class InicioPage {
  constructor(I) {
    this.I = I;

    // Elementos principales actualizados con tus selectores
    this.logo = 'img[alt="Telcel M.R."]'; // logo real
    this.menuPrincipal = '#telcel-menu-principal-boton'; // menú principal
    this.banner = 'div.telcel-banner-simple--contenedor-imagen'; // banner inicial
  }

  async verificarLogoVisible() {
    const I = this.I;
    I.waitForElement(this.logo, 15); // aumentamos tiempo por si tarda en cargar
    I.seeElement(this.logo);
  }

  async verificarMenuVisible() {
    const I = this.I;
    I.waitForElement(this.menuPrincipal, 10);
    I.seeElement(this.menuPrincipal);
  }

  async verificarBannerVisible() {
    const I = this.I;
    I.waitForElement(this.banner, 15); // aumentamos tiempo por slider
    I.seeElement(this.banner);
  }
}

module.exports = InicioPage;
