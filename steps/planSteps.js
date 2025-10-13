const {planesPage} = inject();

/*Este flujo valida la navegación del usuario, desde la pagina principal, acceder al menú y seleccionar
la opción de "Plan de Renta"*/

Given(/^Estoy en telcel$/, () => { //abre la pagina principal de TELCEL
  planesPage.inicio();
});

When(/^doy click en Menú, muestra el submenú y selecciona "Plan de Renta"$/, () => { // interaccion con el menú
  planesPage.accedermenu();
});

Then(/^se puede ver la seccion "Plan de Renta Telcel"$/, () =>{
  planesPage.ventanaplanes(); // verifica que cargue correctamente la página "Plan de Renta"
})
