@Busqueda_Navegacion_De_Liverpool
Feature: Navegacion de la página de liverpool.

    Feature Description

    Scenario: Localización de la página de liverpool.
        Given El usuario ingresa a la página de Liverpool

    #Búsqueda de Productos

    @TC0001
    Scenario: Buscar un producto existente en Liverpool
        Given El usuario ingresa a la página de Liverpool
        When  El usuario ingresa la palabra "zapatillas" en la barra de búsqueda
        Then El usuario valida que se muestren resultados para la búsqueda

    @TC0002
    Scenario: Buscar un producto inexistente en Liverpool
        Given El usuario ingresa a la página de Liverpool
        When  El usuario ingresa un producto inexistente en la barra de búsqueda
        Then El usuario valida que no se muestren resultados para la búsqueda

    @TC0003
    Scenario: Validar resultados de búsqueda
        Given El usuario ingresa a la página de Liverpool
        When El usuario ingresa la palabra "zapatillas" en la barra de búsqueda
        Then El usuario da click en zapatillas Lady Paulina

    # Navegación por Categorías - Ropa


    @TC0004
    Scenario: Expandir categorías principales
        Given El usuario se encuentra en la página de Liverpool
        When El usuario localiza el menú de categorías
        When El usuario selecciona una categoría principal
        Then El usuario valida que la categoría seleccionada se despliegue correctamente

    @TC0005
    Scenario: Expandir subcategorías
        Given El usuario se encuentra en la página de Liverpool
        When El usuario localiza el menú de categorías
        Then El usuario valida que se desplieguen las subcategorías correspondientes