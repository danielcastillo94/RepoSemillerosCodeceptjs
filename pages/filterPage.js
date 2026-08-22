const assert = require('assert');

const { I }= inject();

/**
 * Filter Page Object
 *
 * Encapsulates interactions and assertions for product filters
 * on the search results page, including price, brand, size and color filters.
 *
 * @module filterPage
 */
module.exports = {

    /**
     * Selectors for filter input fields.
     */
    fields: {
        minPrice: '[data-testid="at-text-min-input"]',
        maxPrice: '[data-testid="at-text-max-input"]',
        brandSearch: 'input[placeholder="Buscar marca"]'
    },

    /**
     * Selectors for filter and product elements.
     */
    elements: {
        filterContainer: '[data-testid="plp-page-plp-filter"]',
        brandGroup: '[data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group"]',
        sizeGroup: '[data-testid="plp-page-plp-filter-sizes-filter-sizes-checkbox-group"]',
        sizeShowAll: '[data-testid="plp-page-plp-filter-sizes-filter-sizes-checkbox-group-show-all-items-btn"]',
        productCard: '#plp-page-card-product-list [data-testid$="-card-card-link"]',
        productPrice: '[data-testid$="-price"]',
        discountedPrice: '[data-testid="discounted"]',
        originalPrice: '[data-testid="original"]',
        productBrand: 'h4',
        checkbox: 'input[type="checkbox"]'
    },

    /**
     * Selectors for filter action buttons.
     */
    buttons: {
        applyPrice: '[data-testid="chevron-right-icon-btn"]'
    },

    /**
     * Dynamic locators used to identify filter options
     * based on the value received by the test.
     */
    locators: {

        /**
         * Build the locator for a brand label.
         *
         * @param {string} brand - Brand name to locate.
         * @returns {string} XPath locator for the brand label.
         */
        brandLabel(brand) {
            const normalizedBrand = brand.toUpperCase();

            return `//div[@data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group"]//input[translate(@value, "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ")="${normalizedBrand}"]/ancestor::label[1]`;
        },

        /**
         * Build the locator for a size label.
         *
         * @param {string} size - Product size to locate.
         * @returns {string} XPath locator for the size label.
         */
        sizeLabel(size) {
            return `//div[@data-testid="plp-page-plp-filter-sizes-filter-sizes-checkbox-group"]//input[@value="${size}"]/ancestor::label[1]`;
        },

        /**
         * Build the locator for a size checkbox.
         *
         * @param {string} size - Product size to locate.
         * @returns {string} XPath locator for the size checkbox.
         */
        sizeCheckbox(size) {
            return `//div[@data-testid="plp-page-plp-filter-sizes-filter-sizes-checkbox-group"]//input[@value="${size}"]`;
        },

        /**
         * Build the locator for a color label.
         *
         * @param {string} color - Product color to locate.
         * @returns {string} XPath locator for the color label.
         */
        colorLabel(color) {
            return `//div[@data-testid="plp-page-plp-filter"]//input[starts-with(@value, "${color}~~")]/ancestor::label[1]`;
        },

        /**
         * Build the locator for a color checkbox.
         *
         * @param {string} color - Product color to locate.
         * @returns {string} XPath locator for the color checkbox.
         */
        colorCheckbox(color) {
            return `//div[@data-testid="plp-page-plp-filter"]//input[starts-with(@value, "${color}~~")]`;
        }
    },

    /**
     * Apply a custom minimum and maximum price range.
     *
     * @param {number} minPrice - Minimum price to apply.
     * @param {number} maxPrice - Maximum price to apply.
     * @returns {void}
     */
    applyPriceRange(minPrice, maxPrice){
        I.waitForElement(this.fields.minPrice, 10);

        I.scrollTo(this.fields.minPrice);

        I.fillField(this.fields.minPrice, minPrice);

        I.fillField(this.fields.maxPrice, maxPrice);

        I.click(this.buttons.applyPrice);

        I.waitForElement(this.elements.productCard, 15);
    },

    /**
     * Verify that the entered minimum and maximum price values
     * remain applied in the price filter fields.
     *
     * @param {number} minPrice - Expected minimum price.
     * @param {number} maxPrice - Expected maximum price.
     * @returns {Promise<void>}
     * @throws {AssertionError} If the applied price values do not match the expected values.
     */
    async seePriceFilterApplied(minPrice, maxPrice){
        const currentMin = await I.grabValueFrom(this.fields.minPrice);

        const currentMax = await I.grabValueFrom(this.fields.maxPrice);

        assert.strictEqual(
            Number(currentMin),
            Number(minPrice),
            `Expected minimum price ${minPrice}, but found ${currentMin}.`
        );

        assert.strictEqual(
            Number(currentMax),
            Number(maxPrice),
            `Expected maximum price ${maxPrice}, but found ${currentMax}.`
        );

    },

    /**
     * Validate that the prices of the first displayed products
     * are inside the selected price range.
     *
     * Discounted prices are used when available. If a product
     * does not have a discounted price, the original crossed-out
     * price is removed before reading the current price.
     *
     * @param {number} minPrice - Minimum accepted product price.
     * @param {number} maxPrice - Maximum accepted product price.
     * @returns {Promise<void>}
     * @throws {AssertionError} If no product prices are found.
     * @throws {AssertionError} If a displayed product price is outside the expected range.
     */
    async validatePricesInRange(minPrice, maxPrice){
        const selectors = {
            productCard: this.elements.productCard,
            productPrice: this.elements.productPrice,
            discountedPrice: this.elements.discountedPrice,
            originalPrice: this.elements.originalPrice
        };

        const prices =
            await I.executeScript(
                (selectors) => {
                    const cards =
                        Array.from(
                            document.querySelectorAll(
                                selectors.productCard
                            )
                        )
                            .slice(0, 8);


                    const parsePrice = (text) => {
                        if (!text) {
                            return null;
                        }
                        const cleaned =
                            text
                                .replace(/,/g, '')
                                .replace(/[^\d.]/g, '');

                        const value =
                            parseFloat(cleaned);

                        return Number.isNaN(value)
                            ? null
                            : value;
                    };

                    return cards
                        .map(card => {

                            const priceContainer =
                                card.querySelector(
                                    selectors.productPrice
                                );

                            if (!priceContainer) {
                                return null;
                            }

                            const discounted =
                                priceContainer.querySelector(
                                    selectors.discountedPrice
                                );

                            if (discounted) {
                                return parsePrice(
                                    discounted.textContent
                                );
                            }

                            const clone =
                                priceContainer.cloneNode(true);

                            clone
                                .querySelectorAll(
                                    selectors.originalPrice
                                )
                                .forEach(
                                    element =>
                                        element.remove()
                                );

                            return parsePrice(
                                clone.textContent
                            );
                        })
                        .filter(
                            price =>
                                price !== null
                        );
                },
                selectors
            );

        assert(
            prices.length > 0,
            'No product prices were found.'
        );

        const invalidPrices =
            prices.filter(
                price =>
                    price < minPrice ||
                    price > maxPrice
            );

        assert.strictEqual(
            invalidPrices.length,
            0,
            `Products outside the expected range were found: ${invalidPrices.join(', ')}`
        );
    },

    /**
     * Select a brand from the brand filter.
     *
     * The brand search field is used to locate the requested brand
     * before clicking its corresponding filter option.
     *
     * @param {string} brand - Brand name to select.
     * @returns {void}
     */
    selectBrand(brand) {
        const brandLabel = this.locators.brandLabel(brand);

        I.waitForElement(this.fields.brandSearch, 10);

        I.scrollTo(this.fields.brandSearch);

        I.fillField(this.fields.brandSearch, brand);

        I.waitForElement(brandLabel, 10);

        I.click(brandLabel);

        I.wait(2);

        I.waitForElement(this.elements.productCard, 15);
    },

    /**
     * Remove a previously selected brand filter.
     *
     * @param {string} brand - Brand name to remove.
     * @returns {void}
     */
    removeBrand(brand) {
        const brandLabel = this.locators.brandLabel(brand);

        I.waitForElement(this.fields.brandSearch, 10);

        I.fillField(this.fields.brandSearch, brand);

        I.waitForElement(brandLabel, 10);

        I.click(brandLabel);

        I.wait(2);

        I.waitForElement(this.elements.productCard, 15);
    },

    /**
     * Verify that a brand filter is currently selected.
     *
     * @param {string} brand - Brand expected to be selected.
     * @returns {Promise<void>}
     * @throws {AssertionError} If the brand checkbox is not selected.
     */
    async seeBrandFilterActive(brand) {
        I.fillField(this.fields.brandSearch, brand);

        I.wait(2);

        const isChecked = await this._isBrandChecked(brand);

        assert(
            isChecked,
            `The ${brand} brand filter is not active.`
        );
    },

    /**
     * Verify that a brand filter is not currently selected.
     *
     * @param {string} brand - Brand expected to be unselected.
     * @returns {Promise<void>}
     * @throws {AssertionError} If the brand checkbox remains selected.
     */
    async seeBrandFilterNotActive(brand) {
        I.fillField(this.fields.brandSearch, brand);
        
        I.wait(2);

        const isChecked = await this._isBrandChecked(brand);

        assert(
            !isChecked,
            `The ${brand} brand filter is still active.`
        );
    },

    /**
     * Validate that the brands of the first displayed products
     * belong to the list of allowed brands.
     *
     * @param {string[]} allowedBrands - Brands expected in the displayed products.
     * @returns {Promise<void>}
     * @throws {AssertionError} If no product brands are found.
     * @throws {AssertionError} If a product belongs to an unexpected brand.
     */
    async validateDisplayedBrands(allowedBrands){
        const selectors = {
            productCard: this.elements.productCard,
            productBrand: this.elements.productBrand
        };

        const brands =
            await I.executeScript(
                (selectors) => {
                    return Array.from(
                        document.querySelectorAll(selectors.productCard)
                    )
                        .slice(0, 8)
                        .map(card => {
                            const brand = card.querySelector(selectors.productBrand);

                            return brand
                                ? brand.textContent
                                    .trim()
                                    .toUpperCase()
                                : null;
                        })
                        .filter(Boolean);
                },
                selectors
            );

        const expectedBrands =
            allowedBrands.map(
                brand =>
                    brand.toUpperCase()
            );

        const invalidBrands =
            brands.filter(
                brand =>
                    !expectedBrands.includes(
                        brand
                    )
            );

        assert(
            brands.length > 0,
            'No product brands were found.'
        );

        assert.strictEqual(
            invalidBrands.length,
            0,
            `Unexpected brands were displayed: ${invalidBrands.join(', ')}`
        );
    },

    /**
     * Select a product size from the size filter.
     *
     * If the requested size is not initially visible,
     * the complete size list is displayed before selecting it.
     *
     * @param {string} size - Product size to select.
     * @returns {Promise<void>}
     */
    async selectSize(size) {
        await this._ensureSizeVisible(size);

        const sizeLabel = this.locators.sizeLabel(size);

        I.scrollTo(sizeLabel);

        I.click(sizeLabel);

        I.wait(2);

        I.waitForElement(this.elements.productCard, 15);
    },

    /**
     * Verify that a size filter is currently selected.
     *
     * @param {string} size - Product size expected to be selected.
     * @returns {Promise<void>}
     */
    async seeSizeFilterActive(size) {
        await this._ensureSizeVisible(size);

        const sizeCheckbox = this.locators.sizeCheckbox(size);

        I.waitForElement(sizeCheckbox, 10);

        I.wait(1);

        I.seeCheckboxIsChecked(sizeCheckbox);
    },

    /**
     * Select a product color from the color filter.
     *
     * @param {string} color - Product color to select.
     * @returns {void}
     */
    selectColor(color) {
        const colorLabel = this.locators.colorLabel(color);

        I.waitForElement(colorLabel, 10);

        I.scrollTo(colorLabel);

        I.click(colorLabel);

        I.wait(2);

        I.waitForElement(this.elements.productCard, 15);
    },

    /**
     * Verify that a color filter is currently selected.
     *
     * @param {string} color - Product color expected to be selected.
     * @returns {void}
     */
    seeColorFilterActive(color) {
        const colorCheckbox = this.locators.colorCheckbox(color);

        I.waitForElement(colorCheckbox, 10);

        I.wait(1);

        I.seeCheckboxIsChecked(colorCheckbox);
    },

    /**
     * Verify that at least one product is displayed
     * after applying filters.
     *
     * @returns {Promise<void>}
     * @throws {AssertionError} If no products are displayed.
     */
    async seeFilteredProducts() {
        I.waitForElement(this.elements.productCard, 15);

        const products = await I.grabNumberOfVisibleElements(this.elements.productCard);

        assert(
            products > 0,
            'No products were displayed after applying the filters.'
        );
    },

    /**
     * Ensure that a requested size option is visible.
     *
     * Liverpool initially displays only part of the available sizes.
     * If the requested size is hidden, the "Show more" option is used
     * to display the complete size list.
     *
     * @private
     * @param {string} size - Product size that must be visible.
     * @returns {Promise<string>} Locator for the requested size label.
     */
    async _ensureSizeVisible(size) {
        const sizeLabel = this.locators.sizeLabel(size);

        const visible = await I.grabNumberOfVisibleElements(sizeLabel);

        if (visible === 0) {
            I.waitForElement(this.elements.sizeShowAll, 10);

            I.scrollTo(this.elements.sizeShowAll);

            I.click(this.elements.sizeShowAll);

            I.waitForElement(sizeLabel, 10);
        }

        return sizeLabel;
    },

    /**
     * Determine whether a brand checkbox is currently selected.
     *
     * @private
     * @param {string} brand - Brand whose checkbox state will be checked.
     * @returns {Promise<boolean>} True if the brand checkbox is selected; otherwise, false.
     */
    async _isBrandChecked(brand) {
        const selectors = {
            brandGroup: this.elements.brandGroup,

            checkbox: this.elements.checkbox
        };

        return await I.executeScript(
            ({ selectors, brand }) => {
                const group =
                    document.querySelector(selectors.brandGroup);

                if (!group) {
                    return false;
                }

                const normalizedBrand = brand.toUpperCase();

                const input =
                    Array.from(
                        group.querySelectorAll(selectors.checkbox)
                    )
                        .find(
                            checkbox =>
                                checkbox.value
                                    .toUpperCase() ===
                                normalizedBrand
                        );

                return Boolean(
                    input &&
                    input.checked
                );
            },
            {
                selectors,
                brand
            }
        );
    }
};