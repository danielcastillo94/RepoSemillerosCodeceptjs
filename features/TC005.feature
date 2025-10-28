@Telcel @TC005
Feature: Validación Telcel

    Scenario: Detalle de quipo
        Given I am on the telcel page home
        When I enter a search term
        Then  I select a result
        And I see product details



