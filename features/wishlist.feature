Feature: Wishlist

    @TC-035:
    Scenario: Agregar producto a wishlist
        When el usuario ya agrego un producto y se encuentra en la pagina de su bolsa   
        And da clic en el boton de: Mover a wishlist junto a la imagen del producto
        And el submenu del lado derecho aparece
        And selecciona una lista
        Then aparece un mensaje de confirmacion que indica que el producto fue movido a la lista de deseos
    
    @TC-036: 
    Scenario: Ver wishlist actualizada
        When el usuario se encuentra en la pagina de wishlist
        And selecciona una de sus listas
        And da clic sobre ella
        Then la pagina se actualiza y se muestran los productos de la lista de deseos

    @TC-037:
    Scenario: Remover de wishlist
        When el usuario se encuentra en la pagina de wishlist
        And selecciona una de sus listas
        And da clic sobre ella
        And la pagina se actualiza y se muestran los productos de la lista de deseos
        And el usuario da clic en los 3 puntitos que aparecen en el lado derecho del producto
        And da clic en eliminar
        And el mensaje de confirmacion aparece
        And el usuario da clic en el boton eliminar
        Then la pagina se actualiza, desaparece el producto y un mensaje de confirmacion es visible durante unos segundos
