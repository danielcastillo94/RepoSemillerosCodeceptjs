const assert = require('assert');

const { I } = inject();

module.exports = {

    elements: {

        deliverySection:
            '[data-testid="product-configurator-delivery"]',

        storeSelectorModal:
            '[data-testid="product-configurator-delivery__store-selector-test-id"]',

        storesContainer:
            '[data-testid="stores-radio-group"]',

        storeNames:
            '[data-testid="store-name"]',

        productCode:
            '//p[contains(., "Código de producto:")]'
    },

    fields: {

        postalCode:
            '[data-testid="search-termn-input"]'
    },

    buttons: {

        homeDelivery:
            '[data-testid="product-configurator-delivery-selection-card-Recibe a domicilio"]',

        clickAndCollect:
            '[data-testid="product-configurator-delivery-selection-card-Click & Collect"]',

        selectStore:
            '[data-testid="product-configurator-delivery-Click & Collect-option-subselection-button"]',

        searchStore:
            '[data-testid="trigger-search-button"]',

        buyNow:
            '[data-testid="buy-now-button"]',

        addToBag:
            '[data-testid="add-to-bag-button"]'
    },

    seeAvailabilitySection() {

        I.waitForElement(
            this.elements.deliverySection,
            10
        );

        I.seeElement(
            this.elements.deliverySection
        );
    },


    async seeAvailabilityOptions() {

        I.waitForElement(
            this.buttons.homeDelivery,
            10
        );

        I.seeElement(
            this.buttons.homeDelivery
        );

        I.seeElement(
            this.buttons.clickAndCollect
        );

        /*
         * Liverpool's current UI does not show a textual
         * "In stock / Out of stock" status at this point.
         *
         * We validate that the product exposes delivery
         * options and can be purchased.
         */

        const availability = await I.executeScript(() => {

            const buyNow = document.querySelector(
                '[data-testid="buy-now-button"]'
            );

            const addToBag = document.querySelector(
                '[data-testid="add-to-bag-button"]'
            );

            return {
                buyNowEnabled:
                    !!buyNow && !buyNow.disabled,

                addToBagEnabled:
                    !!addToBag && !addToBag.disabled
            };
        });

        assert(
            availability.buyNowEnabled ||
            availability.addToBagEnabled,
            'The product does not have enabled purchase options.'
        );
    },

    selectClickAndCollect() {

        I.waitForElement(
            this.buttons.clickAndCollect,
            10
        );

        I.scrollTo(
            this.buttons.clickAndCollect
        );

        I.click(
            this.buttons.clickAndCollect
        );
    },


    openStoreSelector() {

        I.waitForElement(
            this.buttons.selectStore,
            10
        );

        I.click(
            this.buttons.selectStore
        );

        I.waitForElement(
            this.elements.storeSelectorModal,
            10
        );
    },


    searchStoresByPostalCode(postalCode) {

        I.waitForElement(
            this.fields.postalCode,
            10
        );

        I.fillField(
            this.fields.postalCode,
            postalCode
        );

        I.click(
            this.buttons.searchStore
        );
    },


    async seeNearbyStores() {

        I.waitForElement(
            this.elements.storesContainer,
            15
        );

        const stores =
            await I.grabNumberOfVisibleElements(
                this.elements.storeNames
            );

        assert(
            stores > 0,
            'No nearby stores were displayed.'
        );
    },

    async seeProductCode() {

        I.waitForElement(
            this.elements.productCode,
            10
        );

        const productCodeText =
            await I.grabTextFrom(
                this.elements.productCode
            );

        assert(
            productCodeText.includes('Código de producto:'),
            'The product code label was not displayed.'
        );

        const productCode =
            productCodeText.match(/\d+/);

        assert(
            productCode,
            'A valid numeric product code was not found.'
        );
    }

};