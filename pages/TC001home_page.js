const { I } = inject();

class TC001home_page {

  fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    LogoTelcel: 'img.js-responsive-image[alt="Telcel M.R."][data-menusup="Logo"]',
    MenuPrincipal: '#telcel-menu-principal-boton',

    /*Instrucciones que devuelve un locator nuevo cada vez que se llama la función,
    evalúa el DOM en el momento en que se requiera, llamarlas como función en el código*/
    BannerGeneral: () => locate('a.banner-analytics'),
    BotonNext: () => locate('div.swiper-button-next[data-evento="clicGeneralTel"]'),
    BotonPrev: () => locate('div.swiper-button-prev[data-evento="clicGeneralTel"]')

  };

  async visitPage() {
    I.amOnPage('/')
   if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
     I.click('//a[@id="acepto-cookies"]');
        
    }
  }
  

  Logotipo() {
     
    I.click(this.fields.LogoTelcel);
    I.wait(5);
    I.say('Se valido click en el logotipo Telcel');

  }


  async MenuPrincipal() {
     
    
    //ir al menu principal  
   I.moveCursorTo('#telcel-menu-principal-boton');
   I.wait(5);

    //Mover el cursor fuera del menu para quitarlo
     I.moveCursorTo('body', 5, 5);
   I.click('body');
   I.wait(2);
    I.say('El despliegue de menu se validó y cerró correctamente');


  }

  async BannerInicial() {

    I.waitForVisible(this.fields.BannerGeneral(), 10);
    I.seeElement(this.fields.BannerGeneral());

    //Pasar contenido del banner usando el botón next
    for (let i = 0; i < 3; i++) { // recorrer 3 banner
      I.click(this.fields.BotonNext());
      I.wait(1);
      I.seeElement(this.fields.BannerGeneral());
    }

    // Retroceder banner utilizando el botón prev
    I.click(this.fields.BotonPrev());
    I.wait(1);
    I.seeElement(this.fields.BannerGeneral());

    I.say('El banner inicial ha sido validado y clickeado correctamente');
  }

  Valido() {
    I.say('Los elementos han cargados correctamente');
  }

}

module.exports = new TC001home_page(); //exportar la clase