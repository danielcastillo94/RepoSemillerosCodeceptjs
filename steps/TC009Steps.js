const { region_page } = inject();

Given(/^El usuario esta en la pagina principal$/, () => {
  region_page.login();
});

When(/^El usuario cambia de region a Guerrero$/, () => {
  region_page.SeleccionarRegion();
});

Then(/^El usuario ve el cambio de region$/, () => {
  region_page.Cambioderegion();
});
