const { marcosotoPage } = inject();

// ==================== BACKGROUND - STEPS GENERALES ====================

Given(/^Im on the homepage$/, () => {
    marcosotoPage.goToHomePage();
});

Then(/^I accept cookies$/, async () => {
    await marcosotoPage.acceptCookies();
});

// ==================== TC001 ====================

Then(/^I validate "([^"]*)" page$/, async (page) => {
    await marcosotoPage.verifyPageElements(page);
});

// ==================== TC002 ====================

When(/^I open the "([^"]*)" menu$/, async (menu) => {
    await marcosotoPage.openMenu(menu);
});

Then(/^I navigate to "([^"]*)"$/, async (menuOption) => {
    await marcosotoPage.navigateToMenuOption(menuOption);
});

// ==================== TC003 ====================

When(/^I go to plan telcel ultra$/, async () => {
    await marcosotoPage.goToPlanTelcelUltra();
});

Then(/^I validate comprar button$/, async () => {
    await marcosotoPage.validateComprarButton();
});

// ==================== TC004 ====================

When(/^I search for a product "([^"]*)"$/, (productName) => {
    marcosotoPage.searchProduct(productName);
});

Then(/^I should see search results$/, () => {
    marcosotoPage.verifySearchResults();
});

// ==================== TC005 ====================

When(/^I select a product to view its details$/, () => {
    marcosotoPage.selectProduct();
});

Then(/^I can see the product name, price, description, and image$/, async () => {
    await marcosotoPage.verifyProductDetails();
});

// ==================== TC006 ====================

When(/^I go to map view$/, async () => {
    await marcosotoPage.goToMapView();
});

// ==================== TC007 ====================

When(/^I go to contact view$/, async () => {
    await marcosotoPage.goToContactView();
});

// ==================== TC009 ====================

When(/^I select "([^"]*)" region$/, async (region) => {
    await marcosotoPage.selectRegion(region);
});

Then(/^I validate region is changed to "([^"]*)"$/, async (region) => {
    await marcosotoPage.validateRegionChange(region);
});

// ==================== TC010 ====================

Given(/^I go to the footer$/, async () => {
    await marcosotoPage.goToFooter();
});

Then(/^I validate "([^"]*)"$/, async (socialMedia) => {
    await marcosotoPage.validateSocialMedia(socialMedia);
});

// ==================== TC011 ====================

Given(/^I switch to movil view$/, () => {
    marcosotoPage.movilView();
});

// ==================== TC012 ====================

When(/^I go to Terminos y Condiciones$/, () => {
    marcosotoPage.legalDocs();
});