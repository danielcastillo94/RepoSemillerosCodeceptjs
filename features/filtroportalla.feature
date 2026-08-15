@filtrotallas
Feature: Filtros por Talla/Medida
Background: inicio de filtro
    Given El usuario se encuentra en la pagina principal
    When El usuario da clic sobre "Categorías"
    And El usuario da clic sobre la categoria "Hombre"
    And El usuario da click en la opcion "Playeras"
@TC013
Scenario: Filtrar por talla (XS, S, M, L, XL)
    When El usuario da clic en la opcion "Grande"
    Then El usuario ve solo playeras talla "Grande"
@TC014
Scenario: Filtrar por color
    When El usuario da clic en el color "Azul Oscuro"
    Then El usuario ve playeras con el mismo color
@TC015
Scenario: Combinar filtros talla + color
    When El usuario da clic en la opcion "Grande"
    And El usuario da clic en el color "Azul Oscuro"
    Then El usuario ve resultados de acuerdo a los filtros que aplico