@liverpool @detallesP
Feature: detalles de producto

    Background:
    Given el usuario se encuentra en la página principal de Liverpool

    @TC-020:
    Scenario: Abrir detalle de producto
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        Then la página de detalle del producto se muestra

    @TC-021:
    Scenario: Validar nombre, precio y descripción
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        Then la pagina carga y se muestran los detalles del producto

    @TC-022:
    Scenario: Ver galería de imágenes
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        And la pagina carga y se muestran los detalles del producto
        Then desplazamos la pagina para ver la galeria de imagenes

    @TC-023: 
    Scenario: Validar stock disponible
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        And se desplaza hasta el boton de comprar ahora
        Then si el boton esta habilitado hay stock disponible
    
    @TC-024: 
    Scenario: Ver tiendas cercanas con stock
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        And da clic en el boton de ver disponibilidad en tienda
        And el submenu de la derecha se habilita
        And se desplaza hasta el estado "Puebla"
        And da clic en el estado "Puebla"
        Then se muestran tiendas con stock disponible en "Puebla"

    @TC-025: 
    Scenario: Validar SKU y código de producto
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        Then el usuario verifica que el producto muestre su código

    @TC-026: 
    Scenario: Ver reseñas de producto
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        And desliza la pagina 
        Then aparecen las opiniones del producto
    
    @TC-027: 
    Scenario: Filtrar por calificación (estrellas)
        Given el usuario busca el producto "halo"
        When da clic sobre el producto "Halo Campaign Evolved para PS5"
        And desliza la pagina 
        And el boton de "ordenar por" aparece en el lado derecho y el usuario da clic
        And el submenu de filtros aparece
        And el usuario da clic en: mayor calificación
        Then las opiniones se actualizan de mayor a menor calificación