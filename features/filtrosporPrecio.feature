@JesusCfiltrosprecio
Feature: Filtros por precio en Liverpool
  Background: Regresando al caso inicial
        Given El usuario se encuentra en la página principal de Liverpool
  @TC-007
  Scenario: Filtrar productos por precio de menor a mayor
    Given El usuario se encuentra en la página de categoría de Tenis Casuales
    When El usuario filtra el precio de menor a mayor 
    Then En la página se debe de mostrar una sección de Filtros seleccionados con los datos de filtrado


  @TC-008
  Scenario: Filtrar productos por un rango de precio específico
    Given El usuario se encuentra en la página de resultados de Liverpool
    When El usuario selecciona el rango de precio de 500 a 1000 pesos
    Then Los productos mostrados deben tener un precio dentro del rango de 500 a 1000 pesos


  @TC-009
  Scenario: Validar que solo mostrar en rango
    Given El usuario se encuentra en la página de resultados de Liverpool
    When El usuario aplica un filtro especifico de precio de 500 a 1000 pesos
    Then Se muestra la cantidad de productos que cumplen con ese filtro