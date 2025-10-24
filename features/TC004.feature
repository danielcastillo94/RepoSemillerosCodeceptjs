Feature: Validación telcel

    Scenario: Buscador de equipos
        Given I am on the telcel page home
        When I enter a search term
        Then I should coincident results
