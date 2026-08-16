const assert = require('assert');

const { I } = inject();

module.exports = {

    elements: {

        reviewsSection:
            '[data-testid="bazaarvoice-product-review-collapse"]',

        reviewsTitle:
            '[data-testid="bazaarvoice-product-review-collapse-title-content"]',

        reviewComment:
            '[data-testid="review-comment"]',

        fiveStarReview:
            '[data-testid="review-comment"] [aria-label="5 stars of 5"]'
    },

    seeReviewsSection() {

        I.waitForElement(
            this.elements.reviewsSection,
            15
        );

        I.see(
            'Opiniones del artículo',
            this.elements.reviewsTitle
        );
    },


    async seeCustomerReviews() {

        I.waitForElement(
            this.elements.reviewComment,
            15
        );

        const reviews =
            await I.grabNumberOfVisibleElements(
                this.elements.reviewComment
            );

        assert(
            reviews > 0,
            'No customer reviews were displayed.'
        );
    },

    reviewCustomerRatings() {

        I.waitForElement(
            this.elements.reviewComment,
            15
        );
    },


    async seeFiveStarReviews() {

        const fiveStarReviews =
            await I.grabNumberOfVisibleElements(
                this.elements.fiveStarReview
            );

        assert(
            fiveStarReviews > 0,
            'No five star reviews were displayed.'
        );
    }

};