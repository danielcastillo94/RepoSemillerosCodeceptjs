const { TC005detalle_equipo_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  await TC005detalle_equipo_page.Home();

});

When(/^I enter a search term$/, () => {
  TC005detalle_equipo_page.Search();

});


Then(/^I select a result$/, async () => {
  await TC005detalle_equipo_page.Results();

});

Then(/^I see product details$/, () => {
  TC005detalle_equipo_page.Details();

});


