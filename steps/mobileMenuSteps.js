const { mobileMenuPage } = inject();

Given(/^el usuario accede a la página principal de Telcel$/, () => {
    mobileMenuPage.abrirPaginaResize();
});

When(/^simula vista móvil y abre el menú hamburguesa$/, () => {
    mobileMenuPage.abrirMenuHamburguesa();
});

Then(/^las opciones del menú lateral son visibles y navegables$/, () => {
    const opcionesEsperadas = [
        { text: 'Móvil', href: '/pagos-paquetes-recargas' },
        { text: 'Dispositivos Conectados y Seguridad', href: '/personas/internet-de-las-cosas/vida-conectada' },
        { text: 'Entretenimiento', href: '/personas/entretenimiento/video' },
        { text: 'Experiencias', href: '/personas/experiencias-telcel' },
        { text: 'Ayuda', href: '/personas/atencion-a-clientes/preguntas-frecuentes' },
        { text: 'eSIM', href: '/esim' }
    ];
    mobileMenuPage.validarOpcionesMenu(opcionesEsperadas);
});
