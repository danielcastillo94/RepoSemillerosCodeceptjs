Feature: Validar flujo de apartado Telcel

    Scenario: Validar contenido del apartado de ayuda o preguntas frecuentes

        Given I am on the Telcel page home
        When I enter to the help center
        Then I check that the information categories are displayed