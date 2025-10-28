const { TC001home_page } = inject();

Given(/^I am on the telcel page home TC001$/, async() => {
 await TC001home_page.visitPage();

});

When(/^I am click in the logo$/, () => {
  TC001home_page.Logotipo();
});

When(/^I am click in the principal menu in TC001$$/, async () => {
  await TC001home_page.MenuPrincipal();
});

When(/^I click in the inicial banner$/, async () => {
  await TC001home_page.BannerInicial();
});

Then(/^I should see the select items load successfully$/, () => {
  TC001home_page.Valido();
});