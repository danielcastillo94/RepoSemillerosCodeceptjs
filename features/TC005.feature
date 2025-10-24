
#Objetivo: Validar visualización del detalle de un producto

Feature: Visualización del detalle de un producto
    @TC005
    Scenario: Usuario visualiza el detalle de un producto
        Given Im on the homepage
        When I search for a product "iPhone 17"
        And I select a product to view its details
        And I should see the product detail page
        Then I can see the product name, price, description, and image

Feature: Validación Telcel

    Scenario: Detalle de quipo
        Given I am on the telcel page home
        When I enter a search term
        Then  I select a result
        And I see product details



