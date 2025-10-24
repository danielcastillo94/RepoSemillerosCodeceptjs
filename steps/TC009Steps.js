const { TC009region_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  await TC009region_page.Inicio();

});

When(/^I click on the region selector$/,  () => {
  TC009region_page.CambiarRegion();

});
When(/^I change the default state$/,  () => {
  TC009region_page.CambiarRegion();

});

Then(/^I can see that it updates correctly$/, async () => {
  await TC009region_page.ValidarCambio();

});

