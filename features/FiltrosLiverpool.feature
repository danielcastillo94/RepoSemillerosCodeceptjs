@Filtros_Liverpool
Feature: Validar filtros de productos de Liverpool

    Feature Description

    Scenario: Validar filtros de productos en Liverpool.
        Given El usuario ingresa un producto de Liverpool.

    # Filtros por Precio - Ropa

    @TC006
    Scenario: Validar productos de una categoría.
        Given El usuario se encuentra en el menú de categorías.
        When El usuario selecciona una categoría principal.
        Then El usuario valida que los productos mostrados correspondan a la categoría seleccionada.

    @TC007
    Scenario: Ordenar productos de menor a mayor precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario ordena los productos de menor a mayor precio.
        Then El usuario valida que los productos se muestren en orden ascendente de precio.

    @TC008
    Scenario: Seleccionar un rango específico de precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.
        Then El usuario valida que el filtro de precio se haya aplicado correctamente.

    @TC009
    Scenario: Validar productos dentro de un rango de precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.
        Then El usuario valida que los productos mostrados correspondan al rango de precio seleccionado.

    # Filtros por Marca - Calzado

    @TC010
    Scenario: Seleccionar una marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona una marca específica como "Adidas".
        Then El usuario valida que los productos mostrados correspondan a la marca seleccionada.

    @TC011
    Scenario: Seleccionar múltiples marcas.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona las marcas "Adidas" y "Nike".
        Then El usuario valida que los productos mostrados correspondan a las marcas seleccionadas.

    @TC012
    Scenario: Deseleccionar una marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la marca "Adidas".
        And El usuario deselecciona la marca "Adidas".
        Then El usuario valida que los productos mostrados ya no estén filtrados por la marca deseleccionada.

    # Filtros por Talla y Color - Ropa

    @TC013
    Scenario: Filtrar por talla específica.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona una talla específica como "M".
        Then El usuario valida que los productos mostrados correspondan a la talla seleccionada.

    @TC014
    Scenario: Filtrar por color.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un color específico como "Rojo".
        Then El usuario valida que los productos mostrados correspondan al color seleccionado.

    @TC015
    Scenario: Combinar filtros de talla y color.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona una talla específica como "M".
        And El usuario selecciona un color específico como "Rojo".
        Then El usuario valida que los productos mostrados correspondan a la talla y al color seleccionados.