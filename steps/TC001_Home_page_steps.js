const { home_page } = inject();
Given(/^El usuario se encuentra en la pagina principal de telcel$/, () => {
    home_page.goToTelcel();
});

//@carga-portal
When(/^El usuario debe ver el banner principal$/, () => {
    home_page.seeElementsBanner();
});

When(/^El usuario debe ver el menu principal$/, () => {
    home_page.seeElementsMenu();
});

Then(/^El usuario debe ver el logotipo$/, () => {
    home_page.seeElementsLogo();
});

//@verificar-terminos-condiciones
When(/^El usuario se desplaza hasta el final de la pagina$/, () => {
    home_page.goToPageEnd();
});

When(/^El usuario hace click en terminos y condiciones$/, () => {
    home_page.clickLink();
});

Then(/^El usuario debe ver Terminos y condiciones$/, () => {
    home_page.seeResults();
});

//@navegacion-planes-submenus
When("El usuario hace click en el boton {string}", (access) => {
    home_page.clickElementMenu(access);
});
When("EL usuario puede ver el texto {string}", () => {
    home_page.seeElementsMenuMovil();
});

Then("El usuario debe ver el texto {string}", () => {
    home_page.seeElementsMenuPPR();
});

//@detalle-producto-especifico
When("El usuario se desplaza hasta el banner de telcel 5g", () => {
    home_page.verifyElement5gButton();
});

//@barra-busqueda
When("El usuario hace click en la barra de busqueda", () => {
    home_page.verifySearchBar();
});

//@regionalizacion
When("El usuario hace click en el menu deslizable de estados", () => {
    home_page.verifyCountryChange();
});

//@enlaces
When("El usuario se desplaza hasta el final de la pagina", () => {
    home_page.verifyLinks();
});

//@vista-movil
When(/^El usuario hace click en "Menu"$/, () => {
    home_page.movilView();
});
