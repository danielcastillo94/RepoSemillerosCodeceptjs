@Telcel @TC004
Feature: Validación telcel buscador 

    Scenario: Buscador de equipos
        Given I am on the telcel home for buscador
        When I enter a search term for buscador
        Then I should coincident results for buscador
