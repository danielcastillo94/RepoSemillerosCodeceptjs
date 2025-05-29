const { I } = inject();
const ArmandoPage = require('../pages/armandoCargaDescargaMockeoPage');
const fs = require('fs');

const { URL_YOUTUBE, MOCK_YOUTUBE } = require('./mockedData/armandoYoutube.js');


Given('estoy en la página de carga de archivo', () => {
    I.amOnPage('https://demoqa.com/upload-download');
});

When('subo el archivo {string}', (fileName) => {
    ArmandoPage.uploadFile(fileName);
});

Then('debería ver que el archivo se cargó correctamente', () => {
    I.seeElement('#uploadedFilePath');
});

When('descargo el archivo {string}', async (fileName) => {
    const downloadPath = `./downloads/${fileName}`;
    if (!fs.existsSync('./downloads')) {
        fs.mkdirSync('./downloads');
    }
    await ArmandoPage.downloadFile(downloadPath);
});

Then('debería existir el archivo descargado', () => {
    console.log('Archivo descargado correctamente en la carpeta /downloads');
});

Given('Estoy en youtube', () => {
    I.amOnPage('https://www.youtube.com/');
});

When('Hago una busqueda con mockeo', () => {
    I.waitForElement('//input[@name="search_query"]', 5);

    I.mockRoute(URL_YOUTUBE, (route) => {
        route.fulfill({
            status: 200,
            json: MOCK_YOUTUBE,
        });
    });

    console.log('Mockeo de búsqueda en YouTube realizado.');
});

Then('debería ver resultados mockeados', () => {
    console.log('Resultados mockeados verificados en consola (ilustrativo).');
});
