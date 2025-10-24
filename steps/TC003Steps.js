const { TC003plan5g_page } = inject();

Given(/^I am on the telcel plans page$/, async () => {
  await TC003plan5g_page.visitPage();

});

When(/^I scroll the section the Telcel plans$/, () => {
  TC003plan5g_page.navegacion();
});

Then(/^I should see the "Telcel 5G Plus" plan$/, () => {
  TC003plan5g_page.navegacion();
});

When(/^I click on the "Details"  button for the specific plan$/, () => {
  TC003plan5g_page.seleccion5g();
});

Then(/^I should see the detailed information for that plan$/, async () => {
  await TC003plan5g_page.verificacion5g();
});