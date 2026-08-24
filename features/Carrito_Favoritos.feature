@carrito_favoritos_De_Liverpool
Feature: Correcto funcionamiento de el carrito
    # Agregar al Carrito - Un Producto

    @TC0029
    Scenario: Agregar un producto al carrito
        Given El usuario se encuentra en la página del Samsung Galaxy S16
        When El usuario selecciona el producto y hace clic en "Agregar al carrito"
        When El usuario confirma si quiere o no el seguro para su producto
        Then El usuario valida que el GalaxyS25 se haya agregado correctamente al carrito

    @TC0030
    Scenario: Validar cantidad de un producto en el carrito
        Given El usuario se encuentra en la página de detalle del samsung Galxy S16Ultra
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

    # Agregar a Favoritos Este archivo no lo pude ejecutar ya que tuve problemas.
    #@skip
    #@TC0032_Favoritos
    #Scenario: Agregar, validar y remover un producto de favoritos
    #Given El usuario ha iniciado sesión en Liverpool
    #When El usuario se encuentra en la página de detalle de un producto
    #And El usuario selecciona un producto del listado que es "Apple"
    #And El usuario selecciona el icono de favoritos
    #When El usuario se navega a la página de favoritos
    #Then El usuario valida que el producto se haya agregado a su lista de favoritos
    #Then El usuario valida que la cantidad de productos en favoritos sea "1"
    #When El usuario selecciona un producto y hace clic en "Remover de favoritos"
    #Then El usuario valida que el producto se haya removido correctamente de favoritos

    # Comparar Productos se deja pendiente----------------------------------------

    #Carrito - Cantidad y Cambios
    @TC0033
    Scenario: Aumentar cantidad de un producto en el carrito
        Given El usuario se encuentra en la página de celulares
        And El usuario agrega los productos Apple al carrito
        And El usuario se encuentra en la página del carrito
        When El usuario aumenta la cantidad del producto a "2"
        Then El usuario valida que la cantidad del producto sea "2" en el carrito

    @TC0034
    Scenario: Disminuir cantidad de un producto en el carrito
        Given El usuario se encuentra en la página de celulares
        And El usuario agrega los productos Apple al carrito
        And El usuario se encuentra en la página del carrito
        When El usuario aumenta la cantidad del producto a "2"
        And El usuario disminuye la cantidad del producto a "1"
        Then El usuario valida que la cantidad del producto sea "1" en el carrito

    @TC0035
    Scenario: Remover un producto del carrito
        Given El usuario se encuentra en la página de celulares
        And El usuario agrega los productos Apple al carrito
        And El usuario se encuentra en la página del carrito
        When El usuario elimina el producto del carrito
        Then El usuario valida que el carrito se encuentre vacío

    # Carrito - Totales e Impuestos
    @TC0036_carrito_totales
    Scenario: Validar que el total del carrito considere subtotal, descuentos y costo de envío
        Given El usuario se encuentra en la página de celulares de Liverpool
        Then Que el usuario agrega productos al carrito de compras como lo es Apple
        When El usuario navega a la página del carrito
        Then El usuario valida que el total sea igual al subtotal menos el descuento