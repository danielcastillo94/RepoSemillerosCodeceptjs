@liverpool
Feature: Validar búsqueda, categorías, filtros, ordenamiento y detalle de producto en Liverpool.com.mx

  Background: Regresando a la página principal
    Given que el usuario se encuentra en la página principal de Liverpool

  @TC-001
  Scenario: Buscar un producto existente
    When busca el producto "tenis"
    Then se muestran resultados relacionados con la búsqueda

  @TC-002
  Scenario: Buscar un producto inexistente
    When busca el producto "zzzxxxinexistente123"
    Then no se muestran productos para "zzzxxxinexistente123"

  @TC-003
  Scenario: Validar los resultados mostrados en la búsqueda
    When busca el producto "tenis"
    Then los resultados muestran productos relacionados con "tenis"

  @TC-004
  Scenario: Expandir la categoría principal
    When abre el menú de categorías
    Then puede visualizar la categoría "Vinos y Gourmet"

  @TC-005
  Scenario: Acceder a una subcategoría
    When navega a la categoría "Vinos y Gourmet"
    Then se muestra la página de Vinos y Gourmet

  @TC-006
  Scenario: Validar los productos de la categoría
    When navega a la categoría "Vinos y Gourmet"
    Then se visualiza el encabezado "Vinos y Gourmet"

  @TC-007
  Scenario: Filtrar precio de menor a mayor
    When busca el producto "tenis"
    And abre el filtro de precios
    And selecciona un rango de precio
    Then se muestran productos filtrados por precio

  @TC-008
  Scenario: Filtrar por un rango de precio específico
    When busca el producto "tenis"
    And abre el filtro de precios
    And ingresa un precio mínimo de "500" y un precio máximo de "2000"
    Then se muestran productos dentro del rango de precio

  @TC-009
  Scenario: Validar que los productos mostrados estén dentro del rango
    When busca el producto "tenis"
    And abre el filtro de precios
    And ingresa un precio mínimo de "500" y un precio máximo de "2000"
    Then todos los productos mostrados tienen precio entre "500" y "2000"

  @TC-010
  Scenario: Seleccionar una marca
    When busca el producto "consola"
    And abre el filtro de marcas
    And selecciona la marca "PS5"
    Then se muestran productos filtrados por la marca seleccionada

  @TC-011
  Scenario: Seleccionar múltiples marcas
    When busca el producto "consola"
    And abre el filtro de marcas
    And selecciona las marcas "PS5" y "PS4"
    Then se muestran productos filtrados por las marcas seleccionadas

  @TC-012
  Scenario: Deseleccionar una marca
    When busca el producto "consola"
    And abre el filtro de marcas
    And selecciona la marca "PS5"
    And deselecciona la marca "PS5"
    Then se muestran productos filtrados por la marca seleccionada

  @TC-013
  Scenario: Filtrar por talla
    When busca el producto "playera"
    And abre el filtro de talla
    And selecciona la talla "M"
    Then se muestran productos filtrados por la talla seleccionada

  @TC-014
  Scenario: Filtrar por color
    When busca el producto "playera"
    And abre el filtro de color
    And selecciona el color "Negro"
    Then se muestran productos filtrados por el color seleccionado

  @TC-015
  Scenario: Combinar filtros de talla y color
    When busca el producto "playera"
    And abre el filtro de talla
    And selecciona la talla "M"
    And abre el filtro de color
    And selecciona el color "Negro"
    Then se muestran productos filtrados por talla y color

  @TC-016
  Scenario: Ordenar por relevancia
    When busca el producto "tenis"
    And abre las opciones de ordenamiento
    And selecciona el orden "Relevancia"
    Then se muestran los productos ordenados correctamente

  @TC-017
  Scenario: Ordenar por precio de menor a mayor
    When busca el producto "tenis"
    And abre las opciones de ordenamiento
    And selecciona el orden "Precio: menor a mayor"
    Then se muestran los productos ordenados correctamente

  @TC-018
  Scenario: Ordenar por precio de mayor a menor
    When busca el producto "tenis"
    And abre las opciones de ordenamiento
    And selecciona el orden "Precio: mayor a menor"
    Then se muestran los productos ordenados correctamente

  @TC-019
  Scenario: Ordenar por más nuevo
    When busca el producto "tenis"
    And abre las opciones de ordenamiento
    And selecciona el orden "Más nuevo"
    Then se muestran los productos ordenados correctamente

  @TC-020
  Scenario: Abrir el detalle de un producto
    When busca el producto "tenis"
    And selecciona el primer producto de los resultados
    Then se muestra el detalle del producto

  @TC-021
  Scenario: Validar nombre, precio y descripción del producto
    When busca el producto "tenis"
    And selecciona el primer producto de los resultados
    Then se muestra el nombre del producto
    And se muestra el precio del producto
    And se muestra la sección de características del producto

  @TC-022
  Scenario: Ver la galería de imágenes del producto
    When busca el producto "tenis"
    And selecciona el primer producto de los resultados
    Then se muestra la galería de imágenes del producto