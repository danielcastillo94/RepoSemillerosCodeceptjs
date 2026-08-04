const { I } = inject();

class KarelPage {
  urls = {
        urltelcel: 'https://www.telcel.com/',
        urlplanrenta: 'https://www.telcel.com/planes-renta',
        urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',
        riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
        equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-17-pro-max-azul-256gb/71002636',
        equipoAlterno: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-16e-blanco-128gb/71001913',
        cobertura: 'https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g',
        mapai: 'https://www.telcel.com/personas/quien-es-telcel/sobre-nosotros/mapas-cobertura',
        contactospage: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto',
        formcorreo: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail',
        urlayuda: 'https://www.telcel.com/personas/atencion-a-clientes/preguntas-frecuentes',
        urlplanAlterno: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-libre',
   
   };
  fields = {
    cookies: '//*[@id="acepto-cookies"]',
    SearchBar: '[id="buscador-menu-input"]',
    buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone16: '//p[contains(text(), "iPhone 16e")]',//'//p[contains(text(), "iPhone 17 Pro Max")]',
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
    submenuMenu: '//ul[@id="level-1"]',
    titlePlan: '//b[contains(text(), "Plan Telcel Libre")]',
    textPlanTelcelLibre: 'p[class="telcel-destacado-descriptivo---titulo"]',
    titlesPlanes: '//p[contains(@class, "content-title")]',
    tituloBusqueda: 'h3[class="results-num"]',
    imgIPhone: 'div#slide-ngb-slide-2',
    nombreIPhone: '//h1[contains(text(), "iPhone 17 Pro Max")]',
    precioIPhone: 'div[class="cx-product-price-plan"]',
    colorIPhone: 'span[class="color-txt"]',
    capacidadIPhone: '//span[contains(@class, "capacity-txt")]',
    SIMIPhone: 'div[class="title-sim"]',
    cobroIPhone : 'input[id="activePayment"]',
    caracteristicasIPhone: '//h2[contains(text(), "Características y especificaciones")]',
    telcelUltra: '//p[text()="Telcel Ultra 5"]',
    selecto: '[data-selector="6162"]',
    modal: '.modal.fade.modal-plan',
    contenedor: '//div[contains(@id,"contentDetailPlan")]',
    contenedorPlan: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    btnDetalle: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    cardProducto: 'p[class="card-products--data_name"]',
    miniMapa: 'iframe[id="iframe-recarga3"]',
    preguntasFrecuentes: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    textoElementoListaRegion: '[class="estado-Gluo text-option"]',
    textoMenu: '//div[contains(text(), "Menú")]',
    Dispositivos: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    Entretenimientio: 'a[data-nombreboton="Entretenimiento"]',
    TerminosYCondiciones: '//h1[text()="Términos y condiciones"]',
    copy: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
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
        I.waitForElement(this.fields.submenuMenu);
        I.seeElement(this.fields.buttonplanrenta);
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        I.waitForElement(this.fields.titlePlan);
        I.waitForElement(this.fields.textPlanTelcelLibre);
        I.click(this.fields.buttonplan);
    }

  async seccionPlanes(){
        I.waitForURL(this.urls.urlplanAlterno);
        I.waitForVisible(this.fields.titlesPlanes);
        I.scrollTo(this.fields.titlesPlanes);
        I.wait(5);

    }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
    }

  
  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.telcelUltra);
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.selecto, 5);
    I.click(this.fields.selecto);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.modal, 10);
    await I.waitForVisible(this.fields.modal, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.contenedor);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.contenedorPlan);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.btnDetalle)

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.see('iPhone');
      I.seeElement(this.fields.cardProducto);

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForURL(this.urls.riphone);
        I.waitForVisible(this.fields.tituloBusqueda);
    }

  seleccionequipo(){
        I.click(this.fields.iphone16);
        I.waitForURL(this.urls.equipoAlterno);
    }

  ventanadetalles(){
        I.waitForURL(this.urls.equipoAlterno);
        I.waitForVisible(this.fields.imgIPhone,//imagen
                         this.fields.nombreIPhone,//nombre
                         this.fields.precioIPhone,//precio
                         this.fields.colorIPhone,//color
                         this.fields.capacidadIPhone,//capacidad
                         this.fields.SIMIPhone,//SIM
                         //this.fields.cobroIPhone, //Cobro no existe en la pagina
                         this.fields.botoncarrito,//boton carrito
                         this.fields.botoncompra, 10);//boton compra
        I.scrollPageToBottom(); //navegacio al final para cargar elementos en el dom
        I.scrollTo(this.fields.caracteristicasIPhone, 10); //navega a las caracteristicas
        I.waitForVisible(this.fields.caracteristicasIPhone); //valida que se vean las caracteristicas
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
        I.scrollTo(this.fields.miniMapa);
        I.seeElement(this.fields.miniMapa); //mapa
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
        I.waitForElement(this.fields.preguntasFrecuentes, 5);
        
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
    I.seeElement(this.fields.textoElementoListaRegion, 5 );
    
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
            I.waitForVisible(`${this.fields.redesSociales}[href="${link.url}"]`, 10);
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"]`);     // Comprueba el enlace
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"] img`); // Comprueba la imagen
        });
    }

  // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
  verificarAccesosRapidos(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.fields.accesosRapidos}[href="${link.url}"]`, 10); // Espera a que carguen los enlaces
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
        I.seeElement(this.fields.textoMenu);
    }

  btsHamburguesa(){
        I.waitForElement(this.fields.movil,
                        this.fields.Dispositivos,
                        this.fields.Entretenimientio
        );
    }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
    }

  clickLink(){
    I.click(this.fields.copy);
    }

  seeResults() {
    I.waitForElement(this.fields.TerminosYCondiciones, 3);
    I.seeElement(this.fields.TerminosYCondiciones);
    }
    

}

module.exports = new KarelPage();