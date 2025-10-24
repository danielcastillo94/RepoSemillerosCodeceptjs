Feature: Validar flujos del portal Telcel

   @TC001
   Scenario: Validar elementos del home
      Given I am on the telcel page home
      When I am click in the logotipo telcel
      And I am click in the principal menu
      And I am click in the inicial banner
      Then I should see the select items load successfully


