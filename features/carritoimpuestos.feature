@validarimpuestos
Feature: Carrito - Cantidad y Cambios
Background: carrito con productos
    Given El usuario ve el resumen de su compra
@TC044
Scenario: Validar subtotal correcto
    Then El usuario ve el subtotal de la compra
@TC045
Scenario: Validar cálculo de impuestos
    Then El usuario ve que "IVA incluido"
@TC046
Scenario: Validar total final
    Then El usuario ve el total a pagar