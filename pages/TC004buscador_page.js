const { I } = inject();
class TC004buscador_page{

     fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    Buscador: '#buscador-menu-input',
    Resultado: 'h3.results-num span.filled'

    

 };

  async PageHome (){
   I.amOnPage('/')
  // if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
    // I.click('//a[@id="acepto-cookies"]');
    //}
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      I.click('//a[@id="acepto-cookies"]');
    }

  
 }

   Buscador (){
      
 I.waitForElement(this.fields.Buscador)
 I.fillField(this.fields.Buscador, 'iPhone 17');
I.pressKey('Enter');  



   }


  async Resultados (){

   await I.waitForElement(this.fields.Resultado, 10);
     await I.waitForText('iPhone 17', 10, this.fields.Resultado);
    await I.see('iPhone 17', this.fields.Resultado);

await I.wait(5);


   }

}


module.exports = new TC004buscador_page(); //exportar la clase