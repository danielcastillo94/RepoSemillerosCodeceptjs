@detalles
Feature: Validación de detalle de producto en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    And el usuario busca el producto "tenis"
    And se muestran resultados relacionados con la búsqueda "tenis"
    And el usuario hace clic en un producto para ver su detalle

  @TC-020
  Scenario: Abrir detalle de producto
    Then se muestra la página de detalle del producto seleccionado

  @TC-021
  Scenario: Validar nombre, precio, descripción
    Then se valida que el nombre, precio y descripción del producto son correctos

  @TC-022
  Scenario: Ver galería de imágenes
    Then se valida que la galería de imágenes del producto se muestra correctamente

  @TC-023
  Scenario: Validar stock disponible
    Then se valida que el stock del producto está disponible

  @TC-024
  Scenario: Ver tiendas cercanas con stock
    Then se valida que se muestran las tiendas cercanas con stock del producto

  @TC-025
  Scenario: Validar SKU y código de producto
    Then se valida que el SKU y código del producto son correctos

  @TC-026
  Scenario: Ver reseñas de producto
    Then se valida que se muestran las reseñas del producto

  @TC-027
  Scenario: Filtrar por calificación (estrellas)
    When el usuario filtra las reseñas por calificación de 4 estrellas
    Then se muestran solo las reseñas con calificación de 4 estrellas

  @TC-028
  Scenario: Ver fotos en reviews
    Then se valida que las fotos en las reseñas del producto se muestran correctamente