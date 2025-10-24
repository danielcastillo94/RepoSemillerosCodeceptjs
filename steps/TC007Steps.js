const { TC007contacto_page } = inject();

Given(/^I am on the telcel contact page$/, async () => {
    await TC007contacto_page.pagContacto();

});

When(/^I scroll to the contact form section$/, () => {
    TC007contacto_page.validarFormulario();

});


Then(/^I should see the contact form with all required fields$/, () => {
    TC007contacto_page.validarCampos();

});


