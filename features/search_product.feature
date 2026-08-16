@search
Feature: Product Search Functionality

    As a liverpool customer, I want to be able to search for products on the Liverpool website so that I can easily find the items I am looking for.

    Background:
        Given the user is on the Liverpool homepage 

    @TC-001
    Scenario: Search for a existing product using the search bar
        When the user enters "laptop" in the search bar
        And enters the search query
        Then the search results page should be displayed
        And at least one product should be shown

    @TC-002
    Scenario: Search for a non-existing product using the search bar
        When the user enters "xhgdk" in the search bar
        And enters the search query
        Then the user should see a message indicating that no products were found for "xhgdk"

    @TC-003
   Scenario: Validate the displayed search results
        When the user searches for "laptop" in the search bar
        Then the search results page should be displayed
        Then each product in the search results should have a title
        And each product in the search results should have a price
         

