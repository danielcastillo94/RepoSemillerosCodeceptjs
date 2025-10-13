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
    I.waitForElement('//*[@id="accordion-4279"]/div/div[4]/span[2]/h3', 10);
    I.seeElement('//*[@id="accordion-4279"]/div/div[4]/span[2]/h3');
  }
}

module.exports = new terminos_page();