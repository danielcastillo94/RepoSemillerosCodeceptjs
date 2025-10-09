// EJERCICIO 4 - ANA PAOLA REBOLLOSO SAUCEDO

const { footertelcelPage } = inject();

Given(/^el usuario está en la página principal$/, () => {
  footertelcelPage.abrirPagina();
});

When(/^se desplaza al final del sitio$/, () => {
  footertelcelPage.irAlFooter();
});

Then(/^los enlaces de redes sociales son visibles y apuntan a la URL correcta$/, () => {
  const redesSocialesLinks = [
    { nombreboton: 'Twitter', url: 'https://twitter.com/telcel' },
    { nombreboton: 'Facebook', url: 'https://web.facebook.com/Telcel?_rdc=1&_rdr' },
    { nombreboton: 'YouTube', url: 'https://www.youtube.com/user/Telceloficial' },
    { nombreboton: 'Hola Telcel', url: 'https://holatelcel.com/' }
  ];
  footertelcelPage.verificarRedesSociales(redesSocialesLinks);
});

Then(/^los accesos rápidos son visibles y apuntan a la URL correcta$/, () => {
  const accesosRapidosLinks = [
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
  footertelcelPage.verificarAccesosRapidos(accesosRapidosLinks);
});
