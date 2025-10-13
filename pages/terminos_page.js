const { I } = inject();

class terminos_page {

  goToTelcel() {
    I.amOnPage("/");
  }

  goToPageEnd() {
    I.scrollPageToBottom();
    I.click('//*[@id="acepto-cookies"]');
  }

  clickLink(){
    I.click('//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a');
  }

  seeResults() {
    I.waitForElement('//h1[text()="Términos y condiciones"]', 3);
    I.seeElement('//h1[text()="Términos y condiciones"]');
  }
}

module.exports = new terminos_page();