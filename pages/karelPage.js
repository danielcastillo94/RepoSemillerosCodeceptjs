const { I } = inject();

class KarelPage {
  urls = {
    urltelcel: 'https://www.telcel.com/',
    urlplanrenta: 'https://www.telcel.com/planes-renta',
    urlplan2: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-libre',
    urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',
    riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
    equipo2: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-15-black-256gb/70022700',
    equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-17-pro-max-azul-256gb/71002636',
    cobertura: 'https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g',
    mapai: 'https://www.telcel.com/personas/quien-es-telcel/sobre-nosotros/mapas-cobertura',
    contactospage: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto',
    formcorreo: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail',
    urlayuda: 'https://www.telcel.com/personas/atencion-a-clientes/preguntas-frecuentes',
    tienda: 'https://www.telcel.com/tienda/',
    urlBase: 'https://www.telcel.com'
  };
  fields = {
    cookies: '//*[@id="acepto-cookies"]',
    SearchBar: '[id="buscador-menu-input"]',
    buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone17: '//p[contains(text(), "iPhone 15 256GB")]',
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
    submenuPlanes: '//ul[@id="level-1"]',
    linkPlanRentaMovil: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    tituloPlanTelcelLibre: '//b[contains(text(), "Plan Telcel Libre")]',
    tituloDestacado: 'p[class="telcel-destacado-descriptivo---titulo"]',
    tituloSeccionPlanes: '//p[contains(@class, "content-title")]',
    tituloPlanUltra5: '//p[text()="Telcel Ultra 5"]',
    botonDetallesPlan: '[data-selector="6162"]',
    modalDetallePlan: '.modal.fade.modal-plan',
    contenidoDetallePlan: '//div[contains(@id,"contentDetailPlan")]',
    detallePlanSpan: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    cerrarDetallePlan: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    resultadosBusquedaNumero: 'h3[class="results-num"]',
    cardProductoDatos: 'p[class="card-products--data_name"]',
    imagenDetalleProducto: 'div#slide-ngb-slide-2',
    nombreDetalleProducto: '//h1[contains(text(), "iPhone 15")]',
    precioDetalleProducto: 'div[class="cx-product-price-plan"]',
    colorDetalleProducto: 'span[class="color-txt"]',
    capacidadDetalleProducto: '//span[contains(@class, "capacity-txt")]',
    simDetalleProducto: 'div[class="title-sim"]',
    pagoActivoDetalleProducto: 'input[id="activePayment"]',
    mapaCoberturaIframe: 'iframe[id="iframe-recarga3"]',
    bloquePreguntasFrecuentes: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    textoCambioRegion: '[class="estado-Gluo text-option"]'
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

  texts = {
    tituloTelcel: 'Telcel',
    textoBusqueda: 'iPhone',
    textoCargoMensual: 'Cargo mensual por servicio',
    textoMapaCobertura: 'Mapas de Cobertura',
    textoAyuda: '¿Cómo podemos ayudarte?',
    textoTerminos: 'Términos y condiciones',
    textoPlanRenta: 'Plan de Renta',
    textoPlanUltra: 'Plan Ultra',
    textoPlanTelcelLibre: 'Plan Telcel Libre',
    textoIphone: 'iPhone',
    textoIphone15: 'iPhone 15'
  };

  //GIVEN---------------------------------------------------------------------------------------------------------------

  login() {
    //Pagina de inicio de Telcel
    I.amOnPage(this.urls.urlBase);
    I.click(this.fields.cookies);
  }

  //TC001---------------------------------------------------------------------------------------------------------------

  validacion() {
    I.amOnPage(this.urls.urltelcel);
    I.waitForElement(this.fields.SearchBar, 5);
    I.seeInTitle(this.texts.tituloTelcel);
  }

  //TC002--------------------------------------------------------------------------------------------------------------

  accedermenu() { //método que accede al menu, "Plan de Renta"
    I.moveCursorTo(this.fields.menu);
    I.waitForElement(this.fields.submenuPlanes);
    I.seeElement(this.fields.linkPlanRentaMovil);
    I.click(this.fields.buttonplanrenta);
  }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
    I.waitForURL(this.urls.urlplanrenta);
    I.waitForElement(this.fields.tituloPlanTelcelLibre);
    I.waitForElement(this.fields.tituloDestacado);
    I.click(this.fields.buttonplan);
  }

