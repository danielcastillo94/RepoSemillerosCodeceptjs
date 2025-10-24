Feature: Validar flujos del portal telcel


    Scenario: Menu planes
        Given I am on the telcel page home
        When I am click in the principal menu
        And I am click in the planes option
        Then I should see the planes section