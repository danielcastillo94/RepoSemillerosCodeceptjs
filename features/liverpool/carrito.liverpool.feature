@carrito
Feature: Funcionalidades del carrito de compras en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    When el usuario busca el producto "tenis"
    And se muestran resultados relacionados con la búsqueda "tenis"
    And el usuario hace clic en un producto para ver su detalle

  @TC-025
  Scenario: Evaluación de proceso de compra
    When el usuario agrega un producto al carrito
    And el usuario entra al carrito y valida el registro del producto
    And el usuario selecciona una dirección de envío
    And el usuario selecciona una opción de pago
    And el usuario revisa el resumen de compra
    Then se valida que el proceso de compra se ha completado correctamente

  @TC-026
  Scenario: Aumentar cantidad en carrito
    When el usuario agrega un producto al carrito
    And el usuario entra al carrito
    And el usuario aumenta la cantidad de un producto en el carrito
    Then se valida que la cantidad se ha actualizado correctamente

  @TC-027
  Scenario: Disminuir cantidad en carrito
    When el usuario agrega un producto al carrito
    And el usuario entra al carrito
    And el usuario aumenta la cantidad de un producto en el carrito
    And el usuario disminuye la cantidad de un producto en el carrito
    Then se valida que la cantidad se ha actualizado correctamente

  @TC-028
  Scenario: Remover producto del carrito
    When el usuario agrega un producto al carrito
    And el usuario entra al carrito
    And el usuario remueve un producto del carrito
    Then se valida que el producto se ha removido correctamente del carrito


