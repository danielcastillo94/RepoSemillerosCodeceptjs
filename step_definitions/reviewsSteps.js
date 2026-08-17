const { searchPage , resultsPage, productDetailPage, reviewsPage } = inject();

/**
 * Shared flow: search for a product and open the first result that
 * has visible customer reviews.
 *
 * @param {string} product - Product/search term to look up.
 * @returns {void}
 */
function openProductWithReviews(product) {
    searchPage.openHomePage();

    searchPage.searchProduct(product);

    resultsPage.seeSearchResultsPage();

    resultsPage.selectFirstProductWithReviews();

    productDetailPage.seeProductDetailPage();
}

/* ============================================================
 * @TC-026 — View product reviews
 * ============================================================ */

Given('the user is viewing a product with reviews for {string}', (product) => {
        openProductWithReviews(product);
    }
);

When('the user opens the product reviews section',() => {
        productDetailPage.openReviews();
    }
);

Then('customer reviews should be displayed', async () => {
        reviewsPage.seeReviewsSection();

        await reviewsPage.seeCustomerReviews();
    }
);

/* ============================================================
 * @TC-027 — Validate five star product reviews
 * ============================================================ */

Given('the user is viewing the reviews section for {string}', (product) => {
        openProductWithReviews(product);

        productDetailPage.openReviews();

        reviewsPage.seeReviewsSection();
    }
);

When('the user reviews the customer ratings', () => {
        reviewsPage.reviewCustomerRatings();
    }
);

Then('at least one five star review should be displayed', async () => {
        await reviewsPage.seeFiveStarReviews();
    }
);