const { filterPage } = inject();

let appliedPriceRange = {
    min: null,
    max: null
};

/* ======================================================
 * PRICE
 * TC-008 / TC-009
 * ====================================================== */

When('the user applies a price range from {int} to {int}', (minPrice, maxPrice) => {
        appliedPriceRange.min = minPrice;
        appliedPriceRange.max = maxPrice;

        filterPage.applyPriceRange(minPrice, maxPrice);
    }
);

Then('the price filter should be applied', async () => {
        await filterPage.seePriceFilterApplied(
            appliedPriceRange.min,
            appliedPriceRange.max
        );
    }
);


When('the user reviews the displayed product prices', async () => {
        await filterPage.seeFilteredProducts();
    }
);

Then('all displayed product prices should be between {int} and {int}', async (minPrice, maxPrice) => {
        await filterPage.validatePricesInRange(
            minPrice,
            maxPrice
        );
    }
);


/* ======================================================
 * BRAND
 * TC-010 / TC-011 / TC-012
 * ====================================================== */

When('the user selects the {string} brand', (brand) => {
        filterPage.selectBrand(brand);
    }
);

Then('the {string} brand filter should be active', async (brand) => {
        await filterPage.seeBrandFilterActive(brand);
    }
);

Then('the {string} and {string} brand filters should be active', async (firstBrand, secondBrand) => {
        await filterPage.seeBrandFilterActive(firstBrand);

        await filterPage.seeBrandFilterActive(secondBrand);
    }
);

When('the user removes the {string} brand', (brand) => {
        filterPage.removeBrand(brand);
    }
);

Then('the {string} brand filter should not be active', async (brand) => {
        await filterPage.seeBrandFilterNotActive(brand);
    }
);


/* ======================================================
 * SIZE
 * TC-013 / TC-015
 * ====================================================== */

When('the user selects size {string}', async (size) => {
        await filterPage.selectSize(size);
    }
);

Then('the size {string} filter should be active', async (size) => {
        await filterPage.seeSizeFilterActive(size);
    }
);

/* ======================================================
 * COLOR
 * TC-014 / TC-015
 * ====================================================== */

When('the user selects color {string}', (color) => {
        filterPage.selectColor(color);
    }
);

Then('the color {string} filter should be active', async (color) => {
        await filterPage.seeColorFilterActive(color);
    }
);

/* ======================================================
 * COMBINED FILTERS
 * TC-015
 * ====================================================== */

Then('size {string} and color {string} filters should be active', async (size, color) => {
        await filterPage.seeSizeFilterActive(size);

        await filterPage.seeColorFilterActive(color);
    }
);