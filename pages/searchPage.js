const assert = require('assert');

const {I} = inject();

/**
 * Search Page Object
 *
 * Encapsulates the interactions with the search section of the page.
 * This is the entry point used by most scenarios to navigate
 * to the site and trigger a product search.
 *
 * @module searchPage
 */
module.exports = {

    /**
     * Fields for the search page.
     */
    fields: {
        searchInput: '//*[@id=":R37ba9il9utsq:-input"]',
    },

    /**
     * Navigates the browser to the Liverpool homepage.
     * The base URL is configured in codecept.conf.js
     *
     * @returns {void}
     */
    openHomePage() {
        I.amOnPage('/');
    },

    /**
     * Types a product name into the search input field.
     *
     * @param {string} productName - Product name/term to search for.
     * @returns {void}
     */
    enterProduct(productName) {
        I.waitForElement(this.fields.searchInput, 10);
        I.fillField(this.fields.searchInput, productName);
    },

    /**
     * Submits the search form by pressing Enter.
     *
     * @returns {void}
     */
    submitSearch() {
        I.pressKey('Enter');
    },

    /**
     * Performs a product search by entering a product name and submitting the form.
     *
     * @param {string} productName - Product name/term to search for.
     * @returns {void}
     */
    searchProduct(productName) {
        I.waitForElement(this.fields.searchInput, 10);
        I.fillField(this.fields.searchInput, productName);
        I.pressKey('Enter');
    }
}
