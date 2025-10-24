Feature: Validar flujo de componentes telcel

    Scenario:Validar enlaces de redes sociales en el pie de pagina
        Given I am on the telcel page home
        When I navigate to the footer
        Then  I click on the social media icons to validate
