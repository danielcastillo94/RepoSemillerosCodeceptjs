const { TC008ayuda_page } = inject();

Given(/^I am on the Telcel page home$/, async () => {
    await TC008ayuda_page.pagInicio();
});

When(/^I enter to the help center$/, async () => {
    await TC008ayuda_page.menuDesplegable();
});

Then(/^I check that the information categories are displayed$/, () => {
    TC008ayuda_page.contenidoVisible();
});
