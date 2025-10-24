const { TC006cobertura_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  await TC006cobertura_page.Inicio();

});

When(/^I am navigate to the "Coverage" menu$/,  () => {
  TC006cobertura_page.Menu();

});

Then(/^I see the interactive map and section title must be displayed correctly$/, async () => {
  await TC006cobertura_page.Mapa();

});