  async seccionPlanes() {
    I.waitForURL(this.urls.urlplan2);
    I.waitForVisible(this.fields.tituloSeccionPlanes);
    I.scrollTo(this.fields.tituloSeccionPlanes);
    I.wait(5);

  }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
  }


  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.tituloPlanUltra5);
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.botonDetallesPlan, 5);
    I.click(this.fields.botonDetallesPlan);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.modalDetallePlan, 10);
    await I.waitForVisible(this.fields.modalDetallePlan, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see(this.texts.textoCargoMensual, this.fields.contenidoDetallePlan);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.detallePlanSpan);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.cerrarDetallePlan)

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador() {
    I.fillField(this.fields.SearchBar, this.texts.textoBusqueda);
    I.pressKey('Enter');

  }

  async resultadosBusqueda() {
    I.waitForURL(this.urls.riphone);
    I.see(this.texts.textoIphone);
    I.seeElement(this.fields.cardProductoDatos);

  }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda() {

    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    // Esperar a que los resultados de búsqueda carguen
    I.waitForURL(this.urls.riphone);
    I.waitForVisible(this.fields.resultadosBusquedaNumero);
  }

  seleccionequipo() {
    I.click(this.fields.iphone17);
    I.waitForURL(this.urls.equipo2);
  }

  ventanadetalles() {
    I.waitForURL(this.urls.equipo2);
    I.waitForVisible(this.fields.imagenDetalleProducto,//imagen
      this.fields.nombreDetalleProducto,//nombre
      this.fields.precioDetalleProducto,//precio
      this.fields.colorDetalleProducto,//color
      this.fields.capacidadDetalleProducto,//capacidad
      this.fields.simDetalleProducto,//SIM
      this.fields.pagoActivoDetalleProducto,//cobro
      this.fields.botoncarrito,//boton carrito
      this.fields.botoncompra);//boton compra
    I.scrollTo(this.fields.precioDetalleProducto);

  }
  //TC006-------------------------------------------------------------------------------------------------------------
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
    I.see(this.texts.textoMapaCobertura); //nombre de la seccion
    I.scrollTo(this.fields.mapaCoberturaIframe);
    I.seeElement(this.fields.mapaCoberturaIframe); //mapa
  }
  //TC007--------------------------------------------------------------------------------------------------------------
  menuayuda() {
    I.moveCursorTo(this.fields.menu);
    I.moveCursorTo(this.fields.ayuda);
  }

  contactos() {
    I.click(this.fields.contactanos);
    I.waitForURL(this.urls.contactospage);
    I.see(this.texts.textoAyuda);
    I.click(this.fields.btncorreo);
  }
  correo() {
    I.waitForURL(this.urls.formcorreo);
    I.see(this.texts.textoAyuda);
    I.seeElement(this.formulario.nombre,
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

  //TC008--------------------------------------------------------------------------------------------------------------
  mayuda() {
    I.moveCursorTo(this.fields.menu);
    I.click(this.fields.ayuda);
  }

  seccionayuda() {
    I.waitForURL(this.urls.urlayuda, 5);
    I.waitForElement(this.fields.bloquePreguntasFrecuentes, 5);

  }


  //TC009---------------------------------------------------------------------------------------------------------------

  SeleccionarRegion() {
    //selecciona el estado de Guerrero
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);

  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement('[data-nombreboton="Guerrero"]', 10);
    I.seeElement(this.fields.textoCambioRegion, 5);

  }

  //TC010----------------------------------------------------------------------------------------------------------------

  // Desplaza la página hasta el footer y espera a que termine de cargarse
  irAlFooter() {
    I.scrollTo(this.fields.footer);
    I.waitForElement(this.fields.footer, 10);
  }

  // Verifica que cada enlace e icono de redes sociales sea visible y tenga la URL correcta
  verificarRedesSociales(linksEsperados) {
    linksEsperados.forEach(link => {
      I.waitForVisible(`${this.fields.redesSociales}[href="${link.url}"]`, 5);
      I.seeElement(`${this.fields.redesSociales}[href="${link.url}"]`);     // Comprueba el enlace
      I.seeElement(`${this.fields.redesSociales}[href="${link.url}"] img`); // Comprueba la imagen
    });
  }

  // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
  verificarAccesosRapidos(linksEsperados) {
    linksEsperados.forEach(link => {
      const hrefPath = link.url.replace(/^https?:\/\/[^/]+/, '') || '/';
      const selector = `${this.fields.accesosRapidos}[href*="${hrefPath}"]`;
      I.waitForVisible(selector, 5);
      I.see(link.texto, selector);
      I.seeElement(selector);
    });
  }

  //TC011-----------------------------------------------------------------------------------------------------------------------------------------
  vistaMovil() {
    I.usePlaywrightTo('emular vista móvil', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });
    I.amOnPage(this.urls.urltelcel);

  }

  menuHamburguesa() {
    I.waitForURL(this.urls.urltelcel);
    I.click(this.fields.menu);
    I.seeElement('//div[contains(text(), "Menú")]');
  }

  btsHamburguesa() {
    I.waitForElement('a[data-nombreboton="Movil"]',
      'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
      'a[data-nombreboton="Entretenimiento"]'
    );
  }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
  }

  clickLink() {
    I.click('//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a');
  }

  seeResults() {
    I.waitForElement(`//h1[text()="${this.texts.textoTerminos}"]`, 3);
    I.seeElement(`//h1[text()="${this.texts.textoTerminos}"]`);
  }


}

module.exports = new KarelPage();