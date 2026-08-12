const { Busqueda_NavegacionPage } = inject();

Given(/^Localización de la página de liverpool.$/, () => {
    Busqueda_NavegacionPage.login();
})

