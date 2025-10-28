@Telcel @TC009
Feature: Navegación en el portal Telcel

    Scenario: Validar cambio de estado/region en el portal
        Given I am on the telcel page home
        When I click on the region selector
        And  I change the default state
        Then I can see that it updates correctly

