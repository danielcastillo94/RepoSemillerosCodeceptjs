Feature: Verificar flujo de modulo en Telcel

    Scenario: Validar acceso y estructura del formulario de contacto

        Given I am on the telcel contact page
        When I scroll to the contact form section
        Then I should see the contact form with all required fields