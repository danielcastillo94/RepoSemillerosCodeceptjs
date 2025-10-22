const { coberturaPage } = inject();

Given(/^el usuario se encuentra en la página principal de Telcel$/, () => {
    coberturaPage.abrirPagina();
});

When(/^accede en el menú a la sección "Móvil" y "Red de mayor cobertura"$/, () => {
    coberturaPage.accederMenuCobertura();
});

When(/^da clic al botón "Ver cobertura"$/, () => {
    coberturaPage.oprimirVerCobertura();
});

Then(/^se muestra el mapa interactivo y el título de la sección$/, () => {
    coberturaPage.validadMapa();
});