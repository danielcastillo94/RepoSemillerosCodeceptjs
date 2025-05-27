const { I } = inject();

module.exports = {
  uploadInput: '#uploadFile',
  downloadButton: '#downloadButton',

  async uploadFile(filePath) {
    I.attachFile(this.uploadInput, filePath);
  },

  async downloadFile() {
    I.click(this.downloadButton);
  },

  async openYouTube() {
    I.amOnPage('https://www.youtube.com/');
  }
};
