    @Funcionalidades_De_Liverpool.

    Scenario: Localización de la página de liverpool.
        Given El usuario ingresa a la página de Liverpool.

    #Búsqueda de Productos

    @TC001
    Scenario: Buscar un producto existente en Liverpool.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        And El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.
        Then El usuario valida que se muestren resultados para la búsqueda.

    @TC002
    Scenario: Buscar un producto inexistente en Liverpool.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        And El usuario ingresa un producto inexistente en la barra de búsqueda.
        Then El usuario valida que no se muestren resultados para la búsqueda.

    @TC003
    Scenario: Validar resultados de búsqueda.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        And El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.
        Then El usuario valida que los resultados mostrados correspondan a la búsqueda.

    # Navegación por Categorías - Ropa


    @TC004
    Scenario: Expandir categorías principales.
        Given El usuario se encuentra en la página de Liverpool.
        When El usuario localiza el menú de categorías.
        And El usuario selecciona una categoría principal.
        Then El usuario valida que la categoría seleccionada se despliegue correctamente.

    @TC005
    Scenario: Expandir subcategorías.
        Given El usuario se encuentra en la página de Liverpool.
        When El usuario localiza el menú de categorías.
        And El usuario selecciona una categoría principal.
        Then El usuario valida que se desplieguen las subcategorías correspondientes.

    # Filtros por Precio - Ropa

    @TC006
    Scenario: Validar productos de una categoría.
        Given El usuario se encuentra en el menú de categorías.
        When El usuario selecciona una categoría principal.
        Then El usuario valida que los productos mostrados correspondan a la categoría seleccionada.

    @TC007
    Scenario: Ordenar productos de menor a mayor precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario ordena los productos de menor a mayor precio.
        Then El usuario valida que los productos se muestren en orden ascendente de precio.

    @TC008
    Scenario: Seleccionar un rango específico de precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.
        Then El usuario valida que el filtro de precio se haya aplicado correctamente.

    @TC009
    Scenario: Validar productos dentro de un rango de precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.
        Then El usuario valida que los productos mostrados correspondan al rango de precio seleccionado.

    # Filtros por Marca - Calzado

    @TC010
    Scenario: Seleccionar una marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona una marca específica como "Adidas".
        Then El usuario valida que los productos mostrados correspondan a la marca seleccionada.

    @TC011
    Scenario: Seleccionar múltiples marcas.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona las marcas "Adidas" y "Nike".
        Then El usuario valida que los productos mostrados correspondan a las marcas seleccionadas.

    @TC012
    Scenario: Deseleccionar una marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la marca "Adidas".
        And El usuario deselecciona la marca "Adidas".
        Then El usuario valida que los productos mostrados ya no estén filtrados por la marca deseleccionada.

    # Filtros por Talla y Color - Ropa

    @TC013
    Scenario: Filtrar por talla específica.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona una talla específica como "M".
        Then El usuario valida que los productos mostrados correspondan a la talla seleccionada.

    @TC014
    Scenario: Filtrar por color.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un color específico como "Rojo".
        Then El usuario valida que los productos mostrados correspondan al color seleccionado.

    @TC015
    Scenario: Combinar filtros de talla y color.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona una talla específica como "M".
        And El usuario selecciona un color específico como "Rojo".
        Then El usuario valida que los productos mostrados correspondan a la talla y al color seleccionados.

    # Ordenamiento de Resultados

    @TC016
    Scenario: Ordenar por relevancia.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por relevancia.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC017
    Scenario: Ordenar resultados por precio de menor a mayor.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por precio de menor a mayor.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC018
    Scenario: Ordenar resultados por precio de mayor a menor.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por precio de mayor a menor.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC019
    Scenario: Ordenar por productos más nuevos.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por productos más nuevos.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    # Detalle de Producto - Básico

    @TC020
    Scenario: Abrir detalle del producto.
        Given El usuario se encuentra en una página de resultados de productos.
        When El usuario selecciona un producto.
        Then El usuario valida que se muestre la página de detalle del producto.

    @TC021
    Scenario: Validar nombre, precio y descripción.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que el nombre, precio y descripción del producto sean correctos y correspondan al producto seleccionado.

    @TC022
    Scenario: Ver la galería de imágenes.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que las imágenes sean correctas y correspondan al producto seleccionado.

    # Detalle de Producto - Stock y Disponibilidad

    @TC023
    Scenario: Validar disponibilidad de stock.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que la información de stock y disponibilidad sea correcta y corresponda al producto seleccionado.

    @TC024
    Scenario: Ver tiendas cercanas con stock disponible.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario consulta la disponibilidad del producto en tiendas cercanas.
        Then El usuario valida que las tiendas cercanas muestren el producto con stock disponible.

    @TC025
    Scenario: Validar SKU y código de producto.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que el SKU y el código de producto sean correctos y correspondan al producto seleccionado.

    # Detalle de Producto - Reseñas

    @TC026
    Scenario: Ver reseñas de un producto.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que las reseñas del producto sean correctas y correspondan al producto seleccionado.

    @TC027
    Scenario: Filtrar por calificación de estrellas.
        Given El usuario se encuentra en la página de reseñas de un producto.
        When El usuario selecciona una calificación de estrellas.
        Then El usuario valida que se muestren las reseñas correspondientes a la calificación seleccionada.

    @TC028
    Scenario: Ver fotos en reseñas.
        Given El usuario se encuentra en la página de reseñas de un producto.
        When El usuario consulta las reseñas que contienen fotografías.
        Then El usuario valida que las fotografías correspondan al producto seleccionado.

    # Agregar al Carrito - Un Producto

    @TC029
    Scenario: Agregar un producto al carrito.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el producto y hace clic en "Agregar al carrito".
        Then El usuario valida que el producto se haya agregado correctamente al carrito.

    @TC030
    Scenario: Validar cantidad de productos en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de productos en el carrito sea correcta y corresponda a los productos agregados.

    @TC031
    Scenario: Ver confirmación de agregado al carrito.
        Given El usuario ha agregado un producto al carrito.
        When El usuario accede al carrito.
        Then El usuario valida que el producto agregado se muestre correctamente en el carrito.

    # Agregar al Carrito - Múltiples Productos

    @TC032
    Scenario: Agregar más de tres productos al carrito.
        Given El usuario se encuentra en la página de detalle de varios productos.
        When El usuario agrega más de tres productos al carrito.
        Then El usuario valida que los productos se hayan agregado correctamente al carrito.

    @TC033
    Scenario: Validar cantidad de productos en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de productos en el carrito sea correcta y corresponda a los productos agregados.

    @TC034
    Scenario: Ver subtotal actualizado en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que el subtotal del carrito se haya actualizado correctamente según los productos agregados.

    # Agregar a Favoritos

    @TC035
    Scenario: Agregar producto a favoritos.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el icono de favoritos.
        Then El usuario valida que el producto se haya agregado a su lista de favoritos.

    @TC036
    Scenario: Validar cantidad de productos en favoritos.
        Given El usuario se encuentra en la página de favoritos.
        Then El usuario valida que la cantidad de productos en favoritos sea correcta y corresponda a los productos agregados.

    @TC037
    Scenario: Remover producto de favoritos.
        Given El usuario se encuentra en la página de favoritos.
        When El usuario selecciona un producto y hace clic en "Remover de favoritos".
        Then El usuario valida que el producto se haya removido correctamente de favoritos.

    # Comparar Productos se deja pendiente----------------------------------------

    # Carrito - Cantidad y Cambios

    @TC041
    Scenario: Aumentar cantidad en carrito.
        Given El usuario se encuentra en la página del carrito.
        When El usuario aumenta la cantidad de un producto.
        Then El usuario valida que la cantidad del producto se haya actualizado correctamente en el carrito.

    @TC042
    Scenario: Disminuir cantidad en carrito.
        Given El usuario se encuentra en la página del carrito.
        When El usuario disminuye la cantidad de un producto.
        Then El usuario valida que la cantidad del producto se haya actualizado correctamente en el carrito.

    @TC043
    Scenario: Remover producto del carrito.
        Given El usuario se encuentra en la página del carrito.
        When El usuario selecciona un producto y hace clic en "Remover del carrito".
        Then El usuario valida que el producto se haya removido correctamente del carrito.

    # Carrito - Totales e Impuestos

    @TC044
    Scenario: Validar subtotal correcto.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que el subtotal del carrito sea correcto y corresponda a los productos agregados.

    @TC045
    Scenario: Validar cálculo del impuesto.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que los impuestos del carrito sean correctos y correspondan a los productos agregados.

    @TC046
    Scenario: Validar total del carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que el total del carrito sea correcto y corresponda a los productos agregados, incluyendo impuestos y descuentos aplicables.

    # Código Promocional

    @TC047
    Scenario: Aplicar código promocional válido.
        Given El usuario se encuentra en la página del carrito.
        When El usuario ingresa un código promocional válido.
        And El usuario hace clic en "Aplicar".
        Then El usuario valida que el descuento se haya aplicado correctamente.

    @TC048
    Scenario: Validar código promocional inválido.
        Given El usuario se encuentra en la página del carrito.
        When El usuario ingresa un código promocional inválido.
        And El usuario hace clic en "Aplicar".
        Then El usuario valida que se muestre un mensaje de error indicando que el código no es válido.

    @TC049
    Scenario: Remover código promocional aplicado.
        Given El usuario se encuentra en la página del carrito.
        When El usuario aplica un código promocional válido.
        And El usuario hace clic en "Remover".
        Then El usuario valida que el descuento aplicado se haya eliminado correctamente y que el total del carrito se haya actualizado.

    # Checkout - Datos Personales

    @TC050
    Scenario: Llenar formulario de datos personales.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa sus datos personales como nombre, teléfono y correo electrónico.
        Then El usuario valida que los datos personales se hayan ingresado correctamente.

    @TC051
    Scenario: Validar email.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa un email válido y hace clic en "Continuar".
        Then El usuario valida que el email sea aceptado correctamente.

    @TC052
    Scenario: Validar teléfono.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa un teléfono válido y hace clic en "Continuar".
        Then El usuario valida que el teléfono sea aceptado correctamente.

    # Checkout - Dirección de Envío

    @TC053
    Scenario: Seleccionar dirección guardada.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario selecciona una dirección guardada y hace clic en "Continuar".
        Then El usuario valida que la dirección seleccionada sea correcta.

    @TC054
    Scenario: Agregar nueva dirección.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario ingresa una nueva dirección y hace clic en "Guardar".
        Then El usuario valida que la nueva dirección se haya agregado correctamente.

    @TC055
    Scenario: Validar campos de dirección.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario ingresa información en los campos de dirección.
        Then El usuario valida que los campos de dirección sean aceptados correctamente.

    # Checkout - Método de Envío

    @TC056
    Scenario: Ver opciones de envío disponibles.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario consulta las opciones de envío disponibles.
        Then El usuario valida que se muestren las opciones de envío disponibles.

    @TC057
    Scenario: Seleccionar envío estándar.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario selecciona la opción de envío estándar y hace clic en "Continuar".
        Then El usuario valida que el método de envío seleccionado sea correcto.

    @TC058
    Scenario: Seleccionar envío express.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario selecciona la opción de envío express y hace clic en "Continuar".
        Then El usuario valida que el método de envío seleccionado sea correcto.

    # Checkout - Método de Pago

    @TC059
    Scenario: Seleccionar pago con tarjeta.
        Given El usuario se encuentra en la página de método de pago.
        When El usuario selecciona la opción de pago con tarjeta y hace clic en "Continuar".
        Then El usuario valida que el método de pago seleccionado sea correcto.

    @TC060
    Scenario: Validar campos de tarjeta.
        Given El usuario se encuentra en la página de método de pago.
        When El usuario ingresa la información de su tarjeta y hace clic en "Continuar".
        Then El usuario valida que los campos de tarjeta sean aceptados correctamente.

    @TC061
    Scenario: Ver resumen antes de pagar.
        Given El usuario se encuentra en la página de resumen de pago.
        When El usuario revisa el resumen de su pedido antes de pagar.
        Then El usuario valida que el resumen sea correcto y corresponda a los productos seleccionados, dirección de envío y método de pago.

    # Flujo Completo E2E (Búsqueda → Compra)

    @TC062
    Scenario: Buscar producto.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        And El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.
        Then El usuario valida el resultado de la búsqueda.

    @TC063
    Scenario: Agregar producto al carrito.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el producto y hace clic en "Agregar al carrito".
        Then El usuario valida que el producto se haya agregado correctamente al carrito.

    @TC064
    Scenario: Completar checkout hasta la confirmación.
        Given El usuario se encuentra en la página del carrito.
        When El usuario hace clic en "Continuar con el checkout".
        And El usuario ingresa sus datos personales, dirección de envío, método de envío y método de pago.
        Then El usuario valida que el resumen del pedido sea correcto antes de confirmar la compra.

    # Login y Cuenta de Usuario

    @TC065
    Scenario: Registrar nueva cuenta.
        Given El usuario se encuentra en la página de registro.
        When El usuario ingresa la información requerida para crear una nueva cuenta y hace clic en "Registrarse".
        Then El usuario valida que la cuenta se haya creado correctamente y pueda iniciar sesión.

    @TC066
    Scenario: Iniciar sesión con una cuenta existente.
        Given El usuario se encuentra en la página de inicio de sesión.
        When El usuario ingresa sus credenciales y hace clic en "Iniciar sesión".
        Then El usuario valida que haya iniciado sesión correctamente y pueda acceder a su cuenta.

    @TC067
    Scenario: Ver perfil y direcciones guardadas.
        Given El usuario se encuentra en la página de su perfil.
        Then El usuario valida que pueda ver y editar su información personal y direcciones guardadas.
