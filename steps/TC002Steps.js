const { TC002Page } = inject();

Given(/^el usuario accede a la página de inicio de Telcel$/, () => {
    TC002Page.abrirPagina();
});

When(/^la página de inicio carga completamente$/, () => {
    TC002Page.esperarCarga();
});

When(/^el usuario accede al menú principal$/, () => {
    TC002Page.accederMenuPrincipal();
});

When(/^el usuario posiciona el cursor sobre la opción "Móvil"$/, () => {
    TC002Page.posicionarseSobreOpcionMovil();
});

Then(/^debe ver los submenús visibles y funcionales$/, () => {
    const datosSubmenus = [
        { texto: 'Cámbiate a Telcel', link: '/personas/portate/hazlo-ahora' },
        { texto: 'Equipos y Accesorios', link: 'https://www.telcel.com/tienda/' },
        { texto: 'Pagos, paquetes y recargas', link: '/pagos-paquetes-recargas' },
        { texto: 'Amigo', link: '/amigo' },
        { texto: 'Plan de renta', link: '/planes-renta' },
        { texto: 'Viajero Internacional', link: '/personas/roaming/paquetes-y-precios' },
        { texto: 'Servicios adicionales', link: '/personas/servicios/localizacion-y-seguridad' },
        { texto: 'Red de mayor cobertura', link: '/personas/la-red-de-mayor-cobertura/red-tecnologia/5g' }
    ];

    TC002Page.validarSubmenus(datosSubmenus);
});