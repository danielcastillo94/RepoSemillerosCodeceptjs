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
  And ubica la sección de precios
  And selecciona un rango de precio
  Then se muestran productos filtrados por precio


      @LP008
Scenario: Filtrar productos por rango específico de precio
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ps5"
  And ubica la sección de precios
  And ingresa un precio mínimo de "500" y un precio máximo de "2000"
  Then se muestran productos dentro del rango de precio

   @LP009
Scenario: Validar productos dentro del rango de precio
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ps5"
  And ubica la sección de precios
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
  And ubica la sección de talla
  And selecciona la talla "Mediano"
  Then se muestran productos filtrados por la talla seleccionada

@LP014
Scenario: Filtrar productos por color
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And ubica la sección de color
  And selecciona el color "Negro"
  Then se muestran productos filtrados por el color seleccionado

  @LP015
Scenario: Combinar filtros de talla y color
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "ropa"
  And ubica la sección de talla
  And selecciona la talla "Mediano"
  And ubica la sección de color
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
  When busca el producto "1177646322"
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
  And selecciona un color disponible del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona un color disponible del producto
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
  And selecciona un color disponible del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona un color disponible del producto
  And selecciona la talla "38B" del producto
  And agrega el producto a la bolsa

  Then el carrito muestra "3" productos


  @LP034
Scenario: Validar subtotal de tres productos en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool

  When busca el producto "Tanga para mujer"
  And selecciona el producto "Tanga para mujer"
  And selecciona la talla "XCH" del producto
  And agrega el producto a la bolsa

  And busca el producto "Panty para mujer"
  And selecciona el producto "Panty para mujer"
  And selecciona un color disponible del producto
  And selecciona la talla "G" del producto
  And agrega el producto a la bolsa

  And busca el producto "Brassiere corrector con copa para mujer"
  And selecciona el producto "Brassiere corrector con copa para mujer"
  And selecciona un color disponible del producto
  And selecciona la talla "38B" del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras

  Then se muestra el subtotal de "3" productos

  # LP035-LP037 requieren sesión autenticada.
  # LP038-LP040 no se encuentran estas funcionalidades
# Liverpool no permite gestionar wishlist/favoritos como invitado.
# Ya no se encuentra la funcionalidad de comparar productos
# Casos pendientes hasta contar con credenciales de prueba.



# LP041 - SKU directo: Liverpool abre el PDP automáticamente; no se selecciona tarjeta de resultados.
@LP041
Scenario: Aumentar cantidad de un producto en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And aumenta la cantidad del producto en el carrito
  Then la cantidad del producto en el carrito es "2"

  
@LP042
Scenario: Disminuir de dos a un producto en el carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And aumenta la cantidad del producto en el carrito
  And disminuye la cantidad del producto en el carrito
  Then la cantidad del producto en el carrito es "1"


@LP043
Scenario: Eliminar el último producto del carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  And remueve el producto del carrito
  And confirma la eliminación del producto
  Then el carrito queda vacío

  # LP044-LP046 - Reutilizan SKU directo y color disponible para evitar datos variables del catálogo.
@LP044
Scenario: Validar subtotal del carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  Then se muestra el subtotal del carrito



@LP045
Scenario: Validar resumen de costos del carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  Then se muestra el descuento aplicado
  And se muestra el costo de envío
  And se indica que el total incluye IVA


@LP046
Scenario: Validar total final del carrito
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  And abre la bolsa de compras
  Then se muestra el total final de la compra

  # ==========================================================
# CASOS DEPENDIENTES DE AUTENTICACIÓN
# ==========================================================

# LP035 - Agregar producto a wishlist
# LP036 - Ver wishlist actualizada
# LP037 - Remover de wishlist
# Requieren sesión autenticada en Liverpool.

# LP047 - Aplicar código promocional válido
# LP048 - Validar descuento aplicado
# LP049 - Remover código promocional
# La funcionalidad no se encuentra disponible para usuario invitado.

# LP050 - Llenar formulario de datos personales
# LP051 - Validar email válido
# LP052 - Validar teléfono válido
# Liverpool redirige al flujo de autenticación/creación de cuenta.

# LP053 - Seleccionar dirección guardada
# LP054 - Agregar dirección nueva
# LP055 - Validar campos de dirección
# Requieren una cuenta autenticada con información de envío.

# Nota técnica:
# Se intentó reutilizar una sesión autenticada mediante Playwright storageState.
# La sesión se guardó correctamente, pero Liverpool no restauró la autenticación
# durante la ejecución con CodeceptJS.
# Por este motivo, los escenarios dependientes de autenticación se documentan
# como no automatizados en el alcance actual.


# LP056-LP058 - Reutilizan SKU directo y selección dinámica de color antes de validar entrega.
@LP056
Scenario: Ver opciones de entrega disponibles
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  Then se muestran las opciones de entrega disponibles



@LP057
Scenario: Seleccionar entrega a domicilio
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And selecciona la opción de entrega "Recibe a domicilio"
  Then la opción de entrega "Recibe a domicilio" queda seleccionada



@LP058
Scenario: Seleccionar Click & Collect
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And selecciona la opción de entrega "Click & Collect"
  Then la opción de entrega "Click & Collect" queda seleccionada

# Nota:
# La UI actual de Liverpool muestra "Recibe a domicilio"
# y "Click & Collect". No se muestra una opción denominada
# "Envío express", por lo que LP058 se adapta a la segunda
# modalidad de entrega realmente disponible.

# ==========================================================
# LP059 - LP061 | Método de pago
# ==========================================================

# LP059 - Seleccionar pago con tarjeta
# LP060 - Validar campos de tarjeta
# LP061 - Ver resumen antes de pagar
#
# Casos no automatizados en el alcance actual.
# El flujo requiere una sesión autenticada de Liverpool.
# Se intentó reutilizar la sesión mediante Playwright storageState,
# pero la autenticación no se restauró durante la ejecución con CodeceptJS.

# ==========================================================
# LP062 - LP064 | Flujo completo E2E
# ==========================================================


# LP062-LP063 - Flujo E2E con SKU directo; la búsqueda termina en el PDP.
@LP062
Scenario: Buscar producto en flujo E2E
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  Then se muestra el nombre del producto



@LP063
Scenario: Agregar producto al carrito en flujo E2E
  Given que el usuario se encuentra en la página principal de Liverpool
  When busca el producto "1177646322"
  And selecciona un color disponible del producto
  And agrega el producto a la bolsa
  Then el carrito muestra "1" producto


# @LP064
# Scenario: Completar checkout hasta confirmación
#
# Caso no automatizado en el alcance actual.
# El checkout completo requiere una sesión autenticada de Liverpool.
# Se intentó reutilizar la sesión mediante Playwright storageState,
# pero la autenticación no se restauró durante la ejecución con CodeceptJS.
# Por este motivo no se automatiza la confirmación final de compra.

# ==========================================================
# LP065 - LP067 | Login y cuenta de usuario
# ==========================================================

# LP065 - Registrar cuenta nueva
# LP066 - Login con cuenta existente
# LP067 - Ver perfil y direcciones guardadas
#
# Casos no automatizados en el alcance actual.
# El flujo depende de autenticación de usuario y validaciones externas.
# Se intentó reutilizar una sesión autenticada mediante Playwright
# storageState, pero Liverpool no restauró la sesión durante la
# ejecución con CodeceptJS.