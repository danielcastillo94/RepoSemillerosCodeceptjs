const { searchPage , resultsPage , productDetailPage } = inject();

/**
 * Shared flow: search for a product and open the first result's
 * detail page. Used by multiple `Given` steps in this file so each
 * scenario can start directly from a loaded PDP.
 *
 * @param {string} product - Product/search term to look up.
 * @returns {void}
 */
function openProductDetail(product) {
    searchPage.openHomePage();

    searchPage.searchProduct(product);

    resultsPage.seeSearchResultsPage();

    resultsPage.selectFirstProduct();

    productDetailPage.seeProductDetailPage();
}

/* ============================================================
 * @TC-020 — Open a product detail page
 * ============================================================ */

Given('the user has searched for {string}', (product) => {
        searchPage.openHomePage();

        searchPage.searchProduct(product);

        resultsPage.seeSearchResultsPage();
    }
);

When('the user selects a product from the search results', () => {
        resultsPage.selectFirstProduct();
    }
);

Then('the product detail page should be displayed', () => {
        productDetailPage.seeProductDetailPage();
    }
);

/* ============================================================
 * @TC-021 — Validate product name, price and description
 * (also used as the setup `Given` for @TC-022, and for
 * @TC-023 / @TC-024 / @TC-025 in product_stock.feature)
 * ============================================================ */

Given('the user is viewing a product detail page for {string}', (product) => {
        openProductDetail(product);
    }
);

Then('the product name should be visible', () => {
        productDetailPage.seeProductName();
    }
);

Then('the product price should be visible', () => {
        productDetailPage.seeProductPrice();
    }
);

When('the user opens the product characteristics', () => {
        productDetailPage.openCharacteristics();
    }
);

Then('the product description should be visible', async () => {
        await productDetailPage.seeProductDescription();
    }
);

/* ============================================================
 * @TC-022 — View the product image gallery
 * (reuses "the user is viewing a product detail page for {string}"
 * from @TC-021 above as its `Given`)
 * ============================================================ */

When('the user reviews the product image gallery', () => {
        productDetailPage.seeProductGallery();
    }
);

Then('the product gallery should be displayed', () => {
        productDetailPage.seeProductGallery();
    }
);

Then('multiple product images should be available', async () => {
        await productDetailPage.seeMultipleProductImages();
    }
);
