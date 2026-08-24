const { I } = inject();

class ResultsPage {
    locators = {
        searchBar: '//input[@id=":R37ba9il9utsq:-input"]',
        productResultTitle: (producto) => `//h1[contains(translate(., "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "${producto.toLowerCase()}")]`,
        resultsPageUrl: (producto) => `https://www.liverpool.com.mx/tienda?s=${encodeURIComponent(producto)}`,
        productImg: '//img[@class="object-contain absolute w-full h-full translate-x-0 transition-transform duration-500 ease-in-out"]',
        productList: '//div[@id="plp-page-card-product-list"]'
    };

    validation() {
        I.amOnPage('/');
    }

    clickSearchBar() {
        I.waitForElement(this.locators.searchBar, 5);
        I.click(this.locators.searchBar);
    }

    searchFor(producto) {
        I.fillField(this.locators.searchBar, producto);
        I.pressKey('Enter');
    }

    validateResultsDisplayed(producto) {
        I.waitForElement(this.locators.productResultTitle(producto), 5);
        I.seeElement(this.locators.productResultTitle(producto));
        I.seeElement(this.locators.productImg);
    }

    validateNoMatchResults() {
        I.waitForText('Lo sentimos, no encontramos nada', 5);
    }

    validateResultsPage() {
        I.waitForURL(this.locators.resultsPageUrl, 5);
    }

    validateProductList() {
        I.seeElement(this.locators.productList);
    }

}

module.exports = new ResultsPage();