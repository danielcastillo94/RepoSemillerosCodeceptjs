const { karelPage } = inject();


Given(/^El usuario esta en la pagina principal$/, () => {
  karelPage.login();
});
//TC001--------------------------------------------------------------------------------------------------------------------
Then(/^El usuario valida la pagina principal$/, () => {
  karelPage.validacion();
});

//TC002---------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en Menú, muestra el submenú y selecciona "Plan de Renta"$/, () => { // interaccion con el menú
  karelPage.accedermenu();
});

When(/^El usuario da click en algun plan$/, () => { //selecciona algun plan
  karelPage.ventanaplanes(); // verifica que cargue correctamente la página "Plan de Renta"

});

Then(/^se puede ver la seccion "Plan Ultra"$/, () =>{
  karelPage.seccionPlanes();//pagina plan ultra
});
//TC003-----------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en la pagina de planes$/, () => {
   karelPage.paginaplanes();

});

When(/^El usuario se desplaza por los planes$/, () => {
   karelPage.navegacion();
});

Then(/^El usuario ve el plan "Telcel 5G Plus"$/,  () => {
  karelPage.navegacion();
});

When(/^da click en el boton de "Detalles"$/, () => {
 karelPage.seleccion5g();
});

Then(/^El usuario ve la informacion de ese plan$/, async() => {
await karelPage.verificacion5g();
});

//TC004---------------------------------------------------------------------------------------------------------------------

When(/^El usuario introduce "IPhone" en la barra de busqueda$/, () =>{
    karelPage.buscador();
});

Then(/^El usuario puede ver los resultados de la busqueda$/, () =>{
    karelPage.resultadosBusqueda();

});

//TC005----------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en la pagina de resultados de la busqueda$/, () =>  {
    karelPage.busqueda();
});
When(/^El usuario selecciona algun equipo$/, () =>{
    karelPage.seleccionequipo();
});
Then(/^El usuario puede ver la imagen, especificaciones y precio del equipo$/, () =>{
    karelPage.ventanadetalles();
});
//TC006----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click a red de mayor cobertura$/, () =>{
    karelPage.maco();
});

When(/^El usuario da click en Ver Cobertura$/, () =>{
    karelPage.vercobertura();
});

Then(/^El usuario puede ver el mapa interactivo$/, () =>{
    karelPage.vermapa();
});
//TC007----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en contactanos$/, () =>  {
    karelPage.menuayuda();
});

Then(/^El usuario da click en la opcion correo$/, () =>{
    karelPage.contactos();
});

Then(/^El usuario puede ver el formulario y sus elementos$/, () =>{
    karelPage.correo();
});
//TC008----------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en ayuda$/, () =>{
    karelPage.mayuda();
});

Then(/^El usuario ve la seccion de Preguntas frecuentes$/, () =>{
    karelPage.seccionayuda();
});

//TC009-----------------------------------------------------------------------------------------------------------------------

When(/^El usuario cambia de region a Guerrero$/, () => {
  karelPage.SeleccionarRegion();
});

Then(/^El usuario ve el cambio de region$/, () => {
  karelPage.Cambioderegion();
});

//TC010----------------------------------------------------------------------------------------------------------------------

When(/^se desplaza al final del sitio$/, () => {
    karelPage.irAlFooter();
});

Then(/^los enlaces de redes sociales son visibles y apuntan a la URL correcta$/, () => {
    // Lista de links de las redes sociales y su valor en el atributo data-nombreboton
    const redesSocialesLinks = [
        { nombreboton: 'Twitter', url: 'https://twitter.com/telcel' },
        { nombreboton: 'Facebook', url: 'https://web.facebook.com/Telcel?_rdc=1&_rdr' },
        { nombreboton: 'YouTube', url: 'https://www.youtube.com/user/Telceloficial' },
        { nombreboton: 'Hola Telcel', url: 'https://holatelcel.com/' }
    ];
    karelPage.verificarRedesSociales(redesSocialesLinks);
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
    karelPage.verificarAccesosRapidos(accesosRapidosLinks);
});
//TC011-------------------------------------------------------------------------------------------------------------------

Given(/^El usuario esta en simulacion movil$/, () =>  {
    karelPage.vistaMovil();
});

When(/^El usuario da click en menu$/, () =>{
    karelPage.menuHamburguesa();
});

Then(/^Puede ver todas las opciones$/, () =>{
    karelPage.btsHamburguesa();
});

//TC012--------------------------------------------------------------------------------------------------------------------
When(/^El usuario se desplaza hasta el final de la pagina$/, () => {
  karelPage.goToPageEnd();
});

Then(/^El usuario hace click en terminos y condiciones$/, () => {
  karelPage.clickLink();
});

Then(/^El usuario debe ver Terminos y condiciones$/, () => {
  karelPage.seeResults();
});