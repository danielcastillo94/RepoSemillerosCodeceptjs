@checkout
Feature: Checkout
Background: revicion de direccion
    Given El usuario tiene una sesion habierta
    When El usuario entra a la captegoria "playeras"
    And El usuario escoge un producto
    And El usuario agrega el producto al carrito
    And El usuario compra el producto
@TC050-052
Scenario: Checkout - Datos Personales
    When El usuario agrega un domicilio
    And El usuario llena el formulario
@TC053-055
Scenario: Checkout - Dirección de Envío
    When Seleccionar dirección guardada
    And Agregar dirección nueva
    And  Validar campos de dirección
@TC059-061
Scenario: Checkout - Método de Pago
    When Seleccionar pago con tarjeta
    And Validar campos de tarjeta
    Then Ver resumen antes de pagar