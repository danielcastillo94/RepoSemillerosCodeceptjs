@filtros
Feature: Validación de filtros de productos en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    And el usuario busca el producto "tenis"
    And se muestran resultados relacionados con la búsqueda "tenis"


  @TC-007
  Scenario: Filtrar precio de menor a mayor
    When el usuario aplica el filtro de precio de "Menor precio" en los filtros de "ordenar por"
    Then los productos se muestran de menor a mayor precio

  @TC-008
  Scenario: Filtrar por rango específico
    When el usuario aplica el filtro de precio "Rango"
    Then los productos se muestran dentro del rango de $500 a $2000

  @TC-009
  Scenario: Validar que solo mostrar en rango
    When el usuario aplica el filtro de precio "Rango"
    Then el usuario valida que los productos se muestran dentro del rango

  @TC-010
  Scenario: Validar selección de 1 marca
    When el usuario aplica el filtro de marca "Nike"
    Then los productos se muestran solo de la marca "Nike"

  @TC-011
  Scenario: Seleccionar múltiples marcas
    When el usuario aplica los filtros de marca "Nike" y "Adidas"
    Then los productos se muestran de las marcas "Nike" y "Adidas"

  @TC-012
  Scenario: Deseleccionar marca
    When el usuario aplica el filtro de marca "Nike"
    And los productos se muestran solo de la marca "Nike"
    And el usuario deselecciona el filtro de marca "Nike"
    Then los productos se muestran sin la marca "Nike"

  @TC-013
  Scenario: Filtrar por talla
    When el usuario aplica el filtro de talla "10 cm"
    Then los productos se muestran solo en la talla "10 cm"

  @TC-014
  Scenario: Filtrar por color
    When el usuario aplica el filtro de color
    Then los productos se muestran solo en el color seleccionado

  @TC-015
  Scenario: Combinar filtros talla + color
    When el usuario aplica los filtros de talla "10 cm" y color "Negro"
    Then los productos se muestran solo en la talla "10 cm" y color "Negro"

  @TC-016
  Scenario: Ordenar por calificación
    When el usuario aplica el filtro de ordenamiento "Mejor calificados"
    Then los productos se muestran por calificación

  @TC-017
  Scenario: Ordenar por precio (mayor a menor)
    When el usuario aplica el filtro de ordenamiento "Mayor precio"
    Then los productos se muestran por precio de mayor a menor

  @TC-018
  Scenario: Ordenar por más nuevo
    When el usuario aplica el filtro de ordenamiento "Novedades"
    Then los productos se muestran por fecha de publicación, mostrando los más recientes primero


