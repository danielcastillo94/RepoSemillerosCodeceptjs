@filters
Feature: Product Filters

    As a Liverpool customer
    I want to filter product results
    So that I can find products according to my preferences

    @TC-008
    Scenario: Filter products by a specific price range
        Given the user has searched for "tenis"
        When the user applies a price range from 500 to 2000
        Then the price filter should be applied

    @TC-009
    Scenario: Validate products inside the selected price range
        Given the user has searched for "tenis"
        And the user applies a price range from 500 to 2000
        When the user reviews the displayed product prices
        Then all displayed product prices should be between 500 and 2000

    @TC-010
    Scenario: Filter products by one brand
        Given the user has searched for "tenis"
        When the user selects the "Nike" brand
        Then the "Nike" brand filter should be active

    @TC-011
    Scenario: Filter products by multiple brands
        Given the user has searched for "tenis"
        When the user selects the "Nike" brand
        And the user selects the "Puma" brand
        Then the "Nike" and "Puma" brand filters should be active

    @TC-012
    Scenario: Remove an active brand filter
        Given the user has searched for "tenis"
        When the user selects the "Nike" brand
        And the user removes the "Nike" brand
        Then the "Nike" brand filter should not be active

    @TC-013
    Scenario: Filter products by size
        Given the user has searched for "playera"
        When the user selects size "M"
        Then the size "M" filter should be active

    @TC-014
    Scenario: Filter products by color
        Given the user has searched for "tenis"
        When the user selects color "Negro"
        Then the color "Negro" filter should be active

    @TC-015
    Scenario: Combine size and color filters
        Given the user has searched for "playera"
        When the user selects size "M"
        And the user selects color "Negro"
        Then size "M" and color "Negro" filters should be active