const { I } = inject();
class TC004buscador_page {

   fields = {
      Cookies: '[class="telcel-banner-aviso-cookies"]',
      Buscador: '#buscador-menu-input',
      Resultado: 'h3.results-num span.filled'



   };

   async PageHome() {
      await I.amOnPage('https://www.telcel.com/')
      if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
         await I.click('//a[@id="acepto-cookies"]');
      }


   }

   Buscador() {
      I.waitForElement(this.fields.Buscador)
      I.fillField(this.fields.Buscador, 'iPhone 17');
      I.pressKey('Enter');

   }


   async Resultados() {

      await I.waitForElement(this.fields.Resultado, 10);
      await I.see('iPhone 17', this.fields.Resultado);
      await I.wait(5);


   }

}


module.exports = new TC004buscador_page(); //exportar la clase