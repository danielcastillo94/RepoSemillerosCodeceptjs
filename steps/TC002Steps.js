const {TC002Page} = inject();

/*Este flujo valida la navegación del usuario, desde la pagina principal, acceder al menú y seleccionar
la opción de "Plan de Renta"*/

Given(/^Estoy en telcel$/, () => { //abre la pagina principal de TELCEL
  TC002Page.inicio();
});

When(/^doy click en Menú, muestra el submenú y selecciona "Plan de Renta"$/, () => { // interaccion con el menú
  TC002Page.accedermenu();
});

When(/^doy click en algun plan$/, () => { //selecciona algun plan
  TC002Page.ventanaplanes(); // verifica que cargue correctamente la página "Plan de Renta"

});

Then(/^se puede ver la seccion "Plan Ultra"$/, () =>{
  TC002Page.seccionPlanes();//pagina plan ultra
})
