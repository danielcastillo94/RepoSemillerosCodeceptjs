Feature: carrito
    
    Background:
    Given el usuario se encuentra en la página principal de Liverpool

    @TC-029: 
    Scenario: Agregar 1 producto al carrito
        Given el usuario busca el producto "zoro"
        When da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        Then el articulo se agrega al carrito 

    @TC-030: 
    Scenario: Validar cantidad en badge
        Given el usuario busca el producto "zoro"
        When da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And el articulo se agrega al carrito 
        Then el badge del carrito muestra la cantidad de productos agregados

    @TC-031: 
    Scenario: Ver confirmación de agregado
        Given el usuario busca el producto "naruto"
        When da clic sobre el producto "POP! Animation Naruto Shippuden Naruto Uzumaki"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        Then el articulo se agrega al carrito 

    @TC-032:
    Scenario: Agregar 3+ productos diferentes

        Given el usuario busca el producto "luffy"
        When da clic sobre el producto "Funko POP! Animation One Piece Monkey D. Luffy"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And limpia la barra de búsqueda

        Given el usuario busca el producto "zoro"
        When da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And limpia la barra de búsqueda

        Given el usuario busca el producto "sanji"
        When da clic sobre el producto "POP! Animation One Piece Sanji"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And limpia la barra de búsqueda

        Then el boton de bolsa indica el numero de productos agregados

    @TC-033
    Scenario: Validar cantidad total en carrito
        Given el usuario ya agrego productos a su bolsa
        When da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        Then el carrito muestra la cantidad total de productos agregados
    
    @TC-034
    Scenario: Ver subtotal actualizado
        Given el usuario ya agrego productos a su bolsa
        When da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el subtotal inicial aparece
        And el usuario da clic en el boton de eliminar de un producto
        And el mensaje de confirmacion aparece
        And el usuario da clic en aceptar eliminacion
        And el articulo eliminado muestra el mensaje de confirmacion
        Then el subtotal se actualiza correctamente

    @TC-041
    Scenario: Aumentar cantidad en carrito
        Given el usuario ya agrego productos a su bolsa
        When da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el usuario aumenta en uno la cantidad de un producto
        Then la cantidad del producto aumenta en uno
        

    @TC-042
    Scenario: Disminuir cantidad
        Given el usuario busca el producto "zoro"
        When da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And el articulo se agrega al carrito 
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el usuario aumenta en uno la cantidad de un producto
        And el usuario disminuye en uno la cantidad del producto
        Then la cantidad del producto disminuye

    @TC-043
    Scenario: Remover producto del carrito
        Given el usuario busca el producto "zoro"
        When da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And el articulo se agrega al carrito 
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el usuario da clic en el boton de eliminar de un producto
        And el mensaje de confirmacion aparece
        And el usuario da clic en aceptar eliminacion
        Then el articulo eliminado muestra el mensaje de confirmacion

    @TC-044: 
    Scenario: Validar subtotal correcto
        Given el usuario ya agrego productos a su bolsa
        When da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el usuario obtiene los precios de los productos
        Then la suma de los precios coincide con el subtotal mostrado

    @TC-046:
    Scenario: Validar total final
        Given el usuario ya agrego productos a su bolsa
        When da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And el subtotal y descuento aparecen
        Then el total final se calcula correctamente