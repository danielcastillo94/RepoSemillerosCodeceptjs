const { terminos_page } = inject();

Given(/^El usuario se encuentra en la pagina principal de telcel$/, () => {
  terminos_page.goToTelcel();
});

When(/^El usuario se desplaza hasta el final de la pagina$/, () => {
  terminos_page.goToPageEnd();
});

Then(/^El usuario hace click en terminos y condiciones$/, () => {
  terminos_page.clickLink();
});

Then(/^El usuario debe ver Terminos y condiciones$/, () => {
  terminos_page.seeResults();
});