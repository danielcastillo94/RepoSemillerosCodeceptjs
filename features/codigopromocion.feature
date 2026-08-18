@promocion
Feature: Código Promocional
Background: producto en carrito
    Given El usuario tiene una sesion activa
    When El usuario ve el resumen de su compra
@TC047-48
Scenario: Aplicar código promocional válido
    When El usuario aplica un cupon valido
    Then El usuario ve su nuevo total