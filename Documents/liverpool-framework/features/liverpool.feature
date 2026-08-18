@PruebaLiverpool
Feature: Validar flujos principales de la página de Liverpool.
    Background: Regresando al caso inicial
        Given El usuario está en la página principal de Liverpool

    @BusquedaDeProducto
    @TC001
    Scenario: Validar búsqueda de un producto existente
        When El usuario introduce "atv" en la barra de búsqueda
        Then El usuario visualiza los resultados mostrados de "atv"

    @TC002
    Scenario: Validar búsqueda de un producto inexistente
        When El usuario introduce "juegosfera" en la barra de búsqueda
        Then El usuario visualiza un mensaje indicando que no se encontraron resultados

    @TC003
    Scenario: Validar resultados mostrados
        When El usuario introduce "xbox" en la barra de búsqueda
        Then El usuario visualiza los resultados mostrados de 'xbox'
    
    @NavegacionCategorias
    @TC004
    Scenario: Validar navegación por categorías
        When El usuario da clic en el botón de "Categorías"
        Then El usuario visualiza las categorías disponibles
        When El usuario da clic en la categoría 'Videojuegos'
        Then El usuario visualiza las subcategorías disponibles

    @TC005
    Scenario: Validar navegación por subcategorías
        When El usuario da clic en el botón de "Categorías"
        Then El usuario visualiza las categorías disponibles
        When El usuario da clic en la categoría 'Videojuegos'
        Then El usuario visualiza las subcategorías disponibles
        When El usuario da clic en la subcategoría 'Consolas'
        Then El usuario visualiza los productos de la subcategoría

    @TC006
    Scenario: Validar productos de subcategoría
        When El usuario da clic en el botón de "Categorías"
        Then El usuario visualiza las categorías disponibles
        When El usuario da clic en la categoría 'Videojuegos'
        Then El usuario visualiza las subcategorías disponibles
        When El usuario da clic en la subcategoría 'Consolas'
        Then El usuario visualiza los productos de la subcategoría

    @FiltrosPorPrecio
    @TC007
    Scenario: Validar filtros por precio de menor a mayor
        When El usuario introduce 'Consolas'
        Then El usuario visualiza los filtros disponibles
        When El usuario selecciona el filtro de 'Precio: de menor a mayor'
        Then El usuario visualiza los productos ordenados por precio de menor a mayor
    
    @TC008
    Scenario: Validar filtros por precio especfíco
        When El usuario introduce 'Consolas'
        Then El usuario visualiza los filtros disponibles
        When El usuario selecciona el filtro de 'Precio: $1000 - $2000'
        Then El usuario visualiza los productos con precio entre $1000 y $2000
    
    @TC009
    Scenario: Validar que solo mostrar rango
        When El usuario introduce 'Consolas'
        Then El usuario visualiza los filtros disponibles
        When El usuario selecciona el filtro de 'Precio: $1000 - $2000'
        Then El usuario visualiza los productos con ese rango de precios
    
    @FiltrosPorMarca
    @TC010
    Scenario: Validar selección de una marca
        When El usuario introduce 'Consolas'
        Then El usuario visualiza las marcas disponibles
        When el usuario selecciona la marca 'ASUS'
        Then El ususario visualiza los productos de la marca seleccionada

    @TC011
    Scenario: Validar selección de múltiples marcas
        When El usuario introduce 'Consolas'
        Then El usuario visualiza las marcas disponibles
        When El usuario selecciona las marcas 'ASUS' y 'MICROSOFT'
        Then El usuario visualiza los productos de la marca seleccionada

    @TC012
    Scenario: Validar Deselección de marca
        When El usuario introduce 'Consolas'
        Then El usuario visualiza las marcas disponibles
        When El usuario selecciona las marcas 'ASUS' y 'MICROSOFT'
        Then El usuario visualiza los productos de la marca seleccionada
        When El usuario deselecciona las marcas aplicadas
        Then El usuario visualiza los productos sin filtrado de marcas


    @FiltrosPorTalla
    @TC013
    Scenario: Validar filtro por tallas
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        And  Navega por la barra lateral izquierda
        When El usuario selecciona la talla 'grande' en el apartado de 'Tallas'
        Then El usuario visualiza todos los productos de la talla seleccionada

    @TC014
    Scenario: Validar filtro por color
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        And  Navega por la barra lateral izquierda
        When El usuario selecciona el color 'azul' en el apartado de 'Colores'
        Then El usuario visualiza todos los productos del color seleccionado

    @TC015
    Scenario: Validar combinación de filtros talla más color
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        And  Navega por la barra lateral izquierda
        When El usuario selecciona la talla 'grande' en el apartado de 'Tallas'
        And  Selecciona los colores 'azul' en el apartado de 'Colores'
        Then El usuario visualiza todos los productos relacionados a la talla y el color seleccionado

    @OrdenamientoDeResultados
    @TC016
    Scenario: Validar orden por relevancia
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario abre la opción de 'Ordenar por:'
        And  Selecciona la opción 'Destacados'
        Then El usuario visualiza los productos destacados

    @TC017
    Scenario: Validar orden por precio de menor a mayor
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario abre la opción de 'Ordenar por:'
        And  Selecciona la opción 'Menor precio'
        Then El usuario visualiza los productos de menor precio

    @TC018
    Scenario: Validar orden por precio de mayor a menor
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario abre la opción de 'Ordenar por:'
        And  Selecciona la opción 'Mayor precio'
        Then El usuario visualiza los productos de mayor precio

    @TC019
    Scenario: Validar orden por más nuevo
        When El usuario introduce 'vestido' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario abre la opción de 'Ordenar por:'
        And  Selecciona la opción 'Novedades'
        Then El usuario visualiza los productos de novedad

    @DetalleDeProductoBasico
    @TC020
    Scenario: Validar abrir detalle de producto
        When El usuario introduce 'xbox' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario selecciona 'Consola Xbox Series X 1TB'
        Then El usuario visualiza los detalles del producto

    @TC021
    Scenario: Validar nombre, precio, descripción
        When El usuario introduce 'xbox' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario selecciona 'Consola Xbox Series X 1TB'
        Then El usuario visualiza el nombre, precio y descripción

    @TC022
    Scenario: Validar la galería de imágenes
        When El usuario introduce 'xbox' en la barra de búsqueda
        Then El usuario visualiza los productos relacionados
        When El usuario selecciona 'Consola Xbox Series X 1TB'
        Then El usuario visualiza los detalles de del producto
        And  Visualiza las imágenes del producto
        When El usuario da clic en una de las imágenes
        Then El usuario visualiza la imágen en pantalla completa




