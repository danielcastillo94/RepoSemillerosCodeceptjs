const { TC004buscador_page } = inject();

Given(/^I am on the telcel home for buscador$/, async () => {
  await TC004buscador_page.PageHome();

});

When(/^I enter a search term for buscador$/,  () => {
  TC004buscador_page.Buscador();

});

Then(/^I should coincident results for buscador$/, async () => {
  await TC004buscador_page.Resultados();

});