@JesusCCategorias
Feature: Navegación por Categorías
    Background:
        Given El usuario se encuentra en la página principal de Liverpool

    @TC-004
    Scenario: Expandir categoría principal
        When Da click en el componente de la página principal que dice Categorias
        Then Se despliega el menú de categorías 
        When El usuario selecciona una categoría principal
        Then Se muestran las subcategorías disponibles
    
    @TC-005
    Scenario: Acceder a subcategoría
        When El usuario selecciona una categoría principal
        When El usuario selecciona una subcategoría
        Then El usuario es dirigido a la página de la subcategoría

    @TC-006
    Scenario: Validar productos de categoría
        When El usuario selecciona una categoría principal
        When El usuario selecciona una subcategoría
        Then El usuario es dirigido a la página de la subcategoría, mostrando productos correspondientes a la categoría seleccionada
