@Telcel @TC012
Feature: Validación flujo de sitio Telcel

    Scenario: Validar acceso a documentos legales del sitio
        Given I am on the telcel page home
        When I go to the footer
        And I click on terms and conditions
        Then I see the page loaded correctly

