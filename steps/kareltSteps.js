const { kareltPage } = inject();


Given(/^El usuario esta en la pagina principal$/, () => {
  kareltPage.login();
});
//TC001--------------------------------------------------------------------------------------------------------------------
Then(/^El usuario valida la pagina principal$/, () => {
  kareltPage.validacion();
});

//TC002---------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en Menú, muestra el submenú y selecciona "Plan de Renta"$/, () => { // interaccion con el menú
  kareltPage.accedermenu();
});

When(/^El usuario da click en algun plan$/, () => { //selecciona algun plan
  kareltPage.ventanaplanes(); // verifica que cargue correctamente la página "Plan de Renta"

});

Then(/^se puede ver la seccion "Plan Ultra"$/, () =>{
  kareltPage.seccionPlanes();//pagina plan ultra
});
//TC003-----------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en la pagina de planes$/, () => {
   kareltPage.paginaplanes();

});

When(/^El usuario se desplaza por los planes$/, () => {
   kareltPage.navegacion();
});

Then(/^El usuario ve el plan "Telcel 5G Plus"$/,  () => {
  kareltPage.navegacion();
});

When(/^da click en el boton de "Detalles"$/, () => {
 kareltPage.seleccion5g();
});

Then(/^El usuario ve la informacion de ese plan$/, async() => {
await kareltPage.verificacion5g();
});

//TC004---------------------------------------------------------------------------------------------------------------------

When(/^El usuario introduce "IPhone" en la barra de busqueda$/, () =>{
    kareltPage.buscador();
});

Then(/^El usuario puede ver los resultados de la busqueda$/, () =>{
    kareltPage.resultadosBusqueda();

});

//TC005----------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en la pagina de resultados de la busqueda$/, () =>  {
    kareltPage.busqueda();
});
When(/^El usuario selecciona algun equipo$/, () =>{
    kareltPage.seleccionequipo();
});
Then(/^El usuario puede ver la imagen, especificaciones y precio del equipo$/, () =>{
    kareltPage.ventanadetalles();
});
//TC006----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click a red de mayor cobertura$/, () =>{
    kareltPage.maco();
});

When(/^El usuario da click en Ver Cobertura$/, () =>{
    kareltPage.vercobertura();
});

Then(/^El usuario puede ver el mapa interactivo$/, () =>{
    kareltPage.vermapa();
});
//TC007----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en contactanos$/, () =>  {
    kareltPage.menuayuda();
});

Then(/^El usuario da click en la opcion correo$/, () =>{
    kareltPage.contactos();
});

Then(/^El usuario puede ver el formulario y sus elementos$/, () =>{
    kareltPage.correo();
});
//TC008----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en ayuda$/, () =>{
    kareltPage.mayuda();
});

Then(/^El usuario ve la seccion de Preguntas frecuentes$/, () =>{
    kareltPage.seccionayuda();
});

//TC009-----------------------------------------------------------------------------------------------------------------------

When(/^El usuario cambia de region a Guerrero$/, () => {
  kareltPage.SeleccionarRegion();
});

Then(/^El usuario ve el cambio de region$/, () => {
  kareltPage.Cambioderegion();
});

//TC010----------------------------------------------------------------------------------------------------------------------

When(/^se desplaza al final del sitio$/, () => {
    kareltPage.irAlFooter();
});

Then(/^los enlaces de redes sociales son visibles y apuntan a la URL correcta$/, () => {
    // Lista de links de las redes sociales y su valor en el atributo data-nombreboton
    const redesSocialesLinks = [
        { nombreboton: 'Twitter', url: 'https://twitter.com/telcel' },
        { nombreboton: 'Facebook', url: 'https://web.facebook.com/Telcel?_rdc=1&_rdr' },
        { nombreboton: 'YouTube', url: 'https://www.youtube.com/user/Telceloficial' },
        { nombreboton: 'Hola Telcel', url: 'https://holatelcel.com/' }
    ];
    kareltPage.verificarRedesSociales(redesSocialesLinks);
});

Then(/^los accesos rápidos son visibles y apuntan a la URL correcta$/, () => {
    // Lista de links y texto de los accesos rápidos
    const accesosRapidosLinks = [
        { texto: 'Tienda en línea', url: 'https://www.telcel.com/tienda/' },
        { texto: 'Planes Telcel Libre', url: '/personas/planes-de-renta/tarifas-y-opciones/telcel-libre' },
        { texto: 'Paquetes Amigo Sin Límite', url: '/personas/amigo/paquetes/paquetes-amigo-sin-limite' },
        { texto: 'Paquetes y Recargas', url: '/personas/compra-paquetes-y-recargas' },
        { texto: 'Viajero Internacional', url: '/personas/roaming/paquetes-y-precios#!plan-de-renta.html' },
        { texto: 'Experiencias', url: '/personas/experiencias-telcel' },
        { texto: 'Internet de las cosas', url: '/personas/internet-de-las-cosas/vida-conectada' },
        { texto: 'Cámbiate a Telcel', url: '/personas/portate/hazlo-ahora' },
        { texto: 'Promociones Plan de Renta', url: '/personas/planes-de-renta/promociones' },
        { texto: '¿Quién es Telcel?', url: '/personas/quien-es-telcel' },
        { texto: 'Políticas y códigos', url: '/personas/politicas-y-codigos' },
        { texto: 'Trabaja con Telcel', url: '/personas/trabaja-con-telcel/enviar-curriculum' }
    ];
    kareltPage.verificarAccesosRapidos(accesosRapidosLinks);
});
//TC011-------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en simulacion movil$/, () =>  {
    kareltPage.vistaMovil();
});

When(/^El usuario da click en menu$/, () =>{
    kareltPage.menuHamburguesa();
});

Then(/^Puede ver todas las opciones$/, () =>{
    kareltPage.btsHamburguesa();
});

//TC012--------------------------------------------------------------------------------------------------------------------
When(/^El usuario se desplaza hasta el final de la pagina$/, () => {
  kareltPage.goToPageEnd();
});

Then(/^El usuario hace click en terminos y condiciones$/, () => {
  kareltPage.clickLink();
});

Then(/^El usuario debe ver Terminos y condiciones$/, () => {
  kareltPage.seeResults();
});