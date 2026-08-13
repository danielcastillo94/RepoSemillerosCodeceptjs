@filtromarcas
Feature: Filtros por Marca
Background: inicio de filtro
    Given El usuario se encuentra en la pagina principal
    When El usuario da clic sobre "Categorías"
    And El usuario da clic sobre la categoria "Hombre"
    And El usuario da clic en la subcategoría "Zapatos"
    And El usuario da clic en la opcion "Tenis Casuales"
@TC010
Scenario: Seleccionar 1 marca
    When El usuario da clic en la marca "FOOTWEAR"
    Then El usuario ve Tenis de una sola marca

@TC011
Scenario: Seleccionar múltiples marcas
    When El usuario da clic en la marca "FOOTWEAR"
    And El usuario da clic en la marca "AMERICAN FIRE"
    And El usuario da clic en la marca " ASICS"
    Then El usuario ve Tenis de multiples marcas

@TC012
Scenario: Deseleccionar marca
    When El usuario da clic en la marca "FOOTWEAR"
    And El usuario da clic en la marca "AMERICAN FIRE"
    And El usuario da clic en la marca " ASICS"
    And El usuario da clic en las marcas "FOOTWAER Y ASICS"
    Then El usuario solo ve resultados de un marca