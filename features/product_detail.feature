@product-detail
Feature: Product Detail

    As a Liverpool customer
    I want to view product information
    So that I can review a product before purchasing it

    @TC-020
    Scenario: Open a product detail page
        Given the user has searched for "laptop"
        When the user selects a product from the search results
        Then the product detail page should be displayed

    @TC-021
    Scenario: Validate product name price and description
        Given the user is viewing a product detail page for "laptop"
        Then the product name should be visible
        And the product price should be visible
        When the user opens the product characteristics
        Then the product description should be visible

    @TC-022
    Scenario: View the product image gallery
        Given the user is viewing a product detail page for "laptop"
        When the user reviews the product image gallery
        Then the product gallery should be displayed
        And multiple product images should be available