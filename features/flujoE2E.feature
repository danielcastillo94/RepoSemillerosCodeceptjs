Feature: Flujo Completo E2E (Búsqueda → Compra)

    @TC-062: 
    Scenario: Buscar producto
        When el usuario da clic en la barra de busqueda 
        And el usuario ingresa el producto a buscar 
        Then da enter 

    @TC-063: 
    Scenario: Agregar a carrito
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de: agregar a mi bolsa aparece
        Then el usuario da clic en el y se agrega el producto a la bolsa

    @TC-064: 
    Scenario: Checkout completo hasta confirmación
        When el usuario se encuentra en la pagina de pago
        And el usuario deja o escoge una direccion
        And el usuario deja o escoge una tarjeta de pago
        And el usuario coloca el CVV de la tarjeta
        And el usuario verifica los productos
        And el usuario da clic en el boton: finalizar compra 
        Then el checkout y confirmacion esta hecho 
