const assert = require('assert');

const {I} = inject();

module.exports = {
    
    fields: {
        searchInput: '//*[@id=":R37ba9il9utsq:-input"]',
    },

    openHomePage() {
        I.amOnPage('/');
    },
    
    enterProduct(productName) {
        I.waitForElement(this.fields.searchInput, 10);
        I.fillField(this.fields.searchInput, productName);
    },

    submitSearch() {
        I.pressKey('Enter');
    },

    searchProduct(productName) {
        I.waitForElement(this.fields.searchInput, 10);
        I.fillField(this.fields.searchInput, productName);
        I.pressKey('Enter');
    }
}
