const { searchPage , resultsPage , productDetailPage } = inject();

function openProductDetail(product) {

    searchPage.openHomePage();

    searchPage.searchProduct(product);

    resultsPage.seeSearchResultsPage();

    resultsPage.selectFirstProduct();

    productDetailPage.seeProductDetailPage();
}

Given(
    'the user has searched for {string}',
    (product) => {

        searchPage.openHomePage();

        searchPage.searchProduct(product);

        resultsPage.seeSearchResultsPage();
    }
);


When(
    'the user selects a product from the search results',
    () => {

        resultsPage.selectFirstProduct();
    }
);


Then(
    'the product detail page should be displayed',
    () => {

        productDetailPage.seeProductDetailPage();
    }
);

Given(
    'the user is viewing a product detail page for {string}',
    (product) => {

        openProductDetail(product);
    }
);



Then(
    'the product name should be visible',
    () => {

        productDetailPage.seeProductName();
    }
);


Then(
    'the product price should be visible',
    () => {

        productDetailPage.seeProductPrice();
    }
);


When(
    'the user opens the product characteristics',
    () => {

        productDetailPage.openCharacteristics();
    }
);


Then(
    'the product description should be visible',
    async () => {

        await productDetailPage.seeProductDescription();
    }
);

When(
    'the user reviews the product image gallery',
    () => {

        productDetailPage.seeProductGallery();
    }
);


Then(
    'the product gallery should be displayed',
    () => {

        productDetailPage.seeProductGallery();
    }
);


Then(
    'multiple product images should be available',
    async () => {

        await productDetailPage.seeMultipleProductImages();
    }
);