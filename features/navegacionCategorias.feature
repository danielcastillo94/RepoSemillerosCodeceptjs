@navegacionCategorias
Feature: Navegación por Categorías

    Background: 
        Given El usuario esta en la pagina principal

    @TC004
    Scenario: Expandir categoría principal
        When El usuario da click en el boton Categorias
        Then Se muestran todas las categorias
        When El usuario hace hover sobre la categoria "Hombre"
        Then Se muestran todas las subcategorias

    @TC005
    Scenario: Acceder a subcategoría
        When El usuario da click en el boton Categorias
        Then Se muestran todas las categorias
        And El usuario hace hover sobre la categoria "Hombre"
        And El usuario da clic en la subcategoria "Ropa"
        Then El usuario es redirigido a la pagina de la subcategoria "Ropa"


    @TC006
    Scenario: Validar productos de categoría
        When El usuario da click en el boton Categorias
        Then Se muestran todas las categorias
        And El usuario hace hover sobre la categoria "Hombre"
        And El usuario da clic en la subcategoria "Ropa"
        Then El usuario es redirigido a la pagina de la categoria "Ropa"
        When El usuario da click sobre el card "Camisas"

