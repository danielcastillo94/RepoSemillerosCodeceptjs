@reviews
Feature: Detalle de Producto - Reviews
Background: categorias playeres
    Given El usuario se encuentar en la categora de playeres
    When  El usuario aplica filtros
    And El usuario da clic en un producto de su agrado
@TC026
Scenario: Ver reseñas de producto
    Then El usuario ve las reseñas del producto
@TC027
Scenario: Filtrar por calificación (estrellas)
    When El usuario ordena los comentarios por mayor calificación
    Then El usuario ve las reseñas del producto
@TC028
Scenario: Ver fotos en reviews
    When El usuario da clic sobre la imagen del producto
    Then El usuario puede ver a detalla el producto
