@Telcel @TC001
Feature: Validar flujos del portal Telcel

 
   Scenario: Validar elementos del home
      Given I am on the telcel page home TC001
      When I am click in the logo
      And I am click in the principal menu in TC001
      And I click in the inicial banner
      Then I should see the select items load successfully


