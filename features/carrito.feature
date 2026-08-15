@carrito
Feature: Bolsa de compras en Liverpool
  Como usuario de Liverpool.com.mx
  Quiero agregar productos a mi bolsa y administrar su contenido
  Para preparar mi compra antes de pagar

  # El Background deja al usuario siempre en la misma situación de partida:
  # un producto abierto en su página de detalle. Los tres pasos ya existen
  # (busqueda_steps.js y detalle_steps.js): no se redefine ninguno.
  Background:
    Given que el usuario se encuentra en la página principal de Liverpool
    And busca el producto "mochila"
    And abre el producto en la posición 1 de los resultados

  @TC-029 @TC-030 @TC-031 @smoke
  Scenario: Agregar un producto a la bolsa actualiza el contador
    When agrega el producto a la bolsa
    Then el contador de la bolsa muestra 1 producto

  @TC-029 @TC-032
  Scenario: La bolsa muestra el producto que se agregó
    When agrega el producto a la bolsa
    And abre la bolsa de compras
    Then la bolsa contiene 1 producto
    And la bolsa muestra el producto que se agregó
    And el subtotal de la bolsa es mayor que cero

  @TC-034 @TC-041
  Scenario: Aumentar la cantidad recalcula el subtotal
    When agrega el producto a la bolsa
    And abre la bolsa de compras
    And se registra el subtotal actual
    And aumenta la cantidad del primer producto
    Then la cantidad del primer producto es 2
    And el subtotal de la bolsa aumentó

  @TC-043
  Scenario: Eliminar el producto deja la bolsa vacía
    When agrega el producto a la bolsa
    And abre la bolsa de compras
    And elimina el primer producto de la bolsa
    Then la bolsa queda vacía
