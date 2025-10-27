const { TC006Page } = inject();

Given(/^el usuario esta en el menu principal$/, () => {
    TC006Page.abrirPagina();
});

When(/^el usuario accede a la sección de cobertura$/, () => {
    TC006Page.accederMenuCobertura();
});

When(/^da clic al botón "Ver Cobertura"$/, () => {
    TC006Page.oprimirVerCobertura();
});

Then(/^el usuario puede ver el mapa de cobertura$/, () => {
    TC006Page.validadMapa();
});
