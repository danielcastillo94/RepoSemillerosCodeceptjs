const { I } = inject();

class KarelPage {
  urls = {
    urltelcel: 'https://www.telcel.com/',
    urlplanrenta: 'https://www.telcel.com/planes-renta',
    urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',
    riphone: 'https://www.telcel.com/buscador?query=iphone%20pro%20max&mundo=Home&subseccion=Home',
    equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-16-pro-max-natural-1tb/71000508',
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
   // XPath usando la clase, texto y atributo único
      buttonplanultra: '//a[contains(@class, "btn") and @data-nombre="Telcel Ultra" and contains(text(), "Más planes")]',
    iphone16: '//p[contains(@class, "card-products--data_name") and text()="iPhone 16 Pro Max 1TB"]',
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
    menubar: '//ul[@id="level-1"]',
    subOptionPlanRenta: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    cardPlan: '//div[contains(@class, "card-free-content-content") and .//p[contains(text(), "Encuentra tu plan")]]',
    planUltraTitle: '//h2[contains(text(), "Telcel Ultra")]',
    planUltraDescriptivo: 'p[class="telcel-destacado-descriptivo---titulo"]',
    contentTitle: '//p[contains(@class, "content-title")]',
    planUltra5Text: '//p[text()="Telcel Ultra 5"]',
    btnDetalles6162: '[data-selector="6162"]',
    modalPlan: '.modal.fade.modal-plan',
    contentDetailPlan: '//div[contains(@id,"contentDetailPlan")]',
    detailPlanHeader: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    btnCloseModalDetail: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    cardProductsDataName: 'p[class="card-products--data_name"]',
    resultsNum: 'h3[class="results-num"]',
    equipoSlideImage: 'div#slide-ngb-slide-2',
    equipoTitle: '//h1[contains(text(), "iPhone 16 Pro Max 1TB")]',
    equipoPrice: 'div[class="cx-product-price-plan"]',
    equipoColor: 'span[class="color-txt"]',
    equipoCapacity: '//span[contains(@class, "capacity-txt")]',
    equipoSim: 'div[class="title-sim"]',
    equipoActivePayment: 'input[id="activePayment"]',
    equipoSpecsTitle: '//div[contains(@class, "cx-product-tabs-body-title")]/h2',
    iframeMapa: 'iframe[id="iframe-recarga3"]',
    preguntasFrecuentesContainer: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    estadoGluoText: '[class="estado-Gluo text-option"]',
    menuDiv: '//div[contains(text(), "Menú")]',
    btnDispositivos: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    btnEntretenimiento: 'a[data-nombreboton="Entretenimiento"]',
    linkTerminos: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    titleTerminos: '//h1[text()="Términos y condiciones"]'
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

  //GIVEN---------------------------------------------------------------------------------------------------------------

  login() {
    //Pagina de inicio de Telcel
    I.amOnPage('/');
    I.click(this.fields.cookies);
  }

  //TC001---------------------------------------------------------------------------------------------------------------

  validacion() {
    I.amOnPage(this.urls.urltelcel);
    I.waitForElement(this.fields.SearchBar, 5);
    I.seeInTitle('Telcel');
  }

  //TC002--------------------------------------------------------------------------------------------------------------

  accedermenu() { //método que accede al menu, "Plan de Renta"
    I.moveCursorTo(this.fields.menu);
    I.waitForElement(this.fields.menubar);
    I.seeElement(this.fields.subOptionPlanRenta);
    I.click(this.fields.buttonplanrenta);
  }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
    I.waitForURL(this.urls.urlplanrenta);
    I.waitForVisible(this.fields.cardPlan);
    I.click(this.fields.cardPlan);
    I.scrollTo(this.fields.planUltraTitle);
    I.waitForElement(this.fields.planUltraTitle);
    I.waitForElement(this.fields.planUltraDescriptivo);
    I.waitForVisible(this.fields.buttonplanultra);
    I.click(this.fields.buttonplanultra);

  
  }

