const { I } = inject();
const fs = require('fs');
const path = require('path');

module.exports = {
  url: 'https://demoqa.com/upload-download',
  downloadButton: '#downloadButton',
  downloadPath: path.join(__dirname, '../downloads/sampleFile.jpeg'),

  goTo() {
    I.amOnPage(this.url);
  },

  async downloadFile() {
    const dataUrl = await I.grabAttributeFrom(this.downloadButton, 'href');

    // Extraer la parte base64 del dataURL
    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    fs.writeFileSync(this.downloadPath, buffer);
  },

  async verifyFileDownloaded() {
    const exists = fs.existsSync(this.downloadPath);
    if (!exists) {
      throw new Error('El archivo no se descargó correctamente.');
    }
  }
};
