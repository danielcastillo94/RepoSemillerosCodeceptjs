const { home_page } = inject();

Given(/^el usuario accede a la página principa de Telcel$/, () => {
    home_page.abrirPagina();
});

When(/^el home termina de cargar$/, () => {
    home_page.esperarCarga();
});

Then(/^el logotipo de Telcel es visible$/, () => {
    const logotipo = {
        selector: home_page.logotipoImg,
        src: '/content/dam/htmls/img/icons/logo-telcel.svg',
        alt: 'Telcel M.R.',
        href: 'https://www.telcel.com/'
    };
    home_page.verificarLogotipo(logotipo);
});

Then(/^el menú principal es visible y se puede navegar$/, () => {
    home_page.verificarMenuPrincipal();
});

Then(/^el banner es visible y funcional$/, () => {
    home_page.verificarBannerInicial();
});