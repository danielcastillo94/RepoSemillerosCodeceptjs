const { youtubePage } = inject();

Given(/^Im in youtube$/, () => {
  //I.amOnPage("/");
  youtubePage.login();
});

When(/^I search Gherkin$/, () => {
  youtubePage.Buscarenyoutube();
  //I.fillField()
});

Then(/^I should see results related to Gherkin$/, () => {
  youtubePage.Verresultados();
  //I.seeElement('')
});
