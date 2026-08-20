@E2E
Feature: Flujo Completo E2E (Búsqueda → Compra)
Scenario: comprar tipica
    Given El usuario tiene una sesion iniciada
    When El usuario buscar el producto
    And El usuario agrega el producto al carrito
    And confirma su metodo de pago y direccion