const { TC011Page } = inject();


Given(/^el usuario accede al portal principal de Telcel$/, async () => {
  await TC011Page.portal();
});

When(/^el usuario abre el menú hamburguesa$/,  async () => {
  await TC011Page.MenuHambur();
});

Then(/^el usuario visualiza las opciones disponibles$/, async() => {
  await TC011Page.VisualizarResul();
});