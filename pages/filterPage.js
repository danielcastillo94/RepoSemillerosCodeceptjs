const { I } = inject();

class FilterPage {
    locators = {
        resultsPageUrl: 'https://www.liverpool.com.mx/tienda/pantallas/catst14457077',
        dropFilterMenu: '//button[@id="sorting-button"]',
        selectOption: (option) => `//li[contains(text(), "${option}")]`,
        dropMenuButtonText: '//span[contains(text(), "Ordenar por: Menor precio")]',
        filterPriceTitle: '//span[contains(text(), "Precios")]',
        inputMinPrice: '//input[@placeholder="Mínimo ($)"]',
        inputMaxPrice: '//input[@placeholder="Máximo ($$)"]',
        filterRangeButton: '//button[@aria-label="Filtrar"]',
        filterActivated: '//span[contains(text(), "Filtros seleccionados")]',
        productList: '//div[@id="plp-page-card-product-list"]'
    }

    goToResults() {
        I.waitForURL(this.locators.resultsPageUrl, 5);
    }

    sortBy(option) {
        I.seeElement(this.locators.dropFilterMenu);
        I.click(this.locators.dropFilterMenu);
        I.selectOption(this.locators.selectOption, option);
    }

    validateSelectedFilter() {
        I.waitForText(this.locators.dropMenuButtonText, 5);
    }
    
    filterByPriceRange(min, max) {
        I.scrollTo(this.locators.filterPriceTitle);
        I.fillField(this.locators.inputMinPrice, min);
        I.fillField(this.locators.inputMaxPrice, max);
        I.click(this.locators.filterRangeButton);
    }

    validateFilterRange() {
        I.waitForText(this.locators.filterActivated, 5);
        I.seeElement(this.locators.productList);
    }


}

module.exports = new FilterPage();