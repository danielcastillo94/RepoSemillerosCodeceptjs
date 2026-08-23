@product-stock
Feature: Product Stock and Availability

    As a Liverpool customer
    I want to check product availability
    So that I know where the product can be purchased

    @TC-023
    Scenario: Validate product availability
        Given the user is viewing a product detail page for "laptop"
        When the user reviews the product availability section
        Then the product availability options should be displayed

    @TC-024
    Scenario: View nearby stores with product availability
        Given the user is viewing a product detail page for "laptop"
        When the user selects Click and Collect
        And the user opens the store selector
        And the user searches for stores using postal code "06000"
        Then nearby stores should be displayed

    @TC-025
    Scenario: Validate product code
        Given the user is viewing a product detail page for "laptop"
        When the user reviews the product code
        Then the product code should be displayed