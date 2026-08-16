@multicarrito
Feature: Agregar al Carrito - Múltiples Productos
Background: inicio de producto
    Given El usuario se encuentar en la categora de playeres
    When  El usuario aplica filtros
@TC032
Scenario: Agregar 3+ productos diferentes
    When El usuario agrega el priner producto al carrito
    And El usuario agrega el segundo producto al carrito
    And El usuario agrega el tercer producto al carrito
@TC033 
Scenario: Validar cantidad total en carrito
    When El usuario agrega el priner producto al carrito
    And El usuario agrega el segundo producto al carrito
    And El usuario agrega el tercer producto al carrito
    Then El usuario ve su carrito de productos
@TC034
Scenario: Ver subtotal actualizado
    When El usuario agrega el priner producto al carrito
    And El usuario agrega el segundo producto al carrito
    And El usuario agrega el tercer producto al carrito
    Then El usuario ve su carrito de productos
    And El usuario ve el "Subtotal" y el "Total" de su comprar