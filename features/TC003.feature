Feature: Visualización funcional de planes Telcel

    @TC003
    Scenario: Plan Telcel Plus 5G
        Given I am on the telcel plans page
        When I scroll the section the Telcel plans
        Then I should see the "Telcel 5G Plus" plan
        And  I click on the "Details"  button for the specific plan
        Then I should see the detailed information for that plan

