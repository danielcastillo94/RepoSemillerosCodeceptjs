const { TC005Page } = inject();

Given(/^Im on the homepage$/, () => {
    TC005Page.goToHomePage();
});

When(/^I search for a product "([^"]*)"$/, (productName) => {
    TC005Page.searchProduct(productName);
});

When(/^I select a product to view its details$/, () => {
    TC005Page.selectProduct();
});

Then(/^I should see the product detail page$/, () => {
    TC005Page.verifyProductDetailPage();
});

Then(/^I can see the product name, price, description, and image$/, async () => {
    await TC005Page.verifyProductDetails();
});