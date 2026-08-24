@prueba
Feature: Búsqueda de productos en Liverpool
  Background:
    Given que estoy en la página principal de Liverpool

  Scenario: TC-001 Buscar producto existente"
    When busco el producto "zapatillas"
    Then debería visualizar resultados de búsqueda

 Scenario: TC-002 Buscar producto inexistente
    When busco el producto "product9999999"
    Then debería visualizar el mensaje de que no hay resultados

  Scenario: TC-003 Validar resultados mostrados
    When busco el producto "zapatillas"
    Then debería visualizar resultados de búsqueda
    And debería visualizar productos relacionados con "zapatillas"
      
  Scenario: TC-004 Expandir categoría principal
    When abro el menú de Categorías

Scenario: TC-005 Acceder a subcategoría
  Given que estoy en la página principal de Liverpool
  When abro el menú de Categorías
  And accedo a la subcategoría Mujer

Scenario: TC-006 Validar productos de categoría
  Given que estoy en la página principal de Liverpool
  When abro el menú de Categorías
  And accedo a la subcategoría Mujer
  Then debería visualizar productos de la categoría

Scenario: TC-007 Filtrar precio de menor a mayor
  When busco el producto "zapatillas"
  Then debería visualizar resultados de búsqueda
  When ordeno productos de menor a mayor
  Then debería visualizar productos de menor a mayor


Scenario: TC-008 Filtrar por rango específico
  Given que estoy en la página principal de Liverpool
  When busco el producto "zapatillas"
  And filtro productos desde "$500" hasta "$2000"
  Then debería visualizar productos dentro del rango de "$500" a "$2000"

  Scenario: TC-009 Validar que solo se muestran productos en rango
    When busco el producto "zapatillas"
    And filtro productos desde "$500" hasta "$2000"
    Then todos los productos deberían estar entre "$500" y "$2000"
