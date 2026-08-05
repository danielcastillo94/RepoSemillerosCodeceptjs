const { I } = inject();

class KarelPage {
  urls = {
        urltelcel: 'https://www.telcel.com/',
        urlplanrenta: 'https://www.telcel.com/planes-renta',
        urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',
        riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
        // Se cambio la URL de equipo ya que en antes estaba con el color azul y ahora redirije a color naranja
        equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-17-pro-max-naranja-256gb/71002637',
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
    // buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    buttonplan: '//div[@class="swiper-wrapper"]/div[1]/div/a/div',
    buttonplan1: '//div[@class="principal responsivegrid"]/div/div/div/div[3]/section/div/div/div[2]/div/div/div/div[5]/div/div/a',

    // Se agrego nuevo campo ya que es para dar click en e botón de "Todos los equipos" y ver la lista de equipos disponibles en la página de resultados de búsqueda
    todoslosequipos: '//a[contains(text(), "Todos los Equipos")]',
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

    // Agregados 
    menu2: '//ul[@id="level-1"]',
    planderenta:'//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    encuentratuplan: '//div[contains(@class,"swiper-wrapper")]/div[1]/div/a/div/p[1]',
    planestelcel: 'p[class="telcel-destacado-descriptivo---titulo"]',
    telcelultra3: '//p[contains(@class, "content-title")]',
    telcelultra5: '//p[text()="Telcel Ultra 5"]',
    verdetalle: '[data-selector="6162"]',
    modal: '.modal.fade.modal-plan',
    modaldetalle: '//div[contains(@id,"contentDetailPlan")]',
    informacionContenidoplan: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    cerrarventanadetalle: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    titulodescripcion: 'p[class="card-products--data_name"]',
    etiquetaiphone: 'h3[class="results-num"]',
    imgen: 'div#slide-ngb-slide-2',
    nombre: '//h1[contains(text(), "iPhone 17 Pro Max")]',
    precio: 'div[class="cx-product-price-plan"]',
    color: 'span[class="color-txt"]',
    capacidad: '//span[contains(@class, "capacity-txt")]', 
    SIM:  'div[class="title-sim"]',
    caracteristicasespecificaciones: '//h2[contains(text(), "Características y especificaciones")]',
    mapa: 'iframe[id="iframe-recarga3"]',
    preguntas: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    cdmexico: '[class="estado-Gluo text-option"]',
    encabezadomenu: '//div[contains(text(), "Menú")]',
    Movil1: 'a[data-nombreboton="Movil"]',
    seguridad: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    entrenamiento: 'a[data-nombreboton="Entretenimiento"]',
    terminos: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    condiciones: '//h1[text()="Términos y condiciones"]',
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
        I.waitForElement(this.fields.menu2, 5);
        I.seeElement(this.fields.planderenta, 5);
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        // I.waitForElement('//b[contains(text(), "Plan Telcel Ultra")]');
        I.waitForElement(this.fields.encuentratuplan, 5);
        I.waitForElement(this.fields.planestelcel, 5);
        I.wait(10);
        I.click(this.fields.buttonplan);
        I.wait(10);
        I.click(this.fields.buttonplan1);
        
    }

  async seccionPlanes(){
        I.waitForURL(this.urls.urlplan);
        I.waitForVisible(this.fields.telcelultra3, 5);
        I.scrollTo(this.fields.telcelultra3, 5);
        I.wait(5);

    }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
    }

  
  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.telcelultra5, 5);
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.verdetalle, 5);
    I.click(this.fields.verdetalle);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.modal, 10);
    await I.waitForVisible(this.fields.modal, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.modaldetalle);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.informacionContenidoplan, 5);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.cerrarventanadetalle);

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.see('iPhone');
      I.seeElement(this.fields.titulodescripcion);

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.wait(10);
        I.waitForURL(this.urls.riphone);
        I.wait(10);
        I.waitForVisible(this.fields.etiquetaiphone);
        I.wait(10);
        I.click(this.fields.todoslosequipos);
    }

  seleccionequipo(){
        I.click(this.fields.iphone17);
        I.waitForURL(this.urls.equipo);
    }

  ventanadetalles(){
        I.waitForURL(this.urls.equipo);
        I.waitForVisible(this.fields.imgen,//imagen
                         this.fields.nombre,//nombre
                         this.fields.precio,//precio
                         this.fields.color,//color
                         this.fields.capacidad,//capacidad
                         this.fields.SIM,//SIM
                        //  'input[id="activePayment"]',//cobro
                         this.fields.botoncarrito,//boton carrito
                         this.fields.botoncompra);//boton compra
                         I.wait(10);
        I.scrollTo(this.fields.caracteristicasespecificaciones);
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
        I.scrollTo(this.fields.mapa);
        I.seeElement(this.fields.mapa); //mapa
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
        I.waitForElement(this.fields.preguntas, 5);
        
    }


  //TC009---------------------------------------------------------------------------------------------------------------

  SeleccionarRegion () {
    //selecciona el estado de Guerrero
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
    
  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement(this.fields.estado, 10);
    I.seeElement(this.fields.cdmexico, 5 );
    
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
        I.seeElement(this.fields.encabezadomenu);
    }

  btsHamburguesa(){
        I.waitForElement(this.fields.Movil1,
                        this.fields.seguridad,
                        this.fields.entrenamiento,
                        
        );
    }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
    }

  clickLink(){
    I.click(this.fields.terminos);
    }

  seeResults() {
    I.waitForElement(this.fields.condiciones, 3);
    I.seeElement(this.fields.condiciones);
    }
    

}

module.exports = new KarelPage();