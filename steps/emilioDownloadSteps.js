const downloadPage = require('../pages/emilioDownloadPage');

Given('que el usuario está en la página de descarga', () => {
  downloadPage.goTo();
});

When('el usuario hace clic en el botón de descarga', async () => {
  await downloadPage.downloadFile();
});

Then('el archivo debería estar presente en la carpeta de descargas', async () => {
  await downloadPage.verifyFileDownloaded();
});
