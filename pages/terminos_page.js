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
    I.waitForElement('//*[@id="accordion-1628"]/div/div[1]/span[2]/h1', 3);
    I.seeElement('//*[@id="accordion-1628"]/div/div[1]/span[2]/h1');
  }
}

module.exports = new terminos_page();