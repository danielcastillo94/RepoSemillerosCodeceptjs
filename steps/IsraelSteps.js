const uploadPage = require('../pages/israelPage.js');

Given('Estoy en la pagina de Upload', () => {
  uploadPage.goTo();
});

When('Carga un archivo desde mi equipo', () => {
  uploadPage.uploadFile();
});

Then('Valido que el archivo se haya cargado correctamente', async () => {
  await uploadPage.seeUploadedFile();
});

When('Hago clic en el boton de descarga', async () => {
  await uploadPage.downloadFile();
});

Then('Valido que el archivo se haya descargado correctamente', () => {
  uploadPage.verifyDownloadedFile();
});
