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
    subMenuNivel1:  '//ul[@id="level-1"]',
    opcionPlanRenta: '//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]',
    tituloPlanUltra: '//b[contains(text(), "Plan Telcel Ultra")]',
    tituloContenidoPlan: 'p[class="telcel-destacado-descriptivo---titulo"]',
    tituloContenido: '//p[contains(@class, "content-title")]',
    planUltra5: '//p[text()="Telcel Ultra 5"]',
    botonDetalles6162: '[data-selector="6162"]',
    modalPlan: '.modal.fade.modal-plan',
    contenidoDetallePlan: '//div[contains(@id,"contentDetailPlan")]',
    detalleScroll: '//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]',
    cerrarModal: '//*[@id="detailPlanHeader"]/div/div/a[2]',
    nombreProductoBusqueda: 'p[class="card-products--data_name"]',
    imagenProducto: 'div#slide-ngb-slide-2',
    tituloProducto: '//h1[contains(text(), "iPhone 17 Pro")]',
    precioProducto: 'div[class="cx-product-price-plan"]',
    colorProducto: 'span[class="color-txt"]',
    capacidadProducto: '//span[contains(@class, "capacity-txt")]',
    simProducto: 'div[class="title-sim"]',
    cobroActivo: 'input[id="activePayment"]',
    iframeMapa : 'iframe[id="iframe-recarga3"]',
    contendorPreguntas: '//*[@id="gluoSolapa-preguntas-frecuentes"]/div[2]',
    estadoSeleccionado: '[class="estado-Gluo text-option"]',
    menuHamburguesaTitulo: '//div[contains(text(), "Menú")]',
    menuMovil: 'a[data-nombreboton="Movil"]',
    menuDispositivos: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
    menuEntretenimiento: 'a[data-nombreboton="Entretenimiento"]',
    linkTerminos: '//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a',
    tituloTerminos: '//h1[text()="Términos y condiciones"]',
    cookies: '//*[@id="acepto-cookies"]',
    SearchBar: '[id="buscador-menu-input"]',
    buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
    buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',
    iphone17:'a[data-titulo="Resultados buscador:iPhone 17 Pro Max"]',
    botoncompra: '//button[contains(@class, "btn-primary")]',
    botoncarrito: '//button[contains(@class, "addtominicart")]',
    estado: '//div[@id="lista-subopciones-menu"]/ul/li[2]/a',
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
    todosLosEquipos:'a[data-titulo="Resultados buscador:Todos los Equipos"]',
    


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
        I.seeElement(this.fields.opcionPlanRenta);
        I.click(this.fields.buttonplanrenta);
    }

  ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        I.waitForElement(this.fields.buttonplan,10);
        I.click(this.fields.buttonplan);
    }

  async seccionPlanes(){
    I.waitForURL(this.urls.urlplan);
    I.waitForVisible(this.fields.tituloContenido, 15); // timeout explícito, antes usaba el default
    I.scrollTo(this.fields.tituloContenido);
    I.wait(2); // reducido, ya no hace falta esperar 5s a ciegas
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
    I.waitForElement(this.fields.botonDetalles6162, 5);
    I.click(this.fields.botonDetalles6162);

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement('.modal.fade.modal-plan', 10);
    await I.waitForVisible('.modal.fade.modal-plan', 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', this.fields.contenidoDetallePlan);
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo(this.fields.detalleScroll);
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click(this.fields.cerrarModal);

  }

  //TC004--------------------------------------------------------------------------------------------------------------

  buscador(){
    I.fillField(this.fields.SearchBar, "iPhone");
    I.pressKey('Enter');

    }

    async resultadosBusqueda(){
      I.waitForURL(this.urls.riphone);
      I.see('iPhone');  
      I.seeElement('p[class="card-products--data_name"]');

    }
  //TC005--------------------------------------------------------------------------------------------------------------

  busqueda(){
      
        I.fillField(this.fields.SearchBar, "iPhone");
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForURL(this.urls.riphone);
        I.waitForVisible('h3[class="results-num"]',10);
    }
mostrarTodosLosEquipos(){

    I.waitForElement(this.fields.todosLosEquipos,10);
    I.scrollTo(this.fields.todosLosEquipos);
    I.click(this.fields.todosLosEquipos);

}

  seleccionequipo(){
        I.waitForElement(this.fields.iphone17,10);
        I.click(this.fields.iphone17);
        I.waitForURL(this.urls.equipo);
    }

  ventanadetalles(){
        I.waitForURL(this.urls.equipo);
        I.waitForVisible('div#slide-ngb-slide-2',//imagen
                         this.fields.tituloProducto,//nombre
                         this.fields.precioProducto,//precio
                         this.fields.colorProducto,//color
                         this.fields.capacidadProducto,//capacidad
                         this.fields.simProducto,//SIM
                         this.fields.cobroActivo,//cobro
                         this.fields.botoncarrito,//boton carrito
                         this.fields.botoncompra);//boton compra
        //I.scrollTo(this.fields.tituloContenido);
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
        I.waitForElement(this.fields.contendorPreguntas);
        
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
  
  // Desplaza la página hasta el footer y espera a que termine de cargarse
  // Desplaza la página hasta el footer y espera a que termine de cargarse
irAlFooter() {
    I.scrollTo(this.fields.footer);
    I.waitForElement(this.fields.footer, 10);
    I.wait(2);
}
  // Verifica que cada enlace e icono de redes sociales sea visible y tenga la URL correcta
  verificarRedesSociales(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.fields.redesSociales}[href="${link.url}"]`, 5);
            I.seeElement('//div[@id="telcel-footer-menu-personas"]//a[contains(@data-nombreboton,"Internet de las cosas")]');
            I.seeElement('//div[@id="telcel-footer-menu-personas"]//a[contains(@data-nombreboton,"Cámbiate a Telcel")]');
            I.seeElement('//div[@id="telcel-footer-menu-personas"]//a[contains(@data-nombreboton,"Promociones Plan de Renta")]');
            //I.seeElement(`${this.fields.redesSociales}[href="${link.url}"]`);     // Comprueba el enlace
            //I.seeElement(`${this.fields.redesSociales}[href="${link.url}"] img`); // Comprueba la imagen
        });
    }

  // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
 verificarAccesosRapidos(linksEsperados) {
    linksEsperados.forEach(link => {
        I.waitForVisible(`${this.fields.footer} a[href="${link.url}"]`, 5);
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
        I.seeElement(this.fields.menuHamburguesaTitulo);
    }

  btsHamburguesa(){
        I.waitForElement(this.fields.menuMovil, 5);
        I.waitForElement(this.fields.menuDispositivos, 5);
        I.waitForElement(this.fields.menuEntretenimiento, 5);
    }


  //TC012-----------------------------------------------------------------------------------------------------------------------------------------
  goToPageEnd() {
    I.scrollPageToBottom();
    }

  clickLink(){
    I.click(this.fields.linkTerminos);
    }

  seeResults() {
    I.waitForElement(this.fields.tituloTerminos, 3);
    I.seeElement(this.fields.tituloTerminos);
    }
    

}

module.exports = new KarelPage();