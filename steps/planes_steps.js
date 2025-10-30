const { planes_page } = inject();

//TC002
Given(/^el usuario esta en la página principal de Telcel$/, () => {
    planes_page.abrirPagina();
});

When(/^la página principal termina de cargar$/, () => {
    planes_page.esperarCarga();
});

When(/^el usuario accede al menú principal$/, () => {
    planes_page.accederMenuPrincipal();
});

When(/^el usuario se posiciona sobre la opción "Móvil"$/, () => {
    planes_page.posicionarseSobreOpcionMovil();
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

    planes_page.validarSubmenus(datosSubmenus);
});

//TC003
Given(/^el usuario se encuentra dentro de la página de planes de Telcel$/, () => {
    planes_page.irAPaginaPlanes();
});

When(/^hace clic en el botón "Ver más" del Plan Telcel Ultra$/, () => {
    planes_page.verMasPlanUltra();
});

When(/^hace clic en el botón "Ver detalles" del plan Telcel Ultra 5$/, () => {
    planes_page.buscarPlanUltra5();
});

Then(/^se muestra la información detallada del plan Telcel Ultra 5$/, () => {
    planes_page.verDetallesPlanUltra5();
});
