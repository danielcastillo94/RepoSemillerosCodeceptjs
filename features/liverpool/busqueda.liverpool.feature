@busqueda
Feature: Validación de búsqueda de productos

  Background:
    Given El usuario se encuentra en la página principal de Liverpool

  @TC-001
  Scenario: Buscar un producto existente
    When Busca el producto "zapatillas"
    Then Se muestran resultados relacionados con la búsqueda

  @TC-002
  Scenario: Buscar un producto inexistente
    When Busca el producto "iphone30"
    Then No se muestran productos para "iphone30"

  @TC-003
  Scenario: Validar resultados mostrados
    When Busca el producto "zapatillas"
    Then Se muestran los resultados esperados
