const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class KarelPage { /** Creacion de la clase para organizar datos y comportamientos */
  urls = { /** Direcciones que utilizaremos durante las ejecuciones */
        urltelcel: 'https://www.telcel.com/',
        urlplanrenta: 'https://www.telcel.com/planes-renta',
        urlplanUltra: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',
        riphone: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
        cobertura: 'https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g',
        mapai: 'https://www.telcel.com/personas/quien-es-telcel/sobre-nosotros/mapas-cobertura',
        contactospage: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto',
        formcorreo: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail',
        urlayuda: 'https://www.telcel.com/personas/atencion-a-clientes/preguntas-frecuentes',
        urlTarifasOpciones:'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones',
        urltodosequipos: 'https://www.telcel.com/buscador?query=iPhone',
};
  fields = { /**Selectores CSS/XPath */
    cookies: '//*[@id="acepto-cookies"]',
    SearchBar: '[id="buscador-menu-input"]',
    buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone17: '//a[contains(., "iPhone 17 Pro Max")]', 
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
    menuNivel1:'//ul[@id="level-1"]',
    SubmenuPlanRenta: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    TelcelUltra: '//b[contains(text(), "Plan Telcel Ultra")]',
    TelcelDestacado: 'p[class="telcel-destacado-descriptivo---titulo"]',
    ContentTitle: '//p[contains(@class, "content-title")]',
    TelcelUltra5: '//p[text()="Telcel Ultra 5"]',
    Plan6162: '[data-selector="6162"]',
    ModalPlan: '.modal.fade.modal-plan',
    ContentDetailPlan: '//div[contains(@id,"contentDetailPlan")]',
    DetalleCargoMensual: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    CerrarModalPlan: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    DataName: 'p[class="card-products--data_name"]',
    ResultsNum: 'h3[class="results-num"]',
    CaracteristicasEspecificaciones: '//h2[contains(normalize-space(), "Características y especificaciones")]',
    Recarga3: 'iframe[id="iframe-recarga3"]',
    PreguntasFrecuentes: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    EstadoGluo: '[class="estado-Gluo text-option"]',
    Copyright: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    TerminosCondiciones: '//h1[text()="Términos y condiciones"]',
    ImagenProducto: 'div#slide-ngb-slide-2',
    NombreProducto: '//h1[contains(text(), "iPhone 17 Pro Max")]',
    PrecioProducto: 'div[class="cx-product-price-plan"]',
    Color: 'span[class="color-txt"]',
    Capacidad: '//span[contains(@class, "capacity-txt")]',
    SIM: 'div[class="title-sim"]',
    CobroRecurrente: 'input[id="activePayment"]',
    MenuHamburguesa: '//div[contains(text(), "Menú")]',
    MenuMovil: 'a[data-nombreboton="Movil"]',
    MenuDispositivos: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    MenuEntretenimiento: 'a[data-nombreboton="Entretenimiento"]',
    TelcelEncuentraPlan: '//div[.//p[text()="Encuentra tu plan"]]//button',
    btnMasPlanesUltra:'//a[@data-nombre="Telcel Ultra"]',
    btnVerMasEncuentraPlan:'//p[normalize-space()="Encuentra tu plan"]/following::button[1]',
    btnTodosEquipos: '//a[@data-titulo="Resultados buscador:Todos los Equipos"]',

};

  accesosDirectos = [
    {
        nombre: 'Planes Telcel Libre',
        url: '/personas/planes-de-renta/tarifas-y-opciones/telcel-libre'
    },
    {
        nombre: 'Paquetes Amigo Sin Límite',
        url: '/personas/amigo/paquetes/paquetes-amigo-sin-limite'
    },
    {
        nombre: 'Paquetes y Recargas',
        url: '/personas/compra-paquetes-y-recargas'
    },
    {
        nombre: 'Viajero Internacional',
        url: '/personas/roaming/paquetes-y-precios'
    },
    {
        nombre: 'Experiencias',
        url: '/personas/experiencias-telcel'
    },
    {
        nombre: 'Personas desaparecidas',
        url: '/personas-desaparecidas'
    },
    {
        nombre: 'Internet de las cosas',
        url: '/personas/internet-de-las-cosas/vida-conectada'
    },
    {
        nombre: 'Cámbiate a Telcel',
        url: '/personas/portate/hazlo-ahora'
    },
    {
        nombre: 'Promociones Plan de Renta',
        url: '/personas/planes-de-renta/promociones'
    },
    {
        nombre: '¿Quién es Telcel?',
        url: '/personas/quien-es-telcel'
    },
    {
        nombre: 'Políticas y códigos',
        url: '/personas/politicas-y-codigos'
    },
    {
        nombre: 'Trabaja con Telcel',
        url: '/personas/trabaja-con-telcel/enviar-curriculum'
    }
    ];

    redesSociales = [
    {
        nombre: 'X',
        url: 'https://twitter.com/telcel'
    },
    {
        nombre: 'Facebook',
        url: 'https://web.facebook.com/Telcel?_rdc=1&_rdr'
    },
    {
        nombre: 'YouTube',
        url: 'https://www.youtube.com/user/Telceloficial'
    },
    {
        nombre: 'Hola Telcel',
        url: 'https://holatelcel.com/'
    }
    ];

    tiendasApp = [
    {
        nombre: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.speedymovil.wire'
    },
    {
        nombre: 'App Store',
        url: 'https://apps.apple.com/mx/app/mi-telcel/id492764073'
    },
    {
        nombre: 'AppGallery',
        url: 'https://appgallery.huawei.com/#/app/C100954407?locale=en_US&source=appshare&subsource=C100954407'
    }
    ];


  formulario = { /**Selectores/Xpath referentes al formulario */
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
        I.waitForElement(this.fields.menuNivel1);
        I.seeElement(this.fields.SubmenuPlanRenta);
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        I.waitForElement(this.fields.TelcelEncuentraPlan);
        I.scrollTo(this.fields.btnVerMasEncuentraPlan);
        I.forceClick(this.fields.btnVerMasEncuentraPlan);
        I.waitForURL(this.urls.urlTarifasOpciones);
        I.waitForElement(this.fields.btnMasPlanesUltra);
        I.scrollTo(this.fields.btnMasPlanesUltra);
        I.click(this.fields.btnMasPlanesUltra);
        I.waitForURL(this.urls.urlplanUltra);

    }

  async seccionPlanes(){
        I.waitForURL(this.urls.urlplan);
        I.waitForVisible(this.fields.ContentTitle);
        I.scrollTo(this.fields.ContentTitle);
        I.wait(5);

    }

  //TC003---------------------------------------------------------------------------------------------------------------

  paginaplanes() {
    //Pagina de planes Telcel 
    I.amOnPage(this.urls.urlplan);
    }

  
  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo(this.fields.TelcelUltra5);
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement(this.fields.Plan6162, 5);
    I.click(this.fields.Plan6162);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement(this.fields.ModalPlan, 10);
    await I.waitForVisible(this.fields.ModalPlan, 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.ContentDetailPlan);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.DetalleCargoMensual);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.CerrarModalPlan)

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.see('iPhone');
      I.seeElement(this.fields.DataName);

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForURL(this.urls.riphone);
        I.waitForElement(this.fields.btnTodosEquipos);
        I.scrollTo(this.fields.btnTodosEquipos);
        I.forceClick(this.fields.btnTodosEquipos);
        I.waitForURL(this.urls.urltodosequipos);
        I.waitForVisible(this.fields.ResultsNum);
    }

  seleccionequipo(){
        I.click(this.fields.iphone17);
        I.waitForURL(/iphone-17-pro-max/);
    }

  ventanadetalles(){
        I.waitForURL(/iphone-17-pro-max/);
        I.waitForVisible(this.fields.ImagenProducto,//imagen
                        this.fields.NombreProducto,//nombre
                        this.fields.PrecioProducto,//precio
                        this.fields.Color,//color
                        this.fields.Capacidad,//capacidad
                        this.fields.SIM,//SIM
                        this.fields.CobroRecurrente,//cobro
                        this.fields.botoncarrito,//boton carrito
                        this.fields.botoncompra, //boton compra
                        this.fields.CaracteristicasEspecificaciones,10);
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
        I.scrollTo(this.fields.Recarga3);
        I.seeElement(this.fields.Recarga3); //mapa
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
        I.waitForElement(this.fields.PreguntasFrecuentes, 5);
        
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
    I.seeElement(this.fields.EstadoGluo, 5 );
    
  }

  //TC010----------------------------------------------------------------------------------------------------------------
  
  // Desplaza la página hasta el footer y espera a que termine de cargarse
  irAlFooter() {
        I.scrollTo(this.fields.footer);
        I.waitForElement(this.fields.footer, 10);
    }

  // Verifica que cada enlace e icono de redes sociales sea visible y tenga la URL correcta
  verificarRedesSociales() {
    this.redesSociales.forEach(red => {
        const selector = `${this.fields.redesSociales}[href="${red.url}"]`;
        I.waitForVisible(selector,10);
        I.seeElement(selector);
        I.seeElement(`${selector} img`);
    });
  }

  // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
  verificarAccesosRapidos() {
    this.accesosDirectos.forEach(acceso => {
        const selector =
            `${this.fields.accesosRapidos}[href="${acceso.url}"]`;
        I.waitForVisible(selector,10);
        I.seeElement(selector);
        I.see(acceso.nombre, selector);
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
        I.seeElement(this.fields.MenuHamburguesa);
    }

  btsHamburguesa(){
        I.waitForElement(this.fields.MenuMovil,
                        this.fields.MenuDispositivos,
                        this.fields.MenuEntretenimiento
        );
    }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
    }

  clickLink(){
    I.click(this.fields.Copyright);
    }

  seeResults() {
    I.waitForElement(this.fields.TerminosCondiciones, 3);
    I.seeElement(this.fields.TerminosCondiciones);
    }
    

}

module.exports = new KarelPage();