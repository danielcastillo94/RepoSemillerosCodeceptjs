const { I } = inject();
const ContactoPage = require('../pages/TC007Page');
const contactoPage = new ContactoPage(I);

Given('que abro la página principal del módulo Contáctanos', async () => {
  await contactoPage.abrirPagina();
});

Then('deberia ver el formulario visible con campos requeridos', async () => {
  await contactoPage.validarFormularioVisible();
});
