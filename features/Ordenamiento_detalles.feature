@Ordenamiento_detalles_De_Liverpool
Feature: Validar el ordenamiento de los productos

    Feature Description

    Scenario: Validar ordenamiento y detalles de productos en Liverpool.
        Given El usuario se encuentra con un producto específico en la página de Liverpool.

    # Ordenamiento de Resultados

    @TC016
    Scenario: Ordenar por relevancia.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por relevancia.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC017
    Scenario: Ordenar resultados por precio de menor a mayor.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por precio de menor a mayor.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC018
    Scenario: Ordenar resultados por precio de mayor a menor.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por precio de mayor a menor.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC019
    Scenario: Ordenar por productos más nuevos.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por productos más nuevos.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    # Detalle de Producto - Básico

    @TC020
    Scenario: Abrir detalle del producto.
        Given El usuario se encuentra en una página de resultados de productos.
        When El usuario selecciona un producto.
        Then El usuario valida que se muestre la página de detalle del producto.

    @TC021
    Scenario: Validar nombre, precio y descripción.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que el nombre, precio y descripción del producto sean correctos y correspondan al producto seleccionado.

    @TC022
    Scenario: Ver la galería de imágenes.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que las imágenes sean correctas y correspondan al producto seleccionado.

    # Detalle de Producto - Stock y Disponibilidad

    @TC023
    Scenario: Validar disponibilidad de stock.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que la información de stock y disponibilidad sea correcta y corresponda al producto seleccionado.

    @TC024
    Scenario: Ver tiendas cercanas con stock disponible.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario consulta la disponibilidad del producto en tiendas cercanas.
        Then El usuario valida que las tiendas cercanas muestren el producto con stock disponible.

    @TC025
    Scenario: Validar SKU y código de producto.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que el SKU y el código de producto sean correctos y correspondan al producto seleccionado.

    # Detalle de Producto - Reseñas

    @TC026
    Scenario: Ver reseñas de un producto.
        Given El usuario se encuentra en la página de detalle de un producto.
        Then El usuario valida que las reseñas del producto sean correctas y correspondan al producto seleccionado.

    @TC027
    Scenario: Filtrar por calificación de estrellas.
        Given El usuario se encuentra en la página de reseñas de un producto.
        When El usuario selecciona una calificación de estrellas.
        Then El usuario valida que se muestren las reseñas correspondientes a la calificación seleccionada.

    @TC028
    Scenario: Ver fotos en reseñas.
        Given El usuario se encuentra en la página de reseñas de un producto.
        When El usuario consulta las reseñas que contienen fotografías.
        Then El usuario valida que las fotografías correspondan al producto seleccionado.
