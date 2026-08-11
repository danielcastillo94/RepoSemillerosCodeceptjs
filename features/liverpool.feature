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
        And El usuario introduce un rango de precio específico
        Then El usuario puede ver los productos filtrados por el rango de precio seleccionado