Feature: Prueba pagina inicial de telcel

Scenario Outline: Prueba busqueda en telcel
    Given Estoy en telcel
    When Buscar "<producto>"
    Then ver los resultados en la busqueda

Examples:
|producto|
|iphone|

@pago
Scenario: Presionar boton de paga tu factura
    Given Estoy en telcel
    When Presiono el boton de paga tu factura
    And Escribo el número de teléfono
    And Escribo el número adicional
    And Presiono el botón de continuar si está habilitado
    Then verifico si el botón de continuar estaba habilitado


@title
Scenario: Cambio de titulo
    Given Estoy en telcel