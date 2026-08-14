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

  @LP026
Scenario: Visualizar sección de opiniones del producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga De Poliamida Para Mujer"
  And selecciona el producto "Tanga De Poliamida Para Mujer"
  Then se muestra la sección de opiniones del artículo

  @LP027
Scenario: Validar calificaciones del producto
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  Then se muestra la distribución de calificaciones por estrellas

  # LP028 pendiente/no aplicable:
# No se encontraron reseñas con imágenes disponibles en los productos revisados.
# Se documenta la limitación de datos de prueba en la UI actual.

@LP029
Scenario: Agregar un producto al carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa
  Then el producto se agrega correctamente a la bolsa

  @LP030
Scenario: Validar cantidad en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa
  Then el carrito muestra "1" producto

  @LP031
Scenario: Confirmar producto agregado a la bolsa
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa
  Then se confirma que el producto fue agregado a la bolsa

@LP032
Scenario: Agregar tres productos diferentes a la bolsa
  Given que el usuario se encuentra en la página principal de Liverpool

  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa

  And busca el producto "Panty para mujer"
  And selecciona el producto "Panty para mujer"
  And selecciona el color "Multicolor" del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona el color "Negro" del producto
  And selecciona la talla "38B" del producto
  And agrega el producto a la bolsa

  Then la bolsa contiene productos agregados

  @LP033
Scenario: Validar cantidad total de productos en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool

  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa

  And busca el producto "Panty para mujer"
  And selecciona el producto "Panty para mujer"
  And selecciona el color "Multicolor" del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona el color "Negro" del producto
  And selecciona la talla "38B" del producto
  And agrega el producto a la bolsa

  Then el carrito muestra "3" productos

  @LP034
Scenario: Validar cantidad total de productos en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool

  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa

  And busca el producto "Panty para mujer"
  And selecciona el producto "Panty para mujer"
  And selecciona el color "Negro" del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona el color "Negro" del producto
  And selecciona la talla "38B" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras

  Then se muestra el subtotal de "3" productos

  # LP035-LP037 requieren sesión autenticada.
  # LP038-LP040 no se encuentran estas funcionalidades
# Liverpool no permite gestionar wishlist/favoritos como invitado.
# Ya no se encuentra la funcionalidad de comparar productos
# Casos pendientes hasta contar con credenciales de prueba.


@LP041
Scenario: Aumentar cantidad de un producto en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Nintendo Switch"
  And selecciona el producto "Nintendo Switch"
  And selecciona el color "Negro" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And aumenta la cantidad del producto en el carrito
  Then la cantidad del producto en el carrito es "2"


@LP042
Scenario: Disminuir cantidad de un producto en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Nintendo Switch"
  And selecciona el producto "Nintendo Switch"
  And selecciona el color "Negro" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And aumenta la cantidad del producto en el carrito
  And disminuye la cantidad del producto en el carrito
  Then la cantidad del producto en el carrito es "1"

  @LP042
Scenario: Disminuir de dos a un producto en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Nintendo Switch"
  And selecciona el producto "Nintendo Switch"
  And selecciona el color "Negro" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And aumenta la cantidad del producto en el carrito
  And disminuye la cantidad del producto en el carrito
  Then la cantidad del producto en el carrito es "1"


@LP043
Scenario: Eliminar el último producto del carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "Nintendo Switch"
  And selecciona el producto "Nintendo Switch"
  And selecciona el color "Negro" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And remueve el producto del carrito
  And confirma la eliminación del producto
  Then el carrito queda vacío