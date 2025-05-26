const uploadPage = require('../pages/emilioUploadPage');

Given('que el usuario está en la página de carga de archivos', () => {
  uploadPage.goTo();
});

When('el usuario adjunta un archivo válido', () => {
  uploadPage.uploadFile('uploads/prueba.txt'); 
});

Then('el archivo debería mostrarse como cargado', () => {
  uploadPage.seeUploadedFile('prueba.txt');
});
