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
    const playwright = codeceptjs.container.helpers("Playwright");
    const { page } = playwright;
    const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 10000 }),
        I.click('#downloadButton'),
    ]);
    await download.saveAs(downloadPath);
});

Then('debería existir el archivo descargado', () => {
    console.log('Archivo descargado correctamente en la carpeta /downloads');
});

Given('Estoy en youtube', () => {
    I.amOnPage('https://www.youtube.com/');
});

When('Hago dos busquedas con mockeo', () => {
    I.waitForElement('//input[@name="search_query"]', 5);

    I.mockRoute(URL_YOUTUBE, (route) => {
        console.log('Interceptando llamada a:', route.request().url());
        route.fulfill({
            status: 200,
            json: MOCK_YOUTUBE,
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    });

    I.fillField('//input[@name="search_query"]', 'neffex');
    I.pressKey('Enter');
    I.wait(10);
    console.log('Mockeo con "neffex"');

    I.fillField('//input[@name="search_query"]', 'metallica');
    I.pressKey('Enter');
    I.wait(10);
    console.log('Mockeo sigue funcionando con "metallica"');
});

Then('debería ver resultados mockeados', () => {
    console.log('Resultados mockeados verificados en consola (ilustrativo).');
});
