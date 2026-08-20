@liverpool @categorias
Feature: Navegación por categorías

    Background:
        Given el usuario se encuentra en la página principal de Liverpool

    @TC-004: 
    Scenario: Expandir categoría principal
        When el usuario da clic en categorias
        Then el submenu de categorias carga al lado izquierdo de la pagina

    @TC-005
    Scenario: Acceder a categoría (ej: "Videojuegos")
    When el usuario da clic en categorias
    And el submenu de categorias carga al lado izquierdo de la pagina
    And da clic en "Videojuegos"
    Then la pagina carga y muestra la categoria "Videojuegos"

    @TC-006
    Scenario: Validar productos de categoría (ej: "Videojuegos")
    When el usuario da clic en categorias
    And el submenu de categorias carga al lado izquierdo de la pagina
    And da clic en "Videojuegos"
    And la pagina carga y muestra la categoria "Videojuegos"
    Then podemos ver las opciones de productos de "Videojuegos"