const { TC004buscador_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  await TC004buscador_page.PageHome();

});

When(/^I enter a search term$/,  () => {
  TC004buscador_page.Buscador();

});

Then(/^I should coincident results$/, async () => {
  await TC004buscador_page.Resultados();

});