const { planesPage } = inject();

//---------------------------- TC002 ----------------------------
Given(/^el usuario accede a la página principal de Telcel$/, () => {
    planesPage.abrirPagina();
});

When(/^la página principal termina de cargar$/, () => {
    planesPage.esperarCarga();
});

When(/^el usuario accede al menú principal$/, () => {
    planesPage.accederMenuPrincipal();
});

When(/^el usuario se posiciona sobre la opción "Móvil"$/, () => {
    planesPage.posicionarseSobreOpcionMovil();
});

Then(/^los submenús de Móvil son visibles y funcionales$/, () => {
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

    planesPage.validarSubmenus(datosSubmenus);
});

//---------------------------- TC003 ----------------------------
Given(/^el usuario se encuentra en la página de planes de Telcel$/, () => {
    planesPage.irAPaginaPlanes();
});

When(/^hace clic en el botón "Ver más" del Plan Telcel Ultra$/, () => {
    planesPage.verMasPlanUltra();
});

When(/^hace clic en el botón "Ver detalles" del plan Telcel Ultra 5$/, () => {
    planesPage.buscarPlanUltra5();
});

Then(/^se muestra la información detallada del plan Telcel Ultra 5$/, () => {
    planesPage.verDetallesPlanUltra5();
});