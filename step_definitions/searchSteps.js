const { searchPage, resultsPage } = inject();

/* ============================================================
 * Background — runs before every scenario in this feature
 * (@TC-001, @TC-002, @TC-003)
 * ============================================================ */

Given('the user is on the Liverpool homepage', () => {
  searchPage.openHomePage();
});

/* ============================================================
 * @TC-001 — Search for an existing product using the search bar
 * ============================================================ */

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

/* ============================================================
 * @TC-002 — Search for a non-existing product using the search bar
 * (reuses "the user enters {string} in the search bar" and
 * "enters the search query" from @TC-001 above)
 * ============================================================ */

Then('the user should see a message indicating that no products were found for {string}', (product) => {
    resultsPage.seeNoResultsMessage();
  }
);

/* ============================================================
 * @TC-003 — Validate the displayed search results
 * (reuses "the search results page should be displayed" from
 * @TC-001 above)
 * ============================================================ */

When('the user searches for {string} in the search bar', (product) => {
  searchPage.searchProduct(product);
});

Then('each product in the search results should have a title', async () => {
  await resultsPage.verifyEveryProductHasTitle();
});

Then('each product in the search results should have a price', async () => {
  await resultsPage.verifyEveryProductHasPrice();
});