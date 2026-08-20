const {RegisterPage, MenuPage} = inject();

Given(/^El usuario se encuentra en la pagina de inicio$/, () => {
    RegisterPage.home();
});
When(/^El usuario da clic en "iniciar sesion"$/, () => {
    RegisterPage.ingresarsesion();
});
When(/^El usuario da clic en "Crear cuenta"$/, () => {
    RegisterPage.crearcuenta();
});
When(/^El usuario ingresa correo y contraseña$/, () => {
    RegisterPage.correo();
});
When(/^El usuario ingresa sus datos personales$/, () => {
    RegisterPage.datospersonales();
});
When(/^El usuario ingresa un numero celular valido$/, () => {
    RegisterPage.ncelular();
});
When(/^El usuario ingresa el codigo de sms$/, () => {
    RegisterPage.sms();
});
When(/^El usuario va a playeras$/, () => {
    MenuPage.categorias();
});
