const { TC010footer_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  TC010footer_page.inicio();
});



When(/^I navigate to the footer$/, () => {
  TC010footer_page.footer();
});



Then(/^I click on the social media icons to validate$/, async () => {
  TC010footer_page.validarIcono();
});


