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
    iphone17: '//p[contains(text(), "iPhone 17 Pro Max")]',
    botoncompra: '//button[contains(@class, "btn-primary")]',
    botoncarrito: '//button[contains(@class, "addtominicart")]',
    estado: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
    Guerrero:'[data-nombreboton="Guerrero"]',
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

  async login() {
    //Pagina de inicio de Telcel
    try {
      I.amOnPage('/');
    } catch (e) {
      I.amOnPage('/');
    }
  
    I.waitForVisible(this.fields.cookies, 10);
    I.forceClick(this.fields.cookies);
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
        I.waitForElement('//ul[@id="level-1"]');
        I.seeElement('//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]');
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { 
        I.waitForURL(this.urls.urlplanrenta);
      
        I.waitForText('Plan Telcel Libre', 10);
        I.waitForElement('p[class="telcel-destacado-descriptivo---titulo"]', 10);
        I.click(this.fields.buttonplan);
    }

  async seccionPlanes(){
        I.waitForURL(this.urls.urlplan);
        I.waitForElement('//p[contains(@class, "content-title")]', 15);
        I.waitForVisible('//p[contains(@class, "content-title")]', 15);
        I.scrollTo('//p[contains(@class, "content-title")]');
        I.wait(5);

    }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
    }

  
  navegacion() {
 
    I.scrollTo('//p[text()="Telcel Libre 5"]');
    //await 
    I.wait(3);

  }

  seleccion5g() {
    
    I.waitForElement('[data-selector="6126"]', 5);
    I.click('[data-selector="6126"]');

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement('.modal.fade.modal-plan', 10);
    await I.waitForVisible('.modal.fade.modal-plan', 10); 
    await I.see('Cargo mensual por servicio', '//div[contains(@id,"contentDetailPlan")]');
    await I.wait(3);
    await I.scrollTo('//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]');
    await I.wait(2);
    I.click('//*[@id="detailPlanHeader"]/div/div/a[2]')

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.waitForElement('h3[class="results-num"]', 15);
      I.waitForVisible('h3[class="results-num"]', 15);
      I.see('iPhone');
      I.seeElement('p[class="card-products--data_name"]');

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');
        I.waitForURL(this.urls.riphone);
        I.waitForElement('h3[class="results-num"]', 20);
        I.waitForVisible('h3[class="results-num"]', 20);
    }

  seleccionequipo(){
        I.waitForElement('//a[contains(text(), "Todos los Equipos")]', 10);
        I.click('//a[contains(text(), "Todos los Equipos")]');
        I.waitForElement(this.fields.iphone17, 15);
        I.click(this.fields.iphone17);
        I.waitForURL(/apple-iphone-17-pro-max-\w+-256gb/, 20);
    }

  ventanadetalles(){
        I.waitForURL(/apple-iphone-17-pro-max-\w+-256gb/, 20);
        I.waitForVisible('div#slide-ngb-slide-2',
                         '//h1[contains(text(), "iPhone 17 Pro Max")]',
                         'div[class="cx-product-price-plan"]',
                         'span[class="color-txt"]',
                         '//span[contains(@class, "capacity-txt")]',//capacidad
                         'div[class="title-sim"]',
                         'input[id="activePayment"]',
                         this.fields.botoncarrito,
                         this.fields.botoncompra);
        I.scrollPageToBottom();
        I.wait(3);
        I.scrollPageToBottom();
        I.waitForElement('//h2[contains(text(), "Características y especificaciones")]', 20);
        I.scrollTo('//h2[contains(text(), "Características y especificaciones")]');
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
        I.see('Mapas de Cobertura'); 
        I.scrollTo('iframe[id="iframe-recarga3"]');
        I.seeElement('iframe[id="iframe-recarga3"]'); 
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
  mayuda(){
        I.moveCursorTo(this.fields.menu);
        I.click(this.fields.ayuda);
    }

  seccionayuda(){
        I.waitForURL(this.urls.urlayuda, 5);
        I.waitForElement('//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]', 5);
        
    }


  //TC009---------------------------------------------------------------------------------------------------------------

  SeleccionarRegion () {
    //selecciona el estado de Guerrero
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
    
  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement('[data-nombreboton="Guerrero"]', 10);
    I.seeElement('[class="estado-Gluo text-option"]', 5 );
    
  }

  //TC010----------------------------------------------------------------------------------------------------------------

  irAlFooter() {
        I.scrollTo(this.fields.footer);
        I.waitForElement(this.fields.footer, 10);
    }

  verificarRedesSociales(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.fields.redesSociales}[href="${link.url}"]`, 5);
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"]`);     
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"] img`); 
        });
    }

 
  verificarAccesosRapidos(linksEsperados) {
        I.scrollTo(this.fields.accesosRapidos);
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.fields.accesosRapidos}[href="${link.url}"]`, 10); 
            I.see(link.texto, `${this.fields.accesosRapidos}[href="${link.url}"]`);   
        });
    }

  
  verificarAccesosRapidosOcultos(linksEsperados) {
        linksEsperados.forEach(link => {
            I.seeElement(`${this.fields.accesosRapidos}[href="${link.url}"]`);
            I.see(link.texto, `${this.fields.accesosRapidos}[href="${link.url}"]`);
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
        I.seeElement('//div[contains(text(), "Menú")]');
    }

  btsHamburguesa(){
        I.waitForElement('a[data-nombreboton="Movil"]',
                        'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
                        'a[data-nombreboton="Entretenimiento"]'
        );
    }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
    }

  clickLink(){
    I.click('//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a');
    }

  seeResults() {
    I.waitForElement('//h1[text()="Términos y condiciones"]', 3);
    I.seeElement('//h1[text()="Términos y condiciones"]');
    }
    

}

module.exports = new KarelPage();