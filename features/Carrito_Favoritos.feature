@carrito_favoritos_De_Liverpool
Feature: Correcto funcionamiento de el carrito
    # Agregar al Carrito - Un Producto

    @TC0029
    Scenario: Agregar un producto al carrito
        Given El usuario se encuentra en la página de detalle de un producto
        When El usuario selecciona el producto y hace clic en "Agregar al carrito"
        When El usuario confirma si quiere o no el seguro para su producto
        Then El usuario valida que el GalaxyS25 se haya agregado correctamente al carrito

    @TC0030
    Scenario: Validar cantidad de un producto en el carrito
        Given El usuario se encuentra en la página de detalle de un producto
        When El usuario selecciona el producto y hace clic en "Agregar al carrito"
        When El usuario confirma si quiere o no el seguro para su producto
        When El usuario va a la página de carrito
        When  El usuario se encuentra en la página del carrito
        Then El usuario valida que la cantidad de "1" producto en el carrito sea correcta y corresponda a los productos agregados

    # Agregar al Carrito - Múltiples Productos

    @TC0031
    Scenario: Agregar tres productos al carrito
        Given El usuario se encuentra en la página de celulares
        When El usuario agrega los productos Apple, Motorola y Samsung al carrito
        Then El usuario valida que los productos se hayan agregado correctamente al carrito
        And  El usuario valida que la cantidad de "3" productos en el carrito sea correcta y corresponda a los productos agregados
        And  El usuario valida que el subtotal del carrito se haya actualizado correctamente según los productos agregados

    # Agregar a Favoritos

    @TC0032_Favoritos
    Scenario: Agregar, validar y remover un producto de favoritos
        Given El usuario ha iniciado sesión en Liverpool
        And El usuario se encuentra en la página de detalle de un producto
        When El usuario selecciona el icono de favoritos
        Then El usuario valida que el producto se haya agregado a su lista de favoritos
        When El usuario se navega a la página de favoritos
        Then El usuario valida que la cantidad de productos en favoritos sea "1"
        When El usuario selecciona un producto y hace clic en "Remover de favoritos"
        Then El usuario valida que el producto se haya removido correctamente de favoritos

    # Comparar Productos se deja pendiente----------------------------------------

    # Carrito - Cantidad y Cambios

    @TC0037
    Scenario: Aumentar cantidad en carrito.
        Given El usuario se encuentra en la página del carrito
        When El usuario aumenta la cantidad de un producto
        Then El usuario valida que la cantidad del producto se haya actualizado correctamente en el carrito

    @TC0038
    Scenario: Disminuir cantidad en carrito
        Given El usuario se encuentra en la página del carrito
        When El usuario disminuye la cantidad de un producto
        Then El usuario valida que la cantidad del producto se haya actualizado correctamente en el carrito

    @TC0039
    Scenario: Remover producto del carrito
        Given El usuario se encuentra en la página del carrito
        When El usuario selecciona un producto y hace clic en "Remover del carrito"
        Then El usuario valida que el producto se haya removido correctamente del carrito

    # Carrito - Totales e Impuestos

    @TC0040
    Scenario: Validar subtotal correcto
        Given El usuario se encuentra en la página del carrito
        Then El usuario valida que el subtotal del carrito sea correcto y corresponda a los productos agregados

    @TC0041
    Scenario: Validar cálculo del impuesto
        Given El usuario se encuentra en la página del carrito
        Then El usuario valida que los impuestos del carrito sean correctos y correspondan a los productos agregados

    @TC0042
    Scenario: Validar total del carrito
        Given El usuario se encuentra en la página del carrito
        Then El usuario valida que el total del carrito sea correcto y corresponda a los productos agregados, incluyendo impuestos y descuentos aplicables