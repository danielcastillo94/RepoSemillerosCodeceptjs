const { TC010Page } = inject();

Given(/^el usuario accede al portal principal de Telcel$/, async () => {
  TC010Page.inicio();
});

When(/^el usuario navega hacia "footer"$/, () => {
  TC010Page.footer();
});

Then(/^el usuario da click en los íconos de redes sociales para validar$/, async () => {
  TC010Page.validarIcono();
});
