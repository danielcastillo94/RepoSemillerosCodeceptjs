const { TC002planes_page } = inject();

Given(/^I am on the telcel page home$/, async () => {
  await TC002planes_page.visitPage();

});

When(/^I am click in the principal menu$/, async () => {
  await TC002planes_page.MenuPrincipal();

});

When(/^I am click in the planes option$/, async () => {
  await TC002planes_page.SubmenuPlanes();

});

Then(/^I should see the planes section$/, async () => {
  await TC002planes_page.Validar();

});