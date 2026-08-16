const assert = require('assert');

const { I } = inject();

module.exports = {

    fields: {
        productName:
            'section[data-testid$="-configurator"] h1',

        productPrice:
            '[data-testid$="-configurator-price"]',

        productDescription:
            '//table[@data-testid="specs-0"]/preceding-sibling::p[1]'
    },

    elements: {
        productDetailContainer:
            'section[data-testid$="-configurator"]',

        characteristicsButton:
            '[data-testid="ml-list-item-specs"]',

        specificationsTable:
            '[data-testid="specs-0"]',

        productGallery:
            'div[role="region"][aria-label="Galería de imágenes del producto"]',

        reviews: '[data-testid$="-review-desktop"]'
    },

    seeProductDetailPage() {
        I.waitForElement(
            this.elements.productDetailContainer,
            15
        );

        I.seeInCurrentUrl('/tienda/pdp/');

        I.seeElement(
            this.fields.productName
        );
    },

    seeProductName() {
        I.waitForElement(
            this.fields.productName,
            10
        );

        I.seeElement(
            this.fields.productName
        );
    },


    seeProductPrice() {
        I.waitForElement(
            this.fields.productPrice,
            10
        );

        I.seeElement(
            this.fields.productPrice
        );
    },


    openCharacteristics() {
        I.waitForElement(
            this.elements.characteristicsButton,
            10
        );

        I.scrollTo(
            this.elements.characteristicsButton
        );

        I.click(
            this.elements.characteristicsButton
        );
    },


    async seeProductDescription() {
        I.waitForElement(
            this.elements.specificationsTable,
            10
        );

        I.waitForElement(
            this.fields.productDescription,
            10
        );

        const description = await I.grabTextFrom(
            this.fields.productDescription
        );

        assert(
            description.trim().length > 0,
            'The product description is empty.'
        );
    },

    seeProductGallery() {
        I.waitForElement(
            this.elements.productGallery,
            10
        );

        I.seeElement(
            this.elements.productGallery
        );
    },


    async seeMultipleProductImages() {
        const imageSources = await I.executeScript(() => {

            const gallery = document.querySelector(
                'div[role="region"][aria-label="Galería de imágenes del producto"]'
            );

            if (!gallery) {
                return [];
            }

            const images = Array.from(
                gallery.querySelectorAll('img[src]')
            );

            const sources = images
                .map(image => image.getAttribute('src'))
                .filter(Boolean);

            return [...new Set(sources)];
        });

        assert(
            imageSources.length > 1,
            `Expected multiple product images, but found ${imageSources.length}.`
        );
    },

    openReviews() {

        I.waitForElement(
            this.elements.reviews,
            10
        );

        I.scrollTo(
            this.elements.reviews
        );

        I.click(
            this.elements.reviews
        );
    }
};