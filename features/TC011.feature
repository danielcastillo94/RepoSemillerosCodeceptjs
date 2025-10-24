Feature: Validar flujos del sitio Telcel

    Scenario: Validar comportamiento del menu en vista movil
        Given I am on the telcel page home movil
        When I open the hamburger menu
        Then I visualize the available options

