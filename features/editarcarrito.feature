@editarcarrito
Feature: Carrito - Cantidad y Cambios
Background: carrito con productos
    Given El usuario agrego 3 productos a su carrito
@TC041
Scenario: Aumentar cantidad en carrito
    When El usuario agrega un producto mas desde su carrito
@TC042
Scenario: Disminuir cantidad
    When El usuario resta una unidad a un producto
@TC043
Scenario: Remover producto del carrito
    When El usuario elimina un producto desde su carrito

