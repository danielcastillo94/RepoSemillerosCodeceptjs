const { searchPage, resultsPage } = inject();

Given('the user is on the Liverpool homepage', () => {
  searchPage.openHomePage();
});

When('the user enters {string} in the search bar', (product) => {
  searchPage.enterProduct(product);
});

When('enters the search query', () => {
  searchPage.submitSearch();
});

Then('the search results page should be displayed', () => {
  resultsPage.seeSearchResultsPage();
});

Then('at least one product should be shown', async () => {
  await resultsPage.seeAtLeastOneProduct();
});

Then(
  'the user should see a message indicating that no products were found for {string}',
  (product) => {
    resultsPage.seeNoResultsMessage();
  }
);

When('the user searches for {string} in the search bar', (product) => {
  searchPage.searchProduct(product);
});

Then('each product in the search results should have a title', async () => {
  await resultsPage.verifyEveryProductHasTitle();
});

Then('each product in the search results should have a price', async () => {
  await resultsPage.verifyEveryProductHasPrice();
});