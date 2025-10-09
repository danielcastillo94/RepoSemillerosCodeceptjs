const { TC005Page } = inject();

Given(/^Im on the homepage$/, async () => {
    await TC005Page.goToHomePage();
});

When(/^I search for a product "([^"]*)"$/, async (productName) => {
    await TC005Page.searchProduct(productName);
});

When(/^I select a product to view its details$/, async () => {
    await TC005Page.selectProduct();
});

Then(/^I should see the product detail page$/, async () => {
    await TC005Page.verifyProductDetailPage();
});

Then(/^I can see the product name, price, description, and image$/, async () => {
    await TC005Page.verifyProductDetails();
});