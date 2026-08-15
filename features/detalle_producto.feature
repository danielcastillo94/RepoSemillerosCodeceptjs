@detalle
Feature: Detalle de producto en Liverpool
  Como usuario de Liverpool.com.mx
  Quiero abrir el detalle de un producto
  Para revisar su nombre, precio y descripción antes de comprarlo

  Background:
    Given que el usuario se encuentra en la página principal de Liverpool

  @TC-020 @smoke
  Scenario: Abrir el detalle de un producto desde los resultados
    When busca el producto "zapatillas"
    And abre el producto en la posición 1 de los resultados
    Then se muestra la página de detalle del producto

  @TC-021
  Scenario: El detalle muestra la información esencial del producto
    When busca el producto "mochila"
    And abre el producto en la posición 1 de los resultados
    Then el detalle muestra nombre, precio y descripción
