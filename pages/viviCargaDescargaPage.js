const { I } = inject();

module.exports = {
  uploadInput: '#uploadFile',
  downloadButton: '#downloadButton',

  async uploadFile(filePath) {
    I.attachFile(this.uploadInput, filePath);
  },

  async downloadFile(downloadPath) {
    const playwright = codeceptjs.container.helpers("Playwright");
    const { page } = playwright;
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      I.click(this.downloadButton)
    ]);
    await download.saveAs(downloadPath);
  }
};