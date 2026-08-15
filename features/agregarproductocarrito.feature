@agregarcarrito
Feature: Agregar al Carrito - Un Producto
Background: inicio de producto
    Given El usuario se encuentar en la categora de playeres
    When  El usuario aplica filtros
    And El usuario da clic en un producto de su agrado
    And El usuario escoge la talla de su agrado
@TC029
Scenario: Agregar 1 producto al carrito
    When El usuario da clic en "Agregar a mi bolsa"
@TC030
Scenario: Validar cantidad en badge
    When El usuario escoge la cantidad de productos agregados
@TC031
Scenario: Ver confirmación de agregado
    When El usuario escoge la cantidad de productos agregados
    And El usuario da clic en "Agregar a mi bolsa"
    Then El usuario ve un mensaje de operacion exitosa