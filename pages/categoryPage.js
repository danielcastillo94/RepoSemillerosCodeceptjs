const { I } = inject();

class CategoryPage {
    locators = {
        categoryButton: '//button[@data-testid="blt26617d4f2e17657d-header-button-category"]',
        categoryMenu: '//div[@class="MuiDrawer-root MuiDrawer-anchorLeft MuiDrawer-modal MuiModal-root css-1uvhcfe"]/div[3]',
        categoryList: '//a[@data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item-"]',
        subCategory: (name) => `//h3[contains(text(), "${name}")]`,
        subCategoryTitle: (subcat) => `//h2[contains(text(), "${subcat}")]`,
        productResultTitle: (producto) => `//h1[contains(text(), "${producto}")]`,
        productList: '//div[@id="plp-page-card-product-list"]'
    }

    validation() {
        I.amOnPage('/');
    }

    openCategoryMenu() {
        I.click(this.locators.categoryButton);
        I.seeElement(this.locators.categoryMenu);
    }

    visualizeCategories() {
        I.seeElement(this.locators.categoryList);
    }

    selectSubCategory(subcat) {
        I.seeElement(this.locators.subCategory(subcat));
        I.click(this.locators.subCategory(subcat));
    }

    validateSubCategory(subcat) {
        I.seeElement(this.locators.subCategoryTitle(subcat));
    }

    selectItemType(item) {
        I.seeElement(this.locators.subCategory(item));
        I.click(this.locators.subCategory(item));
    }

    validateResultsDisplayed(item) {
        I.waitForElement(this.locators.productResultTitle(item), 5);
        I.seeElement(this.locators.productResultTitle(item));
        I.seeElement(this.locators.productList);
    }

}

module.exports = new CategoryPage();