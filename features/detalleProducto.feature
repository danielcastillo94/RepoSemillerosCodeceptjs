@liverpool @detallesP
Feature: detalles de producto

    Background:
    Given el usuario se encuentra en la página principal de Liverpool

    @TC-020:
    Scenario: Abrir detalle de producto
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        Then la página de detalle del producto se muestra

    @TC-021:
    Scenario: Validar nombre, precio y descripción
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        Then la pagina carga y se muestran los detalles del producto

    @TC-022:
    Scenario: Ver galería de imágenes
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        And la pagina carga y se muestran los detalles del producto
        Then desplazamos la pagina para ver la galeria de imagenes

    @TC-023: 
    Scenario: Validar stock disponible
        When el usuario se encuentra en la pagina del producto
        And se desplaza hasta el boton de (comprar ahora) 
        Then si el boton esta habilitado hay stock disponible 
    
    @TC-024: 
    Scenario: Ver tiendas cercanas con stock
        When el usuario se encuentra en la pagina del producto
        And da clic en el boton (ver disponibilidad en tienda)
        And el submenu de la derecha se habilita
        And se desplaza 
        And da clic en su estado
        Then se muestran tiendas con stock disponible en su estado

    @TC-025: 
    Scenario: Validar SKU y código de producto
        When el usuario se encuentra en la pagina del producto
        Then el codigo de producto aparece arriba del nombre del producto 

    @TC-026: 
    Scenario: Ver reseñas de producto
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        Then aparecen las opiniones del producto
    
    @TC-027: 
    Scenario: Filtrar por calificación (estrellas)
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de (ordenar por) aparece en el lado derecho y el usuario da clic
        And el submenu de filtros aparece
        And el usuario da clic en: mayor calificación
        Then las opiniones se actualizan de mayor a menor calificación

    @TC-028: 
    Scenario: Ver fotos en reviews
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And aparecen las opiniones del producto
        Then si la opinion tiene imagenes apareceran con la reseña