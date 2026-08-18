@stockdisponible
Feature: Detalle de Producto - Stock y Disponibilidad
Background: categorias playeres
    Given El usuario se encuentar en la categora de playeres
    When  El usuario aplica filtros
    And El usuario da clic en un producto de su agrado
@TC023
Scenario: Validar stock disponible
    When El usuario escoge la talla de su agrado
    And El usuario da clic en "Ver disponibilidad en tienda" y escoge su pais
    Then El usuario ve las diferentes sucursales con stock disponible
@TC024
Scenario: Ver tiendas cercanas con stock
    When El usuario escoge la talla de su agrado
    And El usuario da clic en "Recogen en tienda"
    And El usuario da clic en "Selecciona una tienda"
    And El usuario ingresa su cp y da clic en "Buscar"
    Then El usuario ve las tiendas cercanas
@TC025
Scenario: Validar SKU y código de producto
    Then El usuario ve el codigo del producto