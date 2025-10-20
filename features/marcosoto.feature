@marcosoto
Feature: Validar flujos principales del portal Telcel desde el home hasta secciones de información, contacto y planes.
    Background: Regresando al caso inicial
        Given Im on the homepage
        Then I accept cookies

    @TC001
    Scenario: Validar la carga del portal y los elementos principales del home
        Then I validate "main" page

    @TC002
    Scenario: Validar navegación hacia la sección de planes y submenús
        Given I open the "main" menu
        Then I validate "main menu" page
        And I navigate to "Planes"
        Then I validate "Planes" page

    @TC003
    Scenario: Validar ingreso al detalle de un plan específico
        Given I open the "main" menu
        And I navigate to "Planes"
        And I go to plan telcel ultra
        Then I validate comprar button

    @TC004
    Scenario: Validar que se muestren resultados de busqueda
        When I search for a product "iPhone 17"
        Then I should see search results

    @TC005
    Scenario: Usuario visualiza el detalle de un producto
        When I search for a product "iPhone 17"
        And I select a product to view its details
        And I validate "product detail" page
        Then I can see the product name, price, description, and image

    @TC006
    Scenario: Validar acceso a la sección de cobertura nacional
        Given I open the "main" menu
        And I navigate to "Cobertura"
        And I go to map view
        Then I validate "Cobertura" page

    @TC007
    Scenario: Validar acceso a la sección de contacto
        Given I open the "main" menu
        And I navigate to "Contacto"
        And I go to contact view
        Then I validate "Contacto" page

    @TC008
    Scenario: Validar contenido del apartado de ayuda o preguntas frecuentes
        Given I open the "main" menu
        And I navigate to "Preguntas Frecuentes"
        Then I validate "Preguntas Frecuentes" page

    @TC009
    Scenario: Validar cambio de estado/región en el portal
        Given I open the "Region" menu
        When I select "Aguascalientes" region
        Then I validate region is changed to "Aguascalientes"

    @TC010
    Scenario Outline: Validar enlaces de redes sociales
        Given I go to the footer
        Then I validate "<socialMedia>"
        Examples:
            | socialMedia |
            | X           |
            | Facebook    |
            | Youtube     |
            | HolaTelcel  |

    @TC011
    Scenario: Validar comportamiento del menú en vista móvil
        Given I switch to movil view
        When I open the "movil" menu
        Then I validate "movil menu" page

    @TC012
    Scenario: Validar documentos legales del sitio
        Given I go to the footer
        When I go to Terminos y Condiciones
        Then I validate "Terminos y Condiciones" page