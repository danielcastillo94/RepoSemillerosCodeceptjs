@filtroprecio
Feature: Filtros por Precio
Background: inicio de filtro
    Given El usuario se encuentra en la pagina principal
    When El usuario da clic sobre "Categorías"
    And El usuario da clic sobre la categoria "Hombre"
    And El usuario da clic en la subcategoría "Zapatos"
    And El usuario da clic en la opcion "Tenis Casuales"
@TC007
Scenario: Filtrar precio de menor a mayor
    When El usuario da clic cobre el boton "Ordenar por:"
    And El usuario ve una lista y da clic sobre "Menor precio"
    Then El usuario ve una los productos de menor precio primero

@TC008
Scenario: Filtrar por rango específico
    When El usuario ingresa el rango de precio "1000 - 5000"
    And El usuario da clic sobre el boton con forma de flecha
    Then EL usuario observa productos dentro del rango de precios que valido

@TC009
Scenario: Validar que solo mostrar en rango
    When El usuario da clic en la opcion de Precio "Menos de 500"
    Then El usuario ve productos menores a 500 pesos