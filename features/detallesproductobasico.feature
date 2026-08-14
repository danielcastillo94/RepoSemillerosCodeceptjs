@detallesbasicos
Feature: Detalle de Producto - Stock y Disponibilidad
Background: categorias playeres
    Given El usuario se encuentar en la categora de playeres
    When  El usuario aplica filtros
    And El usuario da clic en un producto de su agrado
@TC020
Scenario: Abrir detalle de producto
    Then El usuario puede ver los detalles del producto
@TC021
Scenario: Validar nombre, precio, descripción
    Then El usuario ve las caracteristicas del producto
@TC022
Scenario: Ver galería de imágenes
    Then El usuario ve las imagenes del producto