  async seccionPlanes(){
    I.waitForURL(this.urls.urlplan);
    I.waitForVisible(this.fields.contentTitle);
    I.scrollTo(this.fields.contentTitle);
    I.wait(5);
  }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
  }

  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.planUltra5Text);
    I.wait(3);
  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.btnDetalles6162, 5);
    I.click(this.fields.btnDetalles6162);
  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.modalPlan, 10);
    await I.waitForVisible(this.fields.modalPlan, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.contentDetailPlan);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.detailPlanHeader);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.btnCloseModalDetail);
  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iphone pro max");
    I.pressKey('Enter');
  }

  async resultadosBusqueda(){
    I.waitForURL(this.urls.riphone);
    I.see('iPhone');
    I.seeElement(this.fields.cardProductsDataName);
  }

  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
    I.fillField(this.fields.SearchBar, "iphone pro max");
    I.pressKey('Enter');

    // Esperar a que los resultados de búsqueda carguen
    I.waitForURL(this.urls.riphone);
    I.waitForElement(this.fields.resultsNum);
  }

  seleccionequipo(){
    I.click(this.fields.iphone16);
    I.waitForURL(this.urls.equipo);
  }
ventanadetalles() {
  I.waitForURL(this.urls.equipo);

  const camposAValidar = [
    this.fields.equipoSlideImage,
    this.fields.equipoTitle,
    this.fields.equipoPrice,
    this.fields.equipoColor,
    this.fields.equipoCapacity,
    this.fields.equipoSim,
    this.fields.botoncarrito,
    this.fields.botoncompra
  ];

  camposAValidar.forEach(campo => {
    I.waitForVisible(campo, 5);
  });

I.scrollPageToBottom();
I.waitForVisible(this.fields.equipoSpecsTitle, 10);

}

  //TC006-------------------------------------------------------------------------------------------------------------

  maco(){
    I.moveCursorTo(this.fields.menu);
    I.moveCursorTo(this.fields.movil);
    I.click(this.fields.redcobertura);
  }

  vercobertura(){
    I.waitForURL(this.urls.cobertura);
    I.scrollPageToBottom(this.fields.vercobertura);
    I.click(this.fields.vercobertura);
  }

  vermapa(){
    I.waitForURL(this.urls.mapai);
    I.see('Mapas de Cobertura'); //nombre de la seccion
    I.scrollTo(this.fields.iframeMapa);
    I.seeElement(this.fields.iframeMapa); //mapa
  }

  //TC007--------------------------------------------------------------------------------------------------------------

  menuayuda(){
    I.moveCursorTo(this.fields.menu);
    I.moveCursorTo(this.fields.ayuda);
  }

  contactos(){
    I.click(this.fields.contactanos);
    I.waitForURL(this.urls.contactospage);
    I.see('¿Cómo podemos ayudarte?');
    I.click(this.fields.btncorreo);
  }

  correo(){
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

  //TC008--------------------------------------------------------------------------------------------------------------

  mayuda(){
    I.moveCursorTo(this.fields.menu);
    I.click(this.fields.ayuda);
  }

  seccionayuda(){
    I.waitForURL(this.urls.urlayuda, 5);
    I.waitForElement(this.fields.preguntasFrecuentesContainer, 5);
  }

  //TC009---------------------------------------------------------------------------------------------------------------

  SeleccionarRegion () {
    //selecciona el estado de Guerrero
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement(this.fields.Guerrero, 10);
    I.seeElement(this.fields.estadoGluoText, 5);
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
      I.waitForVisible(`${this.fields.accesosRapidos}[href="${link.url}"]`, 5); // Espera a que carguen los enlaces
      I.see(link.texto, `${this.fields.accesosRapidos}[href="${link.url}"]`);   // Comprueba que el texto y el enlace sean correctos
    });
  }

  //TC011-----------------------------------------------------------------------------------------------------------------------------------------

  vistaMovil(){
    I.usePlaywrightTo('emular vista móvil', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 }); 
    });
    I.amOnPage(this.urls.urltelcel);
  }

  menuHamburguesa(){
    I.waitForURL(this.urls.urltelcel);
    I.click(this.fields.menu);
    I.seeElement(this.fields.menuDiv);
  }

  btsHamburguesa(){
    I.waitForElement(
      this.fields.movil,
      this.fields.btnDispositivos,
      this.fields.btnEntretenimiento
    );
  }

  //TC012-----------------------------------------------------------------------------------------------------------------------------------------

  goToPageEnd() {
    I.scrollPageToBottom();
  }

  clickLink(){
    I.click(this.fields.linkTerminos);
  }

  seeResults() {
    I.waitForElement(this.fields.titleTerminos, 3);
    I.seeElement(this.fields.titleTerminos);
  }
}

module.exports = new KarelPage();