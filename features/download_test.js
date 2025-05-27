const fs = require('fs');
const path = require('path');
const assert = require('assert');
const codeceptjs = require('codeceptjs');

Feature('Descarga de archivo');

Scenario('Validar descarga de archivo', async ({ I }) => {
  const downloadDir = path.resolve(__dirname, '../downloads');
  const fileName = 'sampleFile.jpeg';
  const fullPath = path.join(downloadDir, fileName);

  if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

  if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);

  const playwright = codeceptjs.container.helpers('Playwright');
  const { page } = playwright;

  await page.goto('https://demoqa.com/upload-download');

  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton')
  ]);

  const tempPath = await download.path();
  const buffer = fs.readFileSync(tempPath);
  fs.writeFileSync(fullPath, buffer);

  assert.ok(fs.existsSync(fullPath), '❌ El archivo no se descargó correctamente');
  I.say('✅ Archivo descargado exitosamente');
});
