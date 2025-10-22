const { homePage } = inject();

Given(/^el usuario accede a la página principal de Telcel$/, () => {
    homePage.abrirPagina();
});

When(/^la página principal termina de cargar$/, () => {
    homePage.esperarCarga();
});

Then(/^el logotipo de Telcel es visible$/, () => {
    const logotipo = {
        selector: homePage.logotipoImg,
        src: '/content/dam/htmls/img/icons/logo-telcel.svg',
        alt: 'Telcel M.R.',
        href: 'https://www.telcel.com/'
    };
    homePage.verificarLogotipo(logotipo);
});

Then(/^el menú principal es visible y navegable$/, () => {
    homePage.verificarMenuPrincipal();
});

Then(/^el banner inicial es visible y funcional$/, () => {
    homePage.verificarBannerInicial();
});
