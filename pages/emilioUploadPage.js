const { I } = inject();

module.exports = {
  url: 'https://demoqa.com/upload-download',

  fields: {
    uploadInput: '#uploadFile',
    uploadedFilePath: '#uploadedFilePath'
  },

  goTo() {
    I.amOnPage(this.url);
  },

  uploadFile(filePath) {
    I.attachFile(this.fields.uploadInput, filePath);
  },

  seeUploadedFile(fileName) {
    I.see(fileName, this.fields.uploadedFilePath);
  }
};
