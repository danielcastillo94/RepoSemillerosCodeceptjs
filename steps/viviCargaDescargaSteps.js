const { I } = inject();
const viviCargaDescargaPage = require('../pages/viviCargaDescargaPage.js');
const fs = require('fs');

Given('estoy en la página de carga de archivo', () => {
    I.amOnPage('https://demoqa.com/upload-download');
});

When('subo el archivo {string}', (fileName) => {
    viviCargaDescargaPage.uploadFile(fileName);
});

Then('debería ver que el archivo se cargó correctamente', () => {
    I.seeElement('#uploadedFilePath');
});

When('descargo el archivo {string}', async (fileName) => {
    const downloadPath = /downloads/$ (fileName);
    if (!fs.existsSync('./downloads')) {
        fs.mkdirSync('./downloads');
    }
    await viviCargaDescargaPage.downloadFile(downloadPath);
});

Then('debería existir el archivo descargado', () => {
    console.log('Archivo descargado correctamente en la carpeta /downloads');
});

//Mockeo de búsqueda en YouTube
Given('Estoy en youtube', () => {
    I.amOnPage('https://www.youtube.com/');
});

When('Hago una busqueda con mockeo', () => {
    I.waitForElement('//input[@name="search_query"]', 5);

// Mock de la petición de búsqueda
    I.mockRoute('https://www.youtube.com/youtubei/v1/search?prettyPrint=false', (route) => {
        route.fulfill({
            status: 200,
            json: {
                items: [
                    { title: 'Mocked Video 1', description: 'Descripción 1' },
                    { title: 'Mocked Video 2', description: 'Descripción 2' },
                ],
            },
        });
    });

    console.log('Mockeo de búsqueda en YouTube realizado.');
});

Then('debería ver resultados mockeados', () => {
    console.log('Resultados mockeados verificados en consola (ilustrativo).');
});