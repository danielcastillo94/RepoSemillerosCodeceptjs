Feature: Búsqueda de productos en Liverpool

  @LP001
  Scenario: Buscar un producto existente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then se muestran resultados relacionados con la búsqueda

  @LP002
  Scenario: Buscar un producto inexistente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps51"
    Then no se muestran productos para "ps51"

  @LP003
  Scenario: Validar resultados mostrados
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then los resultados muestran productos relacionados con "Ps5"

    @LP004
Scenario: Expandir categoría principal
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When abre el menú de categorías
  Then puede visualizar la categoría "Vinos y Gourmet"

@LP005
Scenario: Acceder a una categoría
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When navega a la categoría "Vinos y Gourmet"
  Then se muestra la página de Vinos y Gourmet

@LP006
Scenario: Validar contenido de la categoría
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When navega a la categoría "Vinos y Gourmet"
  Then se visualiza el encabezado "Vinos y Gourmet"

  @LP007
  Scenario: Filtrar productos por precio
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    And abre el filtro de precios
    And selecciona un rango de precio
    Then se muestran productos filtrados por precio

      @LP008
  Scenario: Filtrar productos por rango específico de precio
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    And abre el filtro de precios
    And ingresa un precio mínimo de "500" y un precio máximo de "2000"
    Then se muestran productos dentro del rango de precio

    @LP009
Scenario: Validar productos dentro del rango de precio
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ps5"
  And abre el filtro de precios
  And ingresa un precio mínimo de "500" y un precio máximo de "2000"
  Then todos los productos mostrados tienen precio entre "500" y "2000"

  @LP010
Scenario: Filtrar productos por una marca
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "consolas"
  And busca la marca "PS"
  And selecciona la marca "PS5"
  Then se muestran productos filtrados por la marca seleccionada

  @LP011
Scenario: Filtrar productos por múltiples marcas
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "consolas"
  And busca la marca "PS"
  And selecciona las marcas "PS5" y "PS4"
  Then se muestran productos filtrados por las marcas seleccionadas

 @LP012
Scenario: Deseleccionar una marca
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "consolas"
  And busca la marca "PS"
  And selecciona la marca "PS5"
  And busca la marca "PS"
  And selecciona la marca "PS4"
  And busca la marca "PS"
  And deselecciona la marca "PS5"
  Then se muestran productos filtrados por la marca seleccionada

@LP013
Scenario: Filtrar productos por talla
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre el filtro de talla
  And selecciona la talla "Mediano"
  Then se muestran productos filtrados por la talla seleccionada

@LP014
Scenario: Filtrar productos por color
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre el filtro de color
  And selecciona el color "Negro"
  Then se muestran productos filtrados por el color seleccionado

  @LP015
Scenario: Combinar filtros de talla y color
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre el filtro de talla
  And selecciona la talla "Mediano"
  And abre el filtro de color
  And selecciona el color "Negro"
  Then se muestran productos filtrados por talla y color

  @LP016
Scenario: Ordenar productos por relevancia
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre las opciones de ordenamiento
  And selecciona el orden "Destacados"
  Then se muestran los productos ordenados correctamente

  @LP017
Scenario: Ordenar productos por precio de menor a mayor
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre las opciones de ordenamiento
  And selecciona el orden "Menor precio"
  Then se muestran los productos ordenados correctamente

  @LP018
Scenario: Ordenar productos por precio de mayor a menor
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre las opciones de ordenamiento
  And selecciona el orden "Mayor precio"
  Then se muestran los productos ordenados correctamente

@LP019
Scenario: Ordenar productos por más nuevo
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And abre las opciones de ordenamiento
  And selecciona el orden "Novedades"
  Then se muestran los productos ordenados correctamente

  @LP020
Scenario: Abrir detalle de un producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And selecciona el primer producto de los resultados
  Then se muestra el detalle del producto

  @LP021
Scenario: Validar información básica del producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And selecciona el primer producto de los resultados
  Then se muestra el nombre del producto
  And se muestra el precio del producto
  And se muestra la sección de características del producto

  @LP022
Scenario: Visualizar galería de imágenes del producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga De Poliamida Para Mujer"
  And selecciona el producto "Tanga De Poliamida Para Mujer"
  Then se muestra la galería de imágenes del producto

  @LP023
Scenario: Validar disponibilidad de stock del producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga De Poliamida Para Mujer"
  And selecciona el producto "Tanga De Poliamida Para Mujer"
  Then el producto muestra disponibilidad para seleccionar cantidad

  @LP024
Scenario: Consultar disponibilidad en tienda
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga De Poliamida Para Mujer"
  And selecciona el producto "Tanga De Poliamida Para Mujer"
  And consulta la disponibilidad en tienda
  Then se muestra la opción para buscar disponibilidad en tiendas

  @LP025
Scenario: Validar SKU y código de producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga De Poliamida Para Mujer"
  And selecciona el producto "Tanga De Poliamida Para Mujer"
  Then se muestra el código de producto