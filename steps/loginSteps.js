const { youtubePage } = inject();

Given(/^Im in youtube$/, () => {
  youtubePage.login();
});

When(/^I search Gherkin$/, () => {
  youtubePage.Buscarenyoutube();
});

Then(/^I should see results related to Gherkin$/, () => {
  youtubePage.Verresultados();
});
