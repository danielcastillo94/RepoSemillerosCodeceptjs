const assert = require('assert');

const { I } = inject();

/**
 * Reviews Page Object
 *
 * Encapsulates the interactions with the reviews section of the page.
 *
 * @module reviewsPage
 */
module.exports = {

    /**
     * Selectors for the reviews section of the page.
     */
    elements: {
        reviewsSection:'[data-testid="bazaarvoice-product-review-collapse"]',
        reviewsTitle:'[data-testid="bazaarvoice-product-review-collapse-title-content"]',
        reviewComment:'[data-testid="review-comment"]',
        fiveStarReview:'[data-testid="review-comment"] [aria-label="5 stars of 5"]'
    },

    /**
     * Waits for the reviews section to render and verifies its title (Opiniones del artículo) is visible.
     *
     * @returns {void}
     */
    seeReviewsSection() {
        I.waitForElement(this.elements.reviewsSection, 15);

        I.see('Opiniones del artículo', this.elements.reviewsTitle);
    },

    /**
     * Verifies that at least one customer review comment is displayed.
     *
     * @return {Promise<void>}
     * @throws {AssertionError} If no reviews are displayed.
     */
    async seeCustomerReviews() {
        I.waitForElement(this.elements.reviewComment, 15);

        const reviews = await I.grabNumberOfVisibleElements(this.elements.reviewComment);

        assert(
            reviews > 0,
            'No customer reviews were displayed.'
        );
    },

    /**
     * Wait for reviews comments to be present so their star ratings can be verified.
     *
     * @returns {void}
     */
    reviewCustomerRatings() {
        I.waitForElement(this.elements.reviewComment,15);
    },

    /**
     * Verifies that at least one review with a 5-star rating is displayed.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If no five-star reviews are displayed.
     */
    async seeFiveStarReviews() {
        const fiveStarReviews = await I.grabNumberOfVisibleElements(this.elements.fiveStarReview);

        assert(
            fiveStarReviews > 0,
            'No five star reviews were displayed.'
        );
    }

};
