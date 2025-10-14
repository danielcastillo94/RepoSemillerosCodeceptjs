const { plan5g_page } = inject();

Given(/^I am on the telcel plans page$/, async () => {
  await plan5g_page.visitPage();

});

When(/^I scroll the section the Telcel plans$/, () => {
   plan5g_page.navegacion();
});

Then(/^I should see the "Telcel 5G Plus" plan$/,  () => {
  plan5g_page.navegacion();
});

When(/^I click on the "Details"  button for the specific plan$/, () => {
 plan5g_page.seleccion5g();
});

Then(/^I should see the detailed information for that plan$/, async() => {
await plan5g_page.verificacion5g();
});