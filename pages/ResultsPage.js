const assert = require('assert');

const { I } = inject();

/**
 * Results Page Object
 *
 * Encapsulates interactions and assertions for a search results page,
 * this includes methods to verify the presence of products, their titles, prices and reviews.
 *
 * @module resultsPage
 */
module.exports = {
    /**
     * Selectors for results page fields
     */
    fields: {
        resultsContainer: '#plp-page-card-product-list',
        productCard: '#plp-page-card-product-list [data-testid$="-card-card-link"]',
        productTitle: '#plp-page-card-product-list [data-testid$="-card-card-link"] h3',
        productPrice: '#plp-page-card-product-list [data-testid$="-card-card-link"] [data-testid$="-price"]',

        noResultsMessage: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
        productWithReviews: '#plp-page-card-product-list [data-testid$="-card-card-link"]:has([data-testid$="-rating"])'
    },

    /**
     * Verify that the search results pages is displayed by cheking the presence of the results container.
     *
     * @returns {void}
     */
    seeSearchResultsPage(){
        I.waitForElement(this.fields.resultsContainer, 10);
        I.seeElement(this.fields.resultsContainer);
    },

    /**
     * Verify that at least one product is displayed on the search results page.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If no product cards are found.
     */
    async seeAtLeastOneProduct(){
        I.waitForElement(this.fields.productCard, 10);

        const numberOfProducts = await I.grabNumberOfVisibleElements(this.fields.productCard);

        assert(
            numberOfProducts > 0,
            'No products were found on the search results page.'
        );
    },

    /**
     * Verify that the "no results" message is displayed when no products are found for a search query.
     *
     * @returns {void}
     */
    seeNoResultsMessage(){
        I.waitForElement(this.fields.noResultsMessage, 10);
        I.see('Lo sentimos, no encontramos nada para', this.fields.noResultsMessage);
    },

    /**
     * Verify that products are displayed on the search results page by checking for the presence of product cards.
     *
     * @returns {void}
     */
    reviewDisplayedProducts(){
        I.waitForElement(this.fields.productCard, 10);
        I.seeElement(this.fields.productCard);
    },

    /**
     * Verify that every product displayed on the search results page has a title.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If the number of titles does not match the number of product cards.
     */
    async verifyEveryProductHasTitle(){
        const products = await I.grabNumberOfVisibleElements(this.fields.productCard);

        const titles = await I.grabNumberOfVisibleElements(this.fields.productTitle);

        assert.strictEqual(
            titles,
            products,
            `Expected ${products} products to have titles, but found ${titles} titles.`
        );
    },

    /**
     * Verify that every product displayed on the search results page has a price.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If the number of prices does not match the number of product cards.
     */
    async verifyEveryProductHasPrice(){
        const products = await I.grabNumberOfVisibleElements(this.fields.productCard);

        const prices = await I.grabNumberOfVisibleElements(this.fields.productPrice);

        assert.strictEqual(
            prices,
            products,
            `Expected ${products} products to have prices, but found ${prices} prices.`
        )
    },

    /**
     * Select the first product displayed on the search results page by clicking on its product card.
     *
     * @returns {void}
     */
    selectFirstProduct() {
        I.waitForElement(this.fields.productCard, 10);

        I.click(this.fields.productCard);
    },

    /**
     * Select the first product displayed on the search results page that has reviews by clicking on its product card.
     *
     * @returns {void}
     */
    selectFirstProductWithReviews() {
        I.waitForElement(this.fields.productWithReviews, 15);

        I.click(this.fields.productWithReviews);
    }
}
