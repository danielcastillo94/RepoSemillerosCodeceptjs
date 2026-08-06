const { I } = inject();

class KarelPage {
  urls = {
    urltelcel: 'https://www.telcel.com/',
    urlplanrenta: 'https://www.telcel.com/planes-renta',
    urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-libre',
    riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
    equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-17-pro-max-azul-256gb/71002636',
    cobertura: 'https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g',
    mapai: 'https://www.telcel.com/personas/quien-es-telcel/sobre-nosotros/mapas-cobertura',
    contactospage: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto',
    formcorreo: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail',
    urlayuda: 'https://www.telcel.com/personas/atencion-a-clientes/preguntas-frecuentes',
  };

  fields = {
    cookies: '//*[@id="acepto-cookies"]',
    SearchBar: '[id="buscador-menu-input"]',
    buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone17: '//p[@class="card-products--data_name" and contains(text(), "iPhone 17 Pro Max")]',
    botoncompra: '//button[contains(@class, "btn-primary")]',
    botoncarrito: '//button[contains(@class, "addtominicart")]',
    estado: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
    Guerrero: '[data-nombreboton="Guerrero"]',
    footer: 'footer.telcel-footer',
    redesSociales: 'ul.contenido-redes-sociales li a',          
    accesosRapidos: '#telcel-footer-menu-personas ul li a',
    menu: 'a#telcel-menu-principal-boton',
    movil: 'a[data-nombreboton="Movil"]',
    ayuda: 'a[data-nombreboton="Ayuda"]',
    contactanos: 'a[data-nombreboton="Contactanos"]',
    btncorreo: '//a[contains(text(), "Correo Electrónico")]',
    redcobertura: 'a[data-nombreboton="Red de mayor cobertura"]',
    vercobertura: '//button[contains(@class,"telcel-controles-cta")]',
    subMenuNivel1: '//ul[@id="level-1"]',
    subMenuItemPlanRenta: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    bannerPlanLibre: '//p[contains(@class, "telcel-destacado-descriptivo---titulo")]',
    tituloDestacado: 'p[class="telcel-destacado-descriptivo---titulo"]',
    tituloContenidoPlan: '//p[contains(@class, "content-title")]',
    opcionTelcelLibre5: '//p[text()="Telcel Libre 5"]',
    btnDetallesLibre5: '[data-selector="6126"]',
    modalPlanDetalle: '.modal.fade.modal-plan',
    contenedorDetallePlan: '//div[contains(@id,"contentDetailPlan")]',
    precioDetallePlan: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    btnCerrarModalDetalle: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    nombreProductoCard: 'p[class="card-products--data_name"]',
    contadorResultados: 'h3[class="results-num"]',
    imgDetalleEquipo: 'div#slide-ngb-slide-2',
    nombreDetalleEquipo: '//h1[contains(text(), "iPhone 17 Pro Max")]',
    precioDetalleEquipo: 'div[class="cx-product-price-plan"]',
    colorDetalleEquipo: 'span[class="color-txt"]',
    capacidadDetalleEquipo: '//span[contains(@class, "capacity-txt")]',
    simDetalleEquipo: 'div[class="title-sim"]',
    cobroDetalleEquipo: 'input[id="activePayment"]',
    tituloEspecificaciones: '//h2[contains(text(), "Características") or contains(text(), "Especificaciones")]',
    iframeMapaCobertura: 'iframe[id="iframe-recarga3"]',
    seccionPreguntasFrecuentes: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    indicadorEstadoGluo: '[class="estado-Gluo text-option"]',
    headerMenuMovil: '//div[contains(text(), "Menú")]',
    btnDispositivosSeguridad: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    btnEntretenimiento: 'a[data-nombreboton="Entretenimiento"]',
    linkTerminosFooter: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    tituloTerminosCondiciones: '//h1[text()="Términos y condiciones"]'
  };

  formulario = {
    nombre: 'input[id="contacto"]',
    paterno: 'input[id="Apaterno"]',
    materno: 'input[id="Amaterno"]',
    email: 'input[id="email"]',
    estado: 'div[id="state_0_chosen"]',
    telefono: 'input[id="telefono"]',
    comentario: 'div[id="Comentarios_chosen"]',
    consulta: 'textarea[id="Consulta"]',
    btnborrar: 'button[type="reset"]',
    btnenviar: 'a[id="form-btn"]',
  };

  // GIVEN
  login() {
    I.amOnPage('/');
    I.click(this.fields.cookies);
  }

  // TC001
  validacion() {
    I.amOnPage(this.urls.urltelcel);
    I.waitForElement(this.fields.SearchBar, 5);
    I.seeInTitle('Telcel');
  }

  // TC002
  accedermenu() {
    I.moveCursorTo(this.fields.menu);
    I.waitForElement(this.fields.subMenuNivel1);
    I.seeElement(this.fields.subMenuItemPlanRenta);
    I.click(this.fields.buttonplanrenta);
  }

  ventanaplanes() {
    I.waitForURL(this.urls.urlplanrenta);
    I.waitForElement(this.fields.bannerPlanLibre, 10);
    I.waitForElement(this.fields.tituloDestacado, 10);
    I.click(this.fields.buttonplan);
  }

  async seccionPlanes() {
    I.waitForURL(this.urls.urlplan);
    I.waitForVisible(this.fields.tituloContenidoPlan);
    I.scrollTo(this.fields.tituloContenidoPlan);
    I.wait(3);
  }

  // TC003
  paginaplanes() {
    I.amOnPage(this.urls.urlplan);
  }

  navegacion() {
    I.scrollTo(this.fields.opcionTelcelLibre5);
    I.wait(3);
  }

