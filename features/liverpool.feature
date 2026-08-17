Feature: Validación de funcionalidades principales del portal de Liverpool
    Background: Accede a la página principal
    Given El usuario está en la página principal

    @TC001
    Scenario: Búsqueda de producto existente
        When El usuario hace clic en la barra de búsqueda
        And El usuario busca "zapatos" mediante la barra de búsqueda
        Then El usuario puede ver los resultados coincidentes de la búsqueda

    @TC002
    Scenario: Búsqueda de producto inexistente
        When El usuario hace clic en la barra de búsqueda
        And El usuario busca "maneki" mediante la barra de búsqueda
        Then El usuario puede ver resultados que no coinciden con la búsqueda inicial

    @TC003
    Scenario: Validar resultados mostrados
        Given El usuario está en la página de resultados de búsqueda
        When El usuario puede visualizar los productos que coinciden con la búsqueda
        Then El usuario puede ver imágenes, nombre y precio de los productos

    @TC004
    Scenario: Navegación por el menú de Categorías
        When El usuario hace clic en el menú de "Categorías"
        Then El usuario puede visualizar las diferentes categorías de productos disponibles en el portal

    @TC005
    Scenario: Acceder a una subcategoría específica
        Given El usuario está en el menú de "Categorías"
        When El usuario selecciona la subcategoría "Electrónica"
        Then El usuario puede ver una página con los tipos de productos relacionados a la subcategoría seleccionada

    @TC006
    Scenario: Validar productos de la subcategoría seleccionada
        Given El usuario está en la página de la subcategoría "Electrónica"
        When El usuario selecciona el tipo de producto "Pantallas"
        Then El usuario puede ver resultados del tipo de producto seleccionado, con imágenes, nombre y precio de los artículos

    @TC007
    Scenario: Filtrar precio de menor a mayor
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario visualiza el menú desplegable "Ordenar por:" y selecciona la opción "Menor precio"
        Then El usuario puede ver los productos ordenados por precio de menor a mayor

    @TC008
    Scenario: Filtrar por rango específico
        Given El usuario está en la página de resultados de "Pantallas"
        When Busca la opción de "Precios" e introduce un rango de precios específico en los campos correspondientes
        Then El usuario puede ver los productos filtrados por el rango de precio seleccionado

    @TC009
    Scenario: Validar que solo muestre productos en rango de precio seleccionado
        Given El usuario está en la página de resultados de "Pantallas" filtrado por rango de precio
        When El usuario visualiza los productos mostrados en la página
        Then El usuario puede verificar que todos los productos mostrados están dentro del rango de precio seleccionado

    @TC010
    Scenario: Validar selección de producto por marca
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona una marca específica en el menú de filtros
        Then El usuario puede ver los productos filtrados por la marca seleccionada
    
    @TC011
    Scenario: Validar selección múltiple de marcas
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona varias marcas específicas en el menú de filtros
        Then El usuario puede ver los productos filtrados por marcas seleccionadas

    @TC012
    Scenario: Deseleccionar una marca previamente seleccionada
        Given El usuario está en la página de resultados de "Pantallas" filtrados por marcas
        When El usuario deselecciona una marca específica anteriormente elegida
        Then El usuario puede ver los productos filtrados de las marcas restantes seleccionadas

    @TC013
    Scenario: Filtrar por talla/tamaño del producto
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona un tamaño específico
        Then El usuario puede ver los productos filtrados por el tamaño seleccionado

    @TC014
    Scenario: Filtrar por color del producto
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona un color específico
        Then El usuario puede ver los productos filtrados por el color seleccionado

    @TC015
    Scenario: Combinar filtros por talla/tamaño y color del producto
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona un tamaño y un color específico
        Then El usuario puede ver los productos filtrados por el tamaño y color seleccionados

    @TC016
    Scenario: Ordenar productos por relevancia
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona la opción "Destacados" del menú desplegable
        Then El usuario puede ver los productos ordenados por relevancia

    @TC017
    Scenario: Ordenar por precio de menor a mayor
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona la opción "Menor precio" del menú desplegable
        Then El usuario puede ver los productos ordenados por precio de menor a mayor

    @TC018
    Scenario: Ordenar por precio de mayor a menor
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona la opción "Mayor precio" del menú desplegable
        Then El usuario puede ver los productos ordenados por precio de mayor a menor

    @TC019
    Scenario: Ordenar productos por más nuevo
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona la opción "Novedades" del menú desplegable
        Then El usuario puede ver los productos ordenados por más nuevo

    @TC020
    Scenario: Abrir detalle de un producto específico
        Given El usuario está en la página de resultados de "Pantallas"
        When El usuario selecciona el producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        Then El usuario visualiza la página de detalle del producto seleccionado

    @TC021
    Scenario: Validar nombre, precio y descripción
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When El usuario visualiza el nombre y precio del producto
        Then El usuario puede encontrar y ver la descripción detallada y especificaciones del producto

    @TC022
    Scenario: Visualizar galería de imágenes del producto
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When El usuario visualiza la galería de imágenes del producto
        Then El usuario puede seleccionar y ver cada imagen en un tamaño más grande y con la opción de navegar entre las demás imágenes del producto

    @TC023
    Scenario: Validar stock disponible del producto
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When Consulta las opciones de disponibilidad y envío
        Then El sistema debe indicar que el producto está disponible para "Recibe a domicilio"
        And También debe habilitar la opción de "Recoge en tienda"
        And El botón de "Comprar ahora" y "Agregar a mi bolsa" deben estar activos

    @TC024
    Scenario: Verificar tiendas cercanas con stock disponible
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When El usuario selecciona la opción de "Ver disponibilidad en tienda"
        And Elige "CDMX/Zona Metropolitana"
        Then El usuario visualiza un listado de las tiendas de la opción seleccionada con stock disponible

    @TC025
    Scenario: Validar código de producto
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When El usuario consulta la información general del artículo
        Then La página debe mostrar el código del producto arriba de la marca del producto

    @TC026
    Scenario: Visualizar reseñas del producto
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When Se desplaza hasta la sección de "Opiniones del artículo"
        Then El usuario puede consultar todas las reseñas de otros compradores del producto

    @TC027
    Scenario: Filtrar por calificaciones del producto
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When Se desplaza hasta la sección de "Opiniones del artículo"
        And En el menú desplegable selecciona la opción de "Menor calificación"
        Then El usuario puede visualizar las opiniones de otros usuarios filtradas por "Menor calificación"

    @TC028
    Scenario: Visualizar fotos en las reseñas del producto
        Given El usuario está en la página de detalle del producto "Apple Watch SE 3 GPS"
        When Se desplaza hasta la sección de "Opiniones del artículo"
        Then El usuario puede visualizar todas las fotos tanto en la parte superior de las reseñas como en las reseñas individuales de otros usuarios

    @TC029
    Scenario: Agregar 1 artículo al carrito de compras
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When Elige la opción de "Agregar a mi bolsa"
        Then El sistema debe añadir el producto a la bolsa de compras

    @TC030
    Scenario: Validar cantidad en el carrito
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When El usuario visualiza un ícono de bolsa de compra con un número redondeado, debajo del menú de navegación
        Then El usuario hace clic en el ícono y consulta en una nueva pantalla los artículos agregados a la Bolsa de compras

    @TC031
    Scenario: Visualizar confirmación de producto agregado al carrito
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        When Elige la opción de "Agregar a mi bolsa"
        Then El sistema debe mostrar un aviso emergente en color verde confirmando que el artículo fue agregado a la bolsa

    @TC032
    Scenario: Agregar 3 o más productos al carrito
        When El usuario hace clic en la barra de búsqueda
        And El usuario busca y agrega "Pantalla LG Smart TV Crystal UHD de 43 pulgadas"
        And El usuario busca y agrega "Google Smartwatch Pixel Watch 4"
        And El usuario busca y agrega "Consola Nintendo Switch 2"
        Then La bolsa debe contener 3 o más artículos diferentes añadidos

    @TC033
    Scenario: Validar cantidad total de productos en el carrito
        When El usuario accede al ícono de "Mi bolsa"
        Then Puede consultar un listado con los artículos que fueron añadidos a la bolsa con anterioridad

    @TC034
    Scenario: Visualizar subtotal actualizado
        Given El usuario está en la página de "Mi bolsa"
        When Puede consultar los productos que fueron añadidos a la bolsa
        Then También visualiza un recuadro con el costo y subtotal del o los productos añadidos

    @TC035
    Scenario: Agregar producto a Wishlist
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        And Ya debe haber iniciado sesión en su cuenta
        When Selecciona la opción de agregar artículo a deseados
        Then El sistema debe guardar el producto en su lista de deseos
        And El icono de favoritos debe cambiar visualmente para indicar que fue guardado

    @TC036
    Scenario: Visualizar Wishlist actualizada
        Given El usuario está en la página de detalle del producto "HISENSE Pantalla Smart TV LED de 32 pulgadas"
        And Ya debe haber iniciado sesión en su cuenta
        When Selecciona el ícono de Wishlist
        Then El usuario debe ver una nueva página con la lista de los productos agregados a la Wishlist de su cuenta
    
    @TC037
    Scenario: Remover artículo de Wishlist
        Given El usuario está en la sección de "Mi Wishlist" de su cuenta
        When Puede visualizar la lista de los artículos guardados
        Then El usuario selecciona la opción para remover un artículo de la lista
        And El producto ya no debe ser visible en pantalla

    @TC041
    Scenario: Aumentar la cantidad de un artículo en el carrito
        Given El usuario está en la página de "Mi bolsa"
        When Puede consultar los productos que fueron añadidos a la bolsa
        Then Puede manipular aumentando la cantidad de un producto de su lista con los botones
        And Se actualiza la cantidad del producto seleccionado y el subtotal

    @TC042
    Scenario: Disminuir la cantidad de un artículo en el carrito
        Given El usuario está en la página de "Mi bolsa"
        When Puede consultar los productos que fueron añadidos a la bolsa
        Then Puede manipular disminuyendo la cantidad de un producto de su lista con los botones
        And Se actualiza la cantidad del producto seleccionado y el subtotal

    @TC043
    Scenario: Remover producto del carrito
        Given El usuario está en la página de "Mi bolsa"
        When Puede consultar los productos que fueron añadidos a la bolsa
        Then Elige un artículo y selecciona la opción para eliminarlo de la bolsa
        And El producto ya no debe ser visible en pantalla

    @TC044
    Scenario: Validar subtotal correcto del producto
        Given El usuario está en la página de "Mi bolsa"
        When Puede consultar los productos que fueron añadidos a la bolsa
        Then El usuario verifica que el valor del "Subtotal" de la compra mostrado en el bloque coincida con el del producto en la lista

    @TC045
    Scenario: Validar cálculo de impuestos
        Given El usuario tiene la "Consola Nintendo Switch 2" en su bolsa de compras
        And El subtotal del producto es de "$13,599.00" con un descuento de "$3,399.75"
        When El usuario revisa el bloque de resumen de su orden
        Then El sistema debe calcular el monto final a pagar correctamente
        And Debe indicar explícitamente que el monto total incluye el IVA

    @TC046
    Scenario: Validar total final del producto
        Given El usuario tiene la "Consola Nintendo Switch 2" en su bolsa de compras
        And El subtotal de la orden es de "$13,599.00"
        And Se ha aplicado un descuento de "$3,399.75"
        And El costo de envío es "Gratis"
        When Revisa el bloque de resumen de la compra
        Then El sistema debe mostrar que el total a pagar es exactamente "$10,199.25"

    @TC047
    Scenario: Aplicar código promocional válido
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Ingresa un código promocional válido en la sección de Cupones
        Then El sistema debe validar y aceptar el código

    @TC048
    Scenario: Validar descuento aplicado
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Selecciona la opción de "25% DE DESCUENTO - PAGO UNICO." en el menú de "Elige una promoción"
        Then En el bloque de "Resumen de compra" se debe ver aplicado el descuento explícitamente

    @TC049
    Scenario: Remover código promocional
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        And Tiene un código promocional aplicado que descuenta "$500.00" en el apartado de "Cupones"
        When El usuario elimina el código promocional de la sección de cupones
        Then El sistema debe remover el descuento asociado a la orden y recalcular el total

    @TC053
    Scenario: Seleccionar dirección guardada
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Selecciona la opción de "Cambiar" en la sección de "Entrega"
        Then El usuario selecciona su domicilio previamente generado en el sistema

    @TC054
    Scenario: Agregar nueva dirección
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Selecciona la opción de "Cambiar" en la sección de "Entrega"
        Then Elige la opción de "Agregar dirección" que muestra un formulario para ingresar nuevos datos

    @TC055
    Scenario: Validar campos de dirección
        Given El usuario se encuentra en el formulario lateral de "Agregar dirección de entrega"
        When Deja en blanco los campos obligatorios remarcados con un asterisco
        And Hace clic en el botón "Usar esta dirección"
        Then El sistema debe impedir avanzar y muestra los campos obligatorios destacados en rojo

    @TC056
    Scenario: Visualizar opciones de envío disponibles
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Selecciona la opción de "Cambiar" en la sección de "Entrega"
        Then Debe visualizar en el menú lateral de "Selecciona una dirección de entrega" las opciones de "A tu domicilio" y "Click and Collect"

    @TC059
    Scenario: Seleccionar pago con tarjeta
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When En la sección de "Métodos de pago" selecciona la opción de "Tarjetas de crédito/débito"
        Then Se abre un menú lateral donde se puede agregar una nueva tarjeta

    @TC060
    Scenario: Validar campos de tarjeta
        Given El usuario se encuentra en el formulario lateral de "Agregar tarjeta"
        When Debe llenar los campos obligatorios señalados con asterisco
        Then El sistema no habilita continuar con el proceso de registro hasta que los campos obligatorios sean llenados correctamente

    @TC061
    Scenario: Visualizar resumen de compra antes de pagar
        Given El usuario se encuentra en la pantalla de "Confirma tu compra"
        When Puede ver la información completa de su compra
        Then Visualiza la sección de "Resumen de compra" con los costos, descuentos y monto total a pagar

    @TC065
    Scenario: Registar cuenta nueva
        When Selecciona la opción de "Iniciar sesión"
        And Elige la opción de "Crear cuenta"
        Then Llena los campos requeridos del formulario de registro

    @TC066
    Scenario: Inicio de sesión con cuenta existente
        Given El usuario está en la página de Login
        When Ingresa sus credenciales de acceso
        Then Puede acceder a su cuenta y ver recomendaciones personalizadas

    @TC067
    Scenario: Visualizar perfil de usuario y direcciones registradas
        And Ya está previamente logeado con su cuenta
        When Hace clic en el nombre de su perfil
        Then Accede a su perfil y puede ver datos sobre su cuenta, como sus compras, direcciones registradas, etc