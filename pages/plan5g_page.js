const { I } = inject();

class plan5g_page {
  fields = {  //Área de selectores  
    Cookies: '[class="telcel-banner-aviso-cookies"]',
  };

  async visitPage() {
    //Pagina de planes Telcel 
    I.amOnPage('https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra');
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      I.click('//a[@id="acepto-cookies"]');
    }

  }
  navegacion() {
    //Scroll a Telcel Ultra 5
    I.scrollTo('//p[text()="Telcel Ultra 5"]');
    //await 
    I.wait(3);

  }

  seleccion5g() {
    //Esperar el botón de detalles y dar click sobre él 
    I.waitForElement('[data-selector="6162"]', 5);
    I.click('[data-selector="6162"]');

  }

  async verificacion5g() {
    //Esperar a que aparezca el modal en el que se encuentran los detalles del plan 
    await I.waitForElement('.modal.fade.modal-plan', 10);
    await I.waitForVisible('.modal.fade.modal-plan', 10);

    //Esperar visibilidad de un elemento para validar que ha entrado al modal de detalles  
    await I.see('Cargo mensual por servicio', '//div[contains(@id,"contentDetailPlan")]');
    await I.wait(3);

    //Scroll para observar la información contenida en el plan 
    await I.scrollTo('//*[@id="contentDetailPlan"]/div[2]/div/div/span[2]');
    await I.wait(2);

    //Cerrar la ventana de los detalles del plan o modal 
    I.click('//*[@id="detailPlanHeader"]/div/div/a[2]')


  }
}
module.exports = new plan5g_page(); //exportar la clase
