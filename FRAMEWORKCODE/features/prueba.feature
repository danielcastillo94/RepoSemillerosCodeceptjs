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


@carrito
Scenario: Agregar dos productos al carrito
    Given Estoy en telcel
    When Presiono el boton para entrar a la tienda en linea
    And Presiono el boton de telefonos
    And presiono el boton de Lo quiero para el primer resultado
    And presiono el boton de agregar al carrito
    Then presiono el boton de ir al carrito para ver si se agrego


@comparar
Scenario: Comparar dos dispositivos celulares
    Given Estoy en telcel
    When Presiono el boton comparar del segundo dispositivo
    And Selecciono una marca
    Then Selecciono un modelo