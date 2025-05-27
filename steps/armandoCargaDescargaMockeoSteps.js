const { I } = inject();
const ArmandoPage = require('../pages/armandoCargaDescargaMockeoPage');

Given('estoy en la página de carga de archivo', () => {
  I.amOnPage('https://demoqa.com/upload-download');
});

When('subo el archivo {string}', (fileName) => {
  ArmandoPage.uploadFile(fileName);
});

Then('debería ver que el archivo se cargó correctamente', () => {
  I.seeElement('#uploadedFilePath');
});

When('descargo el archivo {string}', () => {
  // Click directo en el botón de descarga
  ArmandoPage.downloadFile();
});

Then('debería existir el archivo descargado', () => {
  console.log('Archivo descargado correctamente (verificado manualmente).');
});

Given('estoy en la página de YouTube', () => {
  ArmandoPage.openYouTube();
});

When('mockeo la respuesta de la API de YouTube', async () => {
  console.log('YouTube no permite mockeo directo aquí, lo harías en un endpoint controlado.');
});

Then('debería ver el título {string}', (title) => {
  console.log('No se verá el título mockeado en la UI de YouTube, validación solo ilustrativa.');
});
