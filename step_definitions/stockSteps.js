const { stockPage } = inject();

/* ============================================================
 * @TC-023 — Validate product availability
 * ============================================================ */

When('the user reviews the product availability section', () => {
        stockPage.seeAvailabilitySection();
    }
);

Then('the product availability options should be displayed', async () => {
        await stockPage.seeAvailabilityOptions();
    }
);

/* ============================================================
 * @TC-024 — View nearby stores with product availability
 * ============================================================ */

When('the user selects Click and Collect', () => {
        stockPage.selectClickAndCollect();
    }
);

When('the user opens the store selector', () => {
        stockPage.openStoreSelector();
    }
);

When('the user searches for stores using postal code {string}', (postalCode) => {
        stockPage.searchStoresByPostalCode(postalCode);
    }
);

Then('nearby stores should be displayed', async () => {
        await stockPage.seeNearbyStores();
    }
);

/* ============================================================
 * @TC-025 — Validate product code
 * ============================================================ */

When('the user reviews the product code', () => {
        // Product code is displayed directly on the Product Detail Object.
    }
);

Then('the product code should be displayed', async () => {
        await stockPage.seeProductCode();
    }
);