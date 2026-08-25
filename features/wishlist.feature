@wishlist
Feature: Wishlist
    Background: 
        Given el usuario ha iniciado sesion

    @TC-035
    Scenario: Agregar producto a wishlist
        Given el usuario se encuentra en la página principal de Liverpool 
        When el usuario busca el producto "zoro"
        And da clic sobre el producto "POP! Animation One Piece Roronoa Zoro"
        And el boton de "agregar a mi bolsa" aparece
        And el usuario da clic en agregar a mi bolsa
        And el articulo se agrega al carrito 
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga
        And da clic en el boton de: Mover a wishlist junto a la imagen del producto
        And el submenu del lado derecho aparece
        And selecciona una lista
        Then aparece un mensaje de confirmacion que indica que el producto fue movido a la lista de deseos
    
    @TC-036: 
    Scenario: Ver wishlist actualizada
        Given el usuario se encuentra en la página principal de Liverpool 
        When el usuario da clic en el icono de perfil
        And da clic en wishlist
        And se muestra una de sus listas
        And da clic sobre ella
        Then la pagina se actualiza y se muestran los productos de la lista de deseos

    @TC-037:
    Scenario: Remover de wishlist
        Given el usuario se encuentra en la página principal de Liverpool 
        When el usuario da clic en el icono de perfil
        And da clic en wishlist
        And se muestra una de sus listas
        And da clic sobre ella
        And la pagina se actualiza y se muestran los productos de la lista de deseos
        And el usuario da clic en los 3 puntitos que aparecen en el lado derecho del producto
        And da clic en eliminar
        And aparece el mensaje de confirmacion para eliminar el producto
        And el usuario da clic en el boton eliminar
        Then la pagina se actualiza y desaparece el producto
