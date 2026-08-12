@carrito_favoritos_De_Liverpool
Feature: Correcto funcionamiento de el carrito

    Feature Description

    Scenario: Validar carrito y favoritos de productos en Liverpool.
        Given El usuario se encuentra con un producto específico en la página de Liverpool.

    # Agregar al Carrito - Un Producto

    @TC029
    Scenario: Agregar un producto al carrito.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el producto y hace clic en "Agregar al carrito".
        Then El usuario valida que el producto se haya agregado correctamente al carrito.

    @TC030
    Scenario: Validar cantidad de un producto en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de producto en el carrito sea correcta y corresponda a los productos agregados.

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
    Scenario: Validar cantidad de multiples productos en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de productos en el carrito sea correcta y corresponda a los productos agregados.

    @TC034
    Scenario: Ver subtotal actualizado en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que el subtotal del carrito se haya actualizado correctamente según los productos agregados.

    # Agregar al Carrito - Un Producto

    @TC029
    Scenario: Ingresar mercancia al carrito.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el producto y hace clic en "Agregar al carrito".
        Then El usuario valida que el producto se haya agregado correctamente al carrito.

    @TC030
    Scenario: Validar cantidad de productos en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de productos en el carrito sea correcta y corresponda a los productos agregados.

    @TC031
    Scenario: Visulizar los productos en el carrito.
        Given El usuario ha agregado un producto al carrito.
        When El usuario accede al carrito.
        Then El usuario valida que el producto agregado se muestre correctamente en el carrito.

    # Agregar al Carrito - Múltiples Productos

    @TC032
    Scenario: Almacenar mercancia multiple en el carrito.
        Given El usuario se encuentra en la página de detalle de varios productos.
        When El usuario agrega más de tres productos al carrito.
        Then El usuario valida que los productos se hayan agregado correctamente al carrito.

    @TC033
    Scenario: Validar cantidad de productos en el carrito.
        Given El usuario se encuentra en la página del carrito.
        Then El usuario valida que la cantidad de productos en el carrito sea correcta y corresponda a los productos agregados.

    @TC034
    Scenario: Ver subtotal de los porductos alamacenados en el carrito.
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