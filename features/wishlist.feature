@wishlist
Feature: Agregar a Wishlist
Background: carrito lleno
    Given El usuario tiene una sesion iniciada
    When El usuario tiene un producto en su carrito
@TC035
Scenario: Agregar producto a wishlist
    When El usuario da clic en "mover a"
@TC036
Scenario: Ver wishlist actualizada
    When El usuario da clic en "mover a"
    And El usuario da clic en "wishlist"
@TC037
Scenario: Remover de wishlist
    When El usuario da clic en "mover a"
    And El usuario da clic en "wishlist"
    And El usuario remueve el producto de su wishlist