const assert = require('assert');
const { AssertionError } = require('assert/strict');

const { I } = inject();

/**
 * Product Detail Page Object
 *
 * Encapsulates interactions and assertions for the product detail page,
 * this includes methods to verify product name, price, description, gallery and reviews.
 *
 * @module productDetailPage
 */
module.exports = {

    /**
     * Selectors for product detail fields
     */
    fields: {

        productName: 'section[data-testid$="-configurator"] h1',
        productPrice: '[data-testid$="-configurator-price"]',
        productDescription: '//table[@data-testid="specs-0"]/preceding-sibling::p[1]'
    },

    /**
     * Selectors for product detail elements
     */
    elements: {
        productDetailContainer: 'section[data-testid$="-configurator"]',
        characteristicsButton: '[data-testid="ml-list-item-specs"]',
        specificationsTable: '[data-testid="specs-0"]',
        productGallery: 'div[role="region"][aria-label="Galería de imágenes del producto"]',
        reviews: '[data-testid$="-review-desktop"]'
    },

    /**
     * Wait for the product detail page to be displayed and verify its URL and product name.
     *
     * @returns {void}
     */
    seeProductDetailPage() {
        I.waitForElement(this.elements.productDetailContainer, 15);

        I.seeInCurrentUrl('/tienda/pdp/');

        I.seeElement(this.fields.productName);
    },

    /**
     * Verify that the product name/title is displayed.
     *
     * @returns {void}
     */
    seeProductName() {
        I.waitForElement(this.fields.productName, 10);

        I.seeElement(this.fields.productName);
    },


    /**
     * Verify that the product price is displayed.
     *
     * @returns {void}
     */
    seeProductPrice() {
        I.waitForElement(this.fields.productPrice, 10);

        I.seeElement(this.fields.productPrice);
    },


    /**
     * Open the product characteristics section by clicking the characteristics button.
     *
     * @returns {void}
     */
    openCharacteristics() {
        I.waitForElement( this.elements.characteristicsButton, 10);

        I.scrollTo(this.elements.characteristicsButton);

        I.click(this.elements.characteristicsButton);
    },

    /**
     * Verify that the product descriptions is displayed and not empty.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If the description text is empty.
     */
    async seeProductDescription() {
        I.waitForElement(this.elements.specificationsTable, 10);

        I.waitForElement(this.fields.productDescription, 10);

        const description = await I.grabTextFrom(this.fields.productDescription);

        assert(
            description.trim().length > 0,
            'The product description is empty.'
        );
    },

    /**
     * Verify that the product gallery is displayed.
     *
     * @returns {void}
     */
    seeProductGallery() {
        I.waitForElement(this.elements.productGallery, 10);

        I.seeElement(this.elements.productGallery);
    },


    /**
     * Verify that the product gallery contains multiple images.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If fewer that two unique images are found.
     */
    async seeMultipleProductImages() {
        const imageSources = await I.executeScript(() => {

            const gallery = document.querySelector(this.elements.productGallery);

            if (!gallery) {
                return [];
            }

            const images = Array.from(gallery.querySelectorAll('img[src]'));

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

    /**
     * Open the product reviews section by clicking the reviews button.
     *
     * @returns {void}
     */
    openReviews() {
        I.waitForElement(this.elements.reviews, 10);

        I.scrollTo(this.elements.reviews);

        I.click(this.elements.reviews);
    }
};
