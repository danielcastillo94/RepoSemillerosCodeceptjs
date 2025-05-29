const { I } = inject();
const fs = require('fs');
const path = require('path');

module.exports = {
  url: 'https://demoqa.com/upload-download',
  uploadInput: '#uploadFile',
  uploadedFilePath: '#uploadedFilePath',
  downloadButton: '#downloadButton',

  testFile: 'data/testfile.txt',
  downloadPath: path.join(__dirname, '../downloads/sampleFile.jpeg'),

  goTo() {
    I.amOnPage(this.url);
    I.waitForElement(this.uploadInput, 5);
  },

  uploadFile() {
    I.attachFile(this.uploadInput, this.testFile);
    I.wait(1);
  },

  async seeUploadedFile() {
    const resultado = await I.grabTextFrom(this.uploadedFilePath);
    console.log(`Archivo subido: ${resultado}`);
    if (!resultado.includes('testfile.txt')) {
      throw new Error('El archivo no se cargó correctamente.');
    }
  },

  async downloadFile() {
    const dataUrl = await I.grabAttributeFrom(this.downloadButton, 'href');
    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(this.downloadPath, buffer);
  },

  verifyDownloadedFile() {
    if (!fs.existsSync(this.downloadPath)) {
      throw new Error('El archivo no se descargó correctamente.');
    }
    const stats = fs.statSync(this.downloadPath);
    if (stats.size === 0) {
      throw new Error('El archivo descargado está vacío.');
    }
    console.log(`Archivo descargado correctamente: ${this.downloadPath}`);
  }
};
