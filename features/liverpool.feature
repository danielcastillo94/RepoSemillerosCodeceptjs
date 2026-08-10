    @Funcionalidades_De_Liverpool.

    Scenario: Localización de la página de liverpool.
        Given El usuario ingresa a la página de Liverpool.
    #Búsqueda de Productos-----------------------------------------------------------------------------
    @TC001
    Scenario: Búsqueda de un producto existente en liverpool.
        Given El usuario ingresa a la página de Liverpool.
        When El usuairo localiza la barra de búsqueda.
        Then El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.

    @TC002
    Scenario: Búsqueda de un producto no existente en liverpool.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        Then El usuario ingresa un producto "inexistente" en la barra de búsqueda.

    @TC003
    Scenario: Validar resultados mostrados.
        Given El usuario localiza la barra de búsqueda.
        When El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.
        Then El usuario valida que los resultados mostrados sean correctos.

    # Navegación por Categorías Ropa--------------------------------------------------------------------------

    @TC004
    Scenario: Expandir categorias principales.
        Given El usuario localiza el menú de categorías.
        When El usuario selecciona una categoría principal.

    @TC005
    Scenario: Expandir subcategorías.
        Given El usuario localiza el menú de categorías.
        When El usuario selecciona una categoría principal.
        Then El usuario valida que se desplieguen las subcategorías correspondientes.

    #  Filtros por Precio ropa-------------------------------------------------------------------------------------------------

    @TC006
    Scenario: Validar el producto de categoría.
        Given El usuario localiza el menú de categorías.
        When El usuario selecciona una categoría principal.
        Then El usuario valida que los productos mostrados correspondan a la categoría seleccionada.

    @TC007
    Scenario: Filtrar precio de menor a mayor.
        Given El usuario se ecuentra en la pagina de ropa.
        Then El usuario ordena la busqueda de menor a mayor precio.
        Then El usuario valida que los productos se muestren en orden ascendente de precio.

    @TC008
    Scenario: Filtrar un rango específico de precio.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.


    @TC009
    Scenario: Validar que solo mostrar en rango.
        Given El usuario se encuentra en la página de ropa.
        When El usuario selecciona un rango de precio específico.
        Then El usuario valida que los productos mostrados correspondan al rango de precio seleccionado.

    # Filtros por Marca Calzado--------------------------------------------------------------------------------------

    @TC010
    Scenario: Seleccionar 1 marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona una marca específica como "Adidas".
        Then El usuario valida que los productos mostrados correspondan a la marca seleccionada.

    @TC011
    Scenario: Seleccionar multiples marcas.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona varias marcas específicas como "Adidas" y "Nike".
        Then El usuario valida que los productos mostrados correspondan a las marcas seleccionadas.

    @TC012
    Scenario: Deseleccionar una marca.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona una marca específica como "Adidas" y luego la deselecciona.
        Then El usuario valida que los productos mostrados ya no correspondan a la marca deseleccionada.

    #  Filtros por Talla/Medida ropa--------------------------------------------------------------------------------------

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
        When El usuario selecciona una talla específica como "M" y un color específico como "Rojo".
        Then El usuario valida que los productos mostrados correspondan a la talla y color seleccionados.

    # Ordenamiento de Resultados--------------------------------------------------------------------------------------

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
    Scenario: Ordenar resultados por mayor a menor.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por precio de mayor a menor.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.

    @TC019
    Scenario: Ordenar por más nuevo.
        Given El usuario se encuentra en la página de calzado.
        When El usuario selecciona la opción de ordenar por más nuevo.
        Then El usuario valida que los productos mostrados estén ordenados correctamente.
