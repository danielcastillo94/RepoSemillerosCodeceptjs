const {TC010Page} = inject();

Given (/^el usuario esta en pagina principal$/, () =>  {
    TC010Page.paginaprincipal();
});

When (/^el usuario se desplaza al final de la pagina$/, () =>{
    TC010Page.seccionFooter();
});

Then (/^el usuario puede ver el contenido de el enlace seleccionado$/, () =>{
    //se muestra en consola el nombre de cada acceso y su url
    const accesosLinks = [
        { nombreboton: 'Tienda en línea', url: 'https://www.telcel.com/tienda/' },
        { nombreboton: 'Planes Telcel Libre', url: '/personas/planes-de-renta/tarifas-y-opciones/telcel-libre' },
        { nombreboton: 'Paquetes Amigo Sin Límite', url: '/personas/amigo/paquetes/paquetes-amigo-sin-limite' },
        { nombreboton: 'Paquetes y Recargas', url: '/personas/compra-paquetes-y-recargas' },
        { nombreboton: 'Viajero Internacional', url: '/personas/roaming/paquetes-y-precios#!plan-de-renta.html' },
        { nombreboton: 'Experiencias', url: '/personas/experiencias-telcel' },
        { nombreboton: 'Internet de las cosas', url: '/personas/internet-de-las-cosas/vida-conectada' },
        { nombreboton: 'Cámbiate a Telcel', url: '/personas/portate/hazlo-ahora' },
        { nombreboton: 'Promociones Plan de Renta', url: '/personas/planes-de-renta/promociones' },
        { nombreboton: '¿Quién es Telcel?', url: '/personas/quien-es-telcel' },
        { nombreboton: 'Políticas y códigos', url: '/personas/politicas-y-codigos' },
        { nombreboton: 'Trabaja con Telcel', url: '/personas/trabaja-con-telcel/enviar-curriculum' }
    ];
    TC010Page.datosAccesos(accesosLinks);
    const redesLinks = [
        { nombreboton: 'Twitter', url: 'https://twitter.com/telcel' },
        { nombreboton: 'Facebook', url: 'https://web.facebook.com/Telcel?_rdc=1&_rdr' },
        { nombreboton: 'YouTube', url: 'https://www.youtube.com/user/Telceloficial' },
        { nombreboton: 'Hola Telcel', url: 'https://holatelcel.com/' }
    ];
    TC010Page.datosRedes(redesLinks);
});