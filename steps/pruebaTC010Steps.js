// EJERCICIO 4 - ANA PAOLA REBOLLOSO SAUCEDO

const { footertelcelPage } = inject();

Given(/^el usuario está en la página principal$/, () => {
  footertelcelPage.abrirPagina();
});

When(/^se desplaza al final del sitio$/, () => {
  footertelcelPage.irAlFooter();
});

Then(
  /^los enlaces de redes sociales son visibles y apuntan a la URL correcta$/,
  () => {
    // Lista de links de las redes sociales y su valor en el atributo data-nombreboton
    const redesSocialesLinks = [
      { nombreboton: "Twitter", url: "https://twitter.com/telcel" },
      {
        nombreboton: "Facebook",
        url: "https://web.facebook.com/Telcel?_rdc=1&_rdr",
      },
      {
        nombreboton: "YouTube",
        url: "https://www.youtube.com/user/Telceloficial",
      },
      { nombreboton: "Hola Telcel", url: "https://holatelcel.com/" },
    ];
    footertelcelPage.verificarRedesSociales(redesSocialesLinks);
  }
);

Then(/^los accesos rápidos son visibles y apuntan a la URL correcta$/, () => {
  // Lista de links y texto de los accesos rápidos
  const accesosRapidosLinks = [
    { texto: "Tienda en línea", url: "https://www.telcel.com/tienda/" },
    {
      texto: "Planes Telcel Libre",
      url: "/personas/planes-de-renta/tarifas-y-opciones/telcel-libre",
    },
    {
      texto: "Paquetes Amigo Sin Límite",
      url: "/personas/amigo/paquetes/paquetes-amigo-sin-limite",
    },
    {
      texto: "Paquetes y Recargas",
      url: "/personas/compra-paquetes-y-recargas",
    },
    {
      texto: "Viajero Internacional",
      url: "/personas/roaming/paquetes-y-precios#!plan-de-renta.html",
    },
    { texto: "Experiencias", url: "/personas/experiencias-telcel" },
    {
      texto: "Internet de las cosas",
      url: "/personas/internet-de-las-cosas/vida-conectada",
    },
    { texto: "Cámbiate a Telcel", url: "/personas/portate/hazlo-ahora" },
    {
      texto: "Promociones Plan de Renta",
      url: "/personas/planes-de-renta/promociones",
    },
    { texto: "¿Quién es Telcel?", url: "/personas/quien-es-telcel" },
    { texto: "Políticas y códigos", url: "/personas/politicas-y-codigos" },
    {
      texto: "Trabaja con Telcel",
      url: "/personas/trabaja-con-telcel/enviar-curriculum",
    },
  ];
  footertelcelPage.verificarAccesosRapidos(accesosRapidosLinks);
});
