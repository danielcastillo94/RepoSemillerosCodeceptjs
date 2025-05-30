
const I = inject();

class DemoqaPage {
    constructor() {
        this.fields = {
          uploadInput: '#uploadFile',
        };
    }

    async uploadFile() {
        I.attachFile(this.fields.uploadInput, 'testFile.txt');
    }
}

module.exports = new DemoqaPage();