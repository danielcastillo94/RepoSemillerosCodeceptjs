const assert = require('assert');
const { AssertionError } = require('assert/strict');

const { I } = inject();

/**
 * Stock Page Objet
 *
 * Encapsulates interactions and assertions related to product availability.
 *
 * @module stockPage
 */
module.exports = {

    /**
     * Elements on the stock page.
     */
    elements: {
        deliverySection: '[data-testid="product-configurator-delivery"]',
        storeSelectorModal: '[data-testid="product-configurator-delivery__store-selector-test-id"]',
        storesContainer: '[data-testid="stores-radio-group"]',
        storeNames: '[data-testid="store-name"]',
        productCode: '//p[contains(., "Código de producto:")]'
    },

    /**
     * Fields on the stock page.
     */
    fields: {
        postalCode: '[data-testid="search-termn-input"]'
    },

    /**
     * Buttons on the stock page.
     */
    buttons: {
        homeDelivery: '[data-testid="product-configurator-delivery-selection-card-Recibe a domicilio"]',
        clickAndCollect: '[data-testid="product-configurator-delivery-selection-card-Click & Collect"]',
        selectStore: '[data-testid="product-configurator-delivery-Click & Collect-option-subselection-button"]',
        searchStore: '[data-testid="trigger-search-button"]',
        buyNow: '[data-testid="buy-now-button"]',
        addToBag: '[data-testid="add-to-bag-button"]'
    },

    /**
     * Verifies the delivery/availability section is visible.
     *
     * @returns {void}
     */
    seeAvailabilitySection() {
        I.waitForElement(this.elements.deliverySection, 10);

        I.seeElement(this.elements.deliverySection);
    },

    /**
     * Verifies that delivery options (home delivery, click & collect) are shown and that the product can be purchased.
     *
     * Note: Liverpool's current UI does not expose a literal
     * "In stock / Out of stock" text label, so availability is inferred
     * by checking that at least one purchase action ("Buy now" or
     * "Add to bag") is enabled.
     *
     * @returns {void}
     * @throws {AssertionError} If neither purchase action is enabled.
     */
    async seeAvailabilityOptions() {
        I.waitForElement(this.buttons.homeDelivery, 10);

        I.seeElement(this.buttons.homeDelivery);

        I.seeElement(this.buttons.clickAndCollect);
        const availability = await I.executeScript(() => {

            const buyNow = document.querySelector('[data-testid="buy-now-button"]');

            const addToBag = document.querySelector('[data-testid="add-to-bag-button"]');

            return {
                buyNowEnabled: !!buyNow && !buyNow.disabled,
                addToBagEnabled: !!addToBag && !addToBag.disabled
            };
        });

        assert(
            availability.buyNowEnabled ||
            availability.addToBagEnabled,
            'The product does not have enabled purchase options.'
        );
    },

    /**
     * Selects the "Click & Collect" delivery option.
     *
     * @returns {void}
     */
    selectClickAndCollect() {
        I.waitForElement(this.buttons.clickAndCollect, 10);

        I.scrollTo(this.buttons.clickAndCollect);

        I.click(this.buttons.clickAndCollect);
    },

    /**
     * Opens the store selector modal (requires Click & Collect to be
     * selected first) and waits for the modal to render.
     *
     * @returns {void}
     */
    openStoreSelector() {
        I.waitForElement(this.buttons.selectStore, 10);

        I.click(this.buttons.selectStore);

        I.waitForElement(this.elements.storeSelectorModal, 10);
    },

    /**
     * Fills the postal code and triggers a store search
     *
     * @param {string} postalCode - The postal code to search for
     * @returns {void}
     */
    searchStoresByPostalCode(postalCode) {
        I.waitForElement(this.fields.postalCode, 10);

        I.fillField(this.fields.postalCode,postalCode);

        I.click(this.buttons.searchStore);
    },

    /**
     * Verifies that at least one nearby store is returned after a postal code search.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If no stores are displayed.
     */
    async seeNearbyStores() {
        I.waitForElement(this.elements.storesContainer, 15);

        const stores = await I.grabNumberOfVisibleElements(this.elements.storeNames);

        assert(
            stores > 0,
            'No nearby stores were displayed.'
        );
    },

    /**
     * Verifies that the product code label is displayed and that it contains a valid numeric code.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If the label is missing or no numeric code is found.
     */
    async seeProductCode() {
        I.waitForElement(this.elements.productCode, 10);

        const productCodeText = await I.grabTextFrom(this.elements.productCode);

        assert(
            productCodeText.includes('Código de producto:'),
            'The product code label was not displayed.'
        );

        const productCode = productCodeText.match(/\d+/);

        assert(
            productCode,
            'A valid numeric product code was not found.'
        );
    }

};
