const { I } = inject();

class KarelPage {
  urls = {
        urltelcel: 'https://www.telcel.com/',
        urlplanrenta: 'https://www.telcel.com/planes-renta',
        urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-libre',
        riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
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
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone17: '//p[contains(text(), "iPhone 17 Pro Max")]',
    botoncompra: '//button[contains(@class, "btn-primary")]',
    botoncarrito: '//button[contains(@class, "addtominicart")]',
    estado: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
    Guerrero:'[data-nombreboton="Guerrero"]',
    footer: 'footer.telcel-footer',
    redesSociales: 'ul.contenido-redes-sociales li a',          
    accesosRapidos: 'footer.telcel-footer a',
    menu: 'a#telcel-menu-principal-boton',
    movil: 'a[data-nombreboton="Movil"]',
    ayuda: 'a[data-nombreboton="Ayuda"]',
    contactanos: 'a[data-nombreboton="Contactanos"]',
    btncorreo: '//a[contains(text(), "Correo Electrónico")]',
    redcobertura: 'a[data-nombreboton="Red de mayor cobertura"]',
    vercobertura: '//button[contains(@class,"telcel-controles-cta")]',

    //Fields añadidos para el ejercicio

    subMenuNivel1: '//ul[@id="level-1"]',
    submenuPlanRenta: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    bannerPlanUltra: '//h2[contains(@class,"content-title")]',
    tituloPlanRenta: 'p[class="telcel-destacado-descriptivo---titulo"]',
    tituloContent: '//p[contains(@class, "content-title")]',
    planUltra5: '//p[text()="Telcel Libre 5"]',
    botonDetallePlan: '[data-selector="6126"]',
    modalPlan: '.modal.fade.modal-plan',
    detallePlan: '//div[contains(@id,"contentDetailPlan")]',
    scrollDetallePlan: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    cerrarModalPlan: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    resultadoBusqueda: 'p[class="card-products--data_name"]',
    contadorResultados: 'h3[class="results-num"]',
    caracteristicas: '//h2[contains(normalize-space(.), "Características y especificaciones")]',
    iframe: 'iframe[id="iframe-recarga3"]',
    preguntasFrecuentes: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    estadoSeleccionado: '[class="estado-Gluo text-option"]',
    menuHamburguesa: '//div[contains(text(), "Menú")]',
    terminosCondiciones: '//h1[text()="Términos y condiciones"]',
    linkTerminos: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    imgEquipo: 'div#slide-ngb-slide-2',
    nombreEquipo: '//h1[contains(text(), "iPhone 17 Pro Max")]',
    precioEquipo: 'div[class="cx-product-price-plan"]',
    colorEquipo: 'span[class="color-txt"]',
    capacidadEquipo: '//span[contains(@class, "capacity-txt")]',
    simEquipo: 'div[class="title-sim"]',
    cobroEquipo: 'input[id="activePayment"]',
    dispositivosConectados: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    entretenimiento: 'a[data-nombreboton="Entretenimiento"]'

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
        I.waitForElement(this.fields.subMenuNivel1);
        I.seeElement(this.fields.submenuPlanRenta);
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        I.waitForElement(this.fields.tituloPlanRenta, 10);
        I.click(this.fields.buttonplan);
    }

  async seccionPlanes(){
        I.waitForURL(this.urls.urlplan);
        I.waitForVisible(this.fields.tituloContent);
        I.scrollTo(this.fields.tituloContent)
        I.wait(5);

    }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
    }

  
  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.planUltra5);
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.botonDetallePlan, 5);
    I.click(this.fields.botonDetallePlan);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.modalPlan, 10);
    await I.waitForVisible(this.fields.modalPlan, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.detallePlan);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.scrollDetallePlan);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.cerrarModalPlan)

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.see('iPhone');
      I.seeElement(this.fields.resultadoBusqueda);

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForURL(this.urls.riphone);
        I.waitForVisible(this.fields.contadorResultados);
    }

  seleccionequipo(){
        I.click(this.fields.iphone17);
        I.waitForURL(this.urls.equipo);
    }

  ventanadetalles(){
        I.waitForURL(this.urls.equipo);
        I.waitForVisible(this.fields.imgEquipo,
                         this.fields.nombreEquipo,
                         this.fields.precioEquipo,
                         this.fields.colorEquipo,
                         this.fields.capacidadEquipo,
                         this.fields.simEquipo,
                         this.fields.cobroEquipo,//cobro
                         this.fields.botoncarrito,//boton carrito
                         this.fields.botoncompra);//boton compra
        I.scrollPageToBottom();
        I.waitForElement(this.fields.caracteristicas, 15);
        I.scrollTo(this.fields.caracteristicas);
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
        I.scrollTo(this.fields.iframe);
        I.seeElement(this.fields.iframe); //mapa
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
    I.seeElement(this.fields.estadoSeleccionado, 5 );
    
  }

  //TC010----------------------------------------------------------------------------------------------------------------
  irAlFooter() {
        I.scrollPageToBottom();
        I.waitForElement(this.fields.footer, 10);
        I.wait(1); 
    }
  verificarRedesSociales(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.fields.redesSociales}[href="${link.url}"]`, 10);
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"]`);
            I.seeElement(`${this.fields.redesSociales}[href="${link.url}"] img`);
        });
    }


  // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
  verificarAccesosRapidos(linksEsperados) {
    linksEsperados.forEach(link => {
        I.scrollPageToBottom();
        
        // Extraemos solo la ruta relativa (ej. "/tienda" o "/tienda/") para evitar discrepancias con el dominio
        const pathUrl = link.url.replace(/^https?:\/\/[^\/]+/, '');

        // Busca el enlace dentro de cualquier parte del footer
        const selectorLink = `${this.fields.accesosRapidos}[href*="${pathUrl}"]`;

        I.waitForElement(selectorLink, 10);
        I.seeElement(selectorLink);
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
        I.seeElement(this.fields.menuHamburguesa);
    }

  btsHamburguesa(){
        I.waitForElement(this.fields.movil,
                        this.fields.dispositivosConectados,
                        this.fields.entretenimiento
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
    I.waitForElement(this.fields.terminosCondiciones, 3);
    I.seeElement(this.fields.terminosCondiciones);
    }
    

}

module.exports = new KarelPage();