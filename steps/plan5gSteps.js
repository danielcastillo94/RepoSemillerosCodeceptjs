const { plan5g_page } = inject();

Given(/^I am on the telcel plans page$/, async () => {
  await plan5g_page.visitPage();

});

When(/^I select the section Plan Telcel Plus 5G$/, () => {
  plan5g_page.seleccion5g();
});

Then(/^I see results correctly in the Telcel Plan Plus 5G section$/, () => {
  plan5g_page.verificacion5g();
})