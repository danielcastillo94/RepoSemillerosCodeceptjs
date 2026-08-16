const { stockPage } = inject();

When(
    'the user reviews the product availability section',
    () => {

        stockPage.seeAvailabilitySection();
    }
);


Then(
    'the product availability options should be displayed',
    async () => {

        await stockPage.seeAvailabilityOptions();
    }
);

When(
    'the user selects Click and Collect',
    () => {

        stockPage.selectClickAndCollect();
    }
);


When(
    'the user opens the store selector',
    () => {

        stockPage.openStoreSelector();
    }
);


When(
    'the user searches for stores using postal code {string}',
    (postalCode) => {

        stockPage.searchStoresByPostalCode(postalCode);
    }
);


Then(
    'nearby stores should be displayed',
    async () => {

        await stockPage.seeNearbyStores();
    }
);

When(
    'the user reviews the product code',
    () => {
        // Product code is displayed directly on the PDP.
    }
);


Then(
    'the product code should be displayed',
    async () => {

        await stockPage.seeProductCode();
    }
);