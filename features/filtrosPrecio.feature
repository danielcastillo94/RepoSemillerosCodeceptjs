@filtrosPrecio
Feature: Filtros y Ordenamiento por Precio
  
  Background:
    Given El usuario esta en la pagina de la categoria "Ropa-Camisas"

  @TC007
  Scenario: Ordenar productos de menor a mayor precio
    When El usuario selecciona la opcion de ordenamiento "Menor a mayor precio"
    Then Los productos se muestran ordenados por precio ascendentemente

  @TC008
  Scenario: Aplicar filtro por rango de precio especifico
    When El usuario ingresa "500" en el precio minimo
    And El usuario ingresa "2000" en el precio maximo
    And El usuario aplica el filtro de precio
    Then La pagina de resultados se actualiza

  @TC009
  Scenario: Validar coherencia del rango de precio
    When El usuario ingresa "500" en el precio minimo
    And El usuario ingresa "2000" en el precio maximo
    And El usuario aplica el filtro de precio
    Then Todos los productos mostrados tienen un precio entre 500 y 2000