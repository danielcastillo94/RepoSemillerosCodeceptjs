Feature: Validación de funcionalidades principales del portal de Liverpool
    Background: Accede a la página principal
    Given El usuario está en la página principal

    @TC001
    Scenario: Búsqueda de producto existente
        When El usuario hace clic en la barra de búsqueda
        And El usuario introduce "zapatillas" en la barra de búsqueda
        And El usuario presiona la tecla "Enter"
        Then El usuario puede ver los resultados coincidentes de la búsqueda

    @TC002
    Scenario: Búsqueda de producto inexistente
        When El usuario hace clic en la barra de búsqueda
        And El usuario introduce "duolingo" en la barra de búsqueda
        And El usuario presiona la tecla "Enter"
        Then El usuario puede ver resultados que no coinciden con la búsqueda inicial

    @TC003
    Scenario: Validar resultados mostrados
        Given El usuario está en la página de resultados de búsqueda
        When El usuario puede visualizar los productos que coinciden con la búsqueda
        Then El usuario puede ver imágenes, nombre y precio de los productos

    @TC004
    Scenario: Navegación por el menú de Categorías
        When El usuario hace clic en el menú de "Categorías"
        Then El usuario puede visualizar las diferentes categorías de productos disponibles en el portal

    @TC005
    Scenario: Acceder a una subcategoría específica
        Given El usuario está en el menú de "Categorías"
        When El usuario selecciona la subcategoría "Electrónica" haciendo clic
        Then El usuario puede ver una página con los tipos de productos relacionados a la subcategoría seleccionada

    @TC006
    Scenario: Validar productos de la subcategoría seleccionada
        Given El usuario está en la página de la subcategoría "Electrónica"
        When El usuario selecciona el tipo de producto "Gaming" en el menú de la subcategoría haciendo clic
        And El usuario visualiza una lista de subtipos de productos relacionados a la selección realizada
        And El usuario selecciona el subtipo de producto "PC Gamer" haciendo clic
        Then El usuario puede ver resultados del tipo de producto seleccionado, con imágenes, nombre y precio de los productos

    @TC007
    Scenario: Filtrar precio de menor a mayor
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú desplegable con el título "Ordenar por:"
        And El usuario selecciona la opción "Menor precio" haciendo clic
        Then El usuario puede ver los productos ordenados por precio de menor a mayor

    @TC008
    Scenario: Filtrar por rango específico
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Precios"
        And El usuario introduce un rango de precio específico en los campos correspondientes "Mínimo" y "Máximo"
        And El usuario hace clic en el botón para filtrar
        Then El usuario puede ver los productos filtrados por el rango de precio seleccionado

    @TC009
    Scenario: Validar que solo muestre productos en rango de precio seleccionado
        Given El usuario está en la página de resultados de "PC Gamer" filtrados por rango de precio
        When El usuario visualiza los productos mostrados en la página
        Then El usuario puede verificar que todos los productos mostrados están dentro del rango de precio seleccionado

    @TC010
    Scenario: Validar selección de producto por marca
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Marcas"
        And El usuario selecciona una marca específica haciendo clic en la casilla correspondiente
        Then El usuario puede ver los productos filtrados por la marca seleccionada
    
    @TC011
    Scenario: Validar selección múltiple de marcas
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Marcas"
        And El usuario selecciona dos o más marcas específicas haciendo clic en las casillas correspondientes
        Then El usuario puede ver los productos filtrados por marcas seleccionadas

    @TC012
    Scenario: Deseleccionar una marca previamente seleccionada
        Given El usuario está en la página de resultados de "PC Gamer" filtrados por marcas
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Marcas"
        And El usuario deselecciona una marca específica haciendo clic en la casilla correspondiente
        Then El usuario puede ver los productos filtrados de las marcas restantes seleccionadas

    @TC013
    Scenario: Filtrar por talla/tamaño del producto
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Talla/Tamaño"
        And El usuario selecciona un tamaño específico haciendo clic en la casilla correspondiente
        Then El usuario puede ver los productos filtrados por el tamaño seleccionado

    @TC014
    Scenario: Filtrar por color del producto
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Color"
        And El usuario selecciona un color específico haciendo clic en la casilla correspondiente
        Then El usuario puede ver los productos filtrados por el color seleccionado

    @TC015
    Scenario: Combinar filtros por talla/tamaño y color del producto
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú lateral con opciones de filtrado
        And El usuario scrollea hasta la opción de "Talla/Tamaño"
        And El usuario selecciona un tamaño específico haciendo clic en la casilla correspondiente
        And El usuario scrollea hasta la opción de "Color"
        And El usuario selecciona un color específico haciendo clic en la casilla correspondiente
        Then El usuario puede ver los productos filtrados por el tamaño y color seleccionados

    @TC016
    Scenario: Ordenar productos por relevancia
        Given El usuario está en la página de resultados de "PC Gamer"
        When El usuario visualiza un menú desplegable con el título "Ordenar por:"
        And El usuario selecciona la opción "Destacados" haciendo clic
        Then El usuario puede ver los productos ordenados por relevancia

    @TC017
    Scenario: 