const { TC011mobile_menu_page } = inject();


Given(/^I am on the telcel page home movil$/, async () => {
  await TC011mobile_menu_page.Home();
});

When(/^I open the hamburger menu$/,  async () => {
  await TC011mobile_menu_page.MenuHamburguesa();
});

Then(/^I visualize the available options$/, async() => {
  await TC011mobile_menu_page.VisualizarResultado();
});
 