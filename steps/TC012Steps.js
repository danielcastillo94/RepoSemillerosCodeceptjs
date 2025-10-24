const { TC012terminos_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  TC012terminos_page.inicio();
});



When(/^I go to the footer$/,  () => {
  TC012terminos_page.navegacion();
});



When(/^I click on terms and conditions$/,  () => {
  TC012terminos_page.clickTerminos();
});


Then(/^I see the page loaded correctly$/, async () => {
  TC012terminos_page.paginaCargada();
});