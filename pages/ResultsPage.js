const assert = require('assert');

const { I } = inject();

module.exports = {
    fields: {
        resultsContainer: '#plp-page-card-product-list',
        productCard: '#plp-page-card-product-list [data-testid$="-card-card-link"]',
        productTitle: '#plp-page-card-product-list [data-testid$="-card-card-link"] h3',
        productPrice: '#plp-page-card-product-list [data-testid$="-card-card-link"] [data-testid$="-price"]',

        noResultsMessage: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
    },

    seeSearchResultsPage(){
        I.waitForElement(this.fields.resultsContainer, 10);
        I.seeElement(this.fields.resultsContainer);
    },

    async seeAtLeastOneProduct(){
        I.waitForElement(this.fields.productCard, 10);
        
        const numberOfProducts = await I.grabNumberOfVisibleElements(this.fields.productCard);

        assert(
            numberOfProducts > 0,
            'No products were found on the search results page.'
        );
    },

    seeNoResultsMessage(){
        I.waitForElement(this.fields.noResultsMessage, 10);
        I.see(
            'Lo sentimos, no encontramos nada para',
            this.fields.noResultsMessage
        );
    },

    reviewDisplayedProducts(){
        I.waitForElement(this.fields.productCard, 10);
        I.seeElement(this.fields.productCard);
    },

    async verifyEveryProductHasTitle(){
        const products = await I.grabNumberOfVisibleElements(this.fields.productCard);

        const titles = await I.grabNumberOfVisibleElements(this.fields.productTitle);

        assert.strictEqual(
            titles, 
            products,
            `Expected ${products} products to have titles, but found ${titles} titles.`
        );
    },

    async verifyEveryProductHasPrice(){
        const products = await I.grabNumberOfVisibleElements(this.fields.productCard);

        const prices = await I.grabNumberOfVisibleElements(this.fields.productPrice);

        assert.strictEqual(
            prices,
            products,
            `Expected ${products} products to have prices, but found ${prices} prices.`
        )
    }
}
