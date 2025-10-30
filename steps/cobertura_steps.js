const { cobertura_page } = inject();

Given(/^el usuario se encuentra dentro de la página principal de Telcel$/, () => {
    cobertura_page.abrirPagina();
});

When(/^accede en el menú a la sección "Móvil" y "Red de mayor cobertura"$/, () => {
    cobertura_page.accederMenuCobertura();
});

When(/^da clic al botón "Ver cobertura"$/, () => {
    cobertura_page.oprimirVerCobertura();
});

Then(/^se muestra el mapa interactivo y el título de la sección$/, () => {
    cobertura_page.validadMapa();
});