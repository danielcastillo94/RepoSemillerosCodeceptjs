@product-reviews
Feature: Product Reviews

    As a Liverpool customer
    I want to view product reviews
    So that I can know other customers' opinions before purchasing

    @TC-026
    Scenario: View product reviews
        Given the user is viewing a product with reviews for "laptop"
        When the user opens the product reviews section
        Then customer reviews should be displayed

    @TC-027
    Scenario: Validate five star product reviews
        Given the user is viewing the reviews section for "laptop"
        When the user reviews the customer ratings
        Then at least one five star review should be displayed