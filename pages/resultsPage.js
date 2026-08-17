const { I } = inject();

class ResultsPage {
    locators = {
        searchBar: '//input[@id=":R37ba9il9utsq:-input"]',
        productResultTitle: '//h1[contains(text(), "Zapatillas")]',
    };

    validation() {
        I.amOnPage('/');
    }

    clickSearchBar() {
        I.waitForElement(this.locators.searchBar, 5);
        I.click(this.locators.searchBar);
    }

    searchFor() {
        I.fillField(this.locators.searchBar, 'zapatillas');
        I.pressKey('Enter');
    }

    validateResultsDisplayed() {
        I.waitForElement(this.locators.productResultTitle, 10);
        I.seeElement(this.locators.productResultTitle);
    }

    searchProductNotFound() {
        I.fillField(this.locators.searchBar, 'maneki');
        I.pressKey('Enter');
    }

    validateNoMatchResults() {
        I.waitForText('Lo sentimos, no encontramos nada', 5);
    }
}