  seleccion5g() {
    I.waitForElement(this.fields.btnDetallesLibre5, 5);
    I.click(this.fields.btnDetallesLibre5);
  }

  async verificacion5g() {
    await I.waitForElement(this.fields.modalPlanDetalle, 10);
    await I.waitForVisible(this.fields.modalPlanDetalle, 10);
    await I.see('Cargo mensual por servicio', this.fields.contenedorDetallePlan);
    await I.wait(3);
    await I.scrollTo(this.fields.precioDetallePlan);
    await I.wait(2);
    I.click(this.fields.btnCerrarModalDetalle);
  }

  // TC004
  buscador() {
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');
  }

  async resultadosBusqueda() {
    I.waitForURL(this.urls.riphone);
    I.see('iPhone');
    I.seeElement(this.fields.nombreProductoCard);
  }

  // TC005
  busqueda() {
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');
    I.waitForURL(this.urls.riphone);
    I.waitForVisible(this.fields.contadorResultados);
  }

  seleccionequipo() {
    I.waitForElement(this.fields.iphone17, 10);
    I.scrollTo(this.fields.iphone17);
    I.click(this.fields.iphone17);
    I.waitForURL(this.urls.equipo);
  }

  ventanadetalles() {
    I.waitForURL(this.urls.equipo);
    I.waitForVisible(
      this.fields.imgDetalleEquipo,
      this.fields.nombreDetalleEquipo,
      this.fields.precioDetalleEquipo
    );
    I.scrollPageToBottom();
  }

  // TC006
  maco() {
    I.moveCursorTo(this.fields.menu);
    I.moveCursorTo(this.fields.movil);
    I.click(this.fields.redcobertura);
  }

  vercobertura() {
    I.waitForURL(this.urls.cobertura);
    I.scrollPageToBottom(this.fields.vercobertura);
    I.click(this.fields.vercobertura);
  }

  vermapa() {
    I.waitForURL(this.urls.mapai);
    I.see('Mapas de Cobertura');
    I.scrollTo(this.fields.iframeMapaCobertura);
    I.seeElement(this.fields.iframeMapaCobertura);
  }

  // TC007
  menuayuda() {
    I.moveCursorTo(this.fields.menu);
    I.moveCursorTo(this.fields.ayuda);
  }

  contactos() {
    I.click(this.fields.contactanos);
    I.waitForURL(this.urls.contactospage);
    I.see('¿Cómo podemos ayudarte?');
    I.click(this.fields.btncorreo);
  }

  correo() {
    I.waitForURL(this.urls.formcorreo);
    I.see('¿Cómo podemos ayudarte?');
    I.seeElement(
      this.formulario.nombre,
      this.formulario.paterno,
      this.formulario.materno,
      this.formulario.email,
      this.formulario.estado,
      this.formulario.telefono,
      this.formulario.comentario,
      this.formulario.consulta,
      this.formulario.btnborrar,
      this.formulario.btnenviar
    );
  }

  // TC008
  mayuda() {
    I.moveCursorTo(this.fields.menu);
    I.click(this.fields.ayuda);
  }

  seccionayuda() {
    I.waitForURL(this.urls.urlayuda, 5);
    I.waitForElement(this.fields.seccionPreguntasFrecuentes, 5);
  }

  // TC009
  SeleccionarRegion() {
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
  }

  Cambioderegion() {
    I.waitForElement(this.fields.Guerrero, 10);
    I.seeElement(this.fields.indicadorEstadoGluo, 5);
  }

  // TC010
  irAlFooter() {
    I.scrollPageToBottom();
    I.wait(2);
    I.waitForElement(this.fields.footer, 10);
  }

  verificarRedesSociales(linksEsperados) {
    linksEsperados.forEach(link => {
      const selector = `ul.contenido-redes-sociales a[data-nombreboton="${link.nombreboton}"]`;
      I.scrollPageToBottom();
      I.waitForElement(selector, 10);
      I.seeElement(selector);
    });
  }

 verificarAccesosRapidos(linksEsperados) {
    linksEsperados.forEach(link => {
      // Tomamos la primera palabra clave del texto (ej. "Tienda", "Planes", "Paquetes")
      const palabraClave = link.texto.split(' ')[0];
      const urlLimpia = link.url.replace('https://www.telcel.com', '').replace(/\/$/, '');

      // Selector robusto que busca por href parcial, data-nombreboton o texto visible
      const selectorAcceso = `//footer//a[contains(@href, "${urlLimpia}") or contains(@data-nombreboton, "${palabraClave}") or contains(normalize-space(.), "${palabraClave}")]`;

      I.scrollPageToBottom();
      I.waitForElement(selectorAcceso, 10);
      I.seeElement(selectorAcceso);
    });
  }

  // TC011
  vistaMovil() {
    I.usePlaywrightTo('emular vista móvil', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });
    I.amOnPage(this.urls.urltelcel);
  }

  menuHamburguesa() {
    I.waitForURL(this.urls.urltelcel);
    I.click(this.fields.menu);
    I.seeElement(this.fields.headerMenuMovil);
  }

  btsHamburguesa() {
    I.waitForElement(
      this.fields.movil,
      this.fields.btnDispositivosSeguridad,
      this.fields.btnEntretenimiento
    );
  }

  // TC012
  goToPageEnd() {
    I.scrollPageToBottom();
  }

  clickLink() {
    I.click(this.fields.linkTerminosFooter);
  }

  seeResults() {
    I.waitForElement(this.fields.tituloTerminosCondiciones, 3);
    I.seeElement(this.fields.tituloTerminosCondiciones);
  }
}

module.exports = new KarelPage();