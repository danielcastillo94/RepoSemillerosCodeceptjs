@detalles
Feature: Validación de detalle de producto en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    When el usuario busca el producto "tenis"
    And se muestran resultados relacionados con la búsqueda "tenis"
    And el usuario hace clic en un producto para ver su detalle

  @TC-019
  Scenario: Abrir detalle de producto
    Then se muestra la página de detalle del producto seleccionado

  @TC-020
  Scenario: Validar nombre, precio, descripción
    Then se valida que el nombre, precio y descripción del producto son correctos

  @TC-021
  Scenario: Ver galería de imágenes
    Then se valida que la galería de imágenes del producto se muestra correctamente

  @TC-022
  Scenario: Ver tiendas cercanas con stock
    Then se valida que se muestran las tiendas cercanas con stock del producto

  @TC-023
  Scenario: Validar código de producto
    Then el usuario visualiza el código del producto

  @TC-024
  Scenario: Ver reseñas de producto
    Then se valida que se muestra la seccion de reseñas del producto
