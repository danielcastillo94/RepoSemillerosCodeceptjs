const { I } = inject();

class plan5g_page {
  fields = {  //Área de selectores  
    Cookies: '[class="telcel-banner-aviso-cookies"]',


  };

  async visitPage() {
    //Pagina de planes Telcel 
    I.amOnPage('https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra');
    I.wait(20);
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      I.click('//a[@id="acepto-cookies"]');
    }

  }

  seleccion5g() {
    //Scroll a Telcel Ultra 5
    I.scrollTo('//p[text()="Telcel Ultra 5"]');
    I.wait(15);
    
  }

  verificacion5g() {  
    I.waitForElement('//*[@id="pagina-contenido-a68fab363c"]/div[2]/div/div/div/div[2]/section/div/div/div/div[3]/div[2]/div/div[5]/div/div/a', 5);
    I.click('//*[@id="pagina-contenido-a68fab363c"]/div[2]/div/div/div/div[2]/section/div/div/div/div[3]/div[2]/div/div[5]/div/div/a')
   // I.seeElement('//*[@id="pagina-contenido-a68fab363c"]/div[2]/div/div/div/div[2]/section/div/div/div/div[3]/div[2]/div/div[5]/div/div/a');
    // I.waitForElement('//*[@id="pagina-contenido-a68fab363c"]/div[2]/div/div/div/div[2]/section/div/div/div/div[3]/div[2]/div[2]/a',10);

  }

}
module.exports = new plan5g_page(); //exportar la clase
