@liverpool @filtros
Feature: Filtros de productos

    Background:
    Given el usuario se encuentra en la página principal de Liverpool

    @TC-008: 
    Scenario: Filtrar por rango específico (ej: $500-$2000)
        Given el usuario busca el producto "batman"
        When se desplaza en el submenu del lado izquierdo buscando el apartado precios
        And coloca el rango $500 - $2000
        And da clic en el botón para aplicar el rango
        Then los resultados se actualizan aplicando el rango de $500 a $2000

    @TC-009: 
    Scenario: Validar que solo mostrar en rango
        Given el usuario busca el producto "batman"
        When se desplaza en el submenu del lado izquierdo buscando el apartado precios
        And coloca el rango $500 - $2000
        And da clic en el botón para aplicar el rango
        Then la pagina muestra unicamente productos entre $500 y $2000

    @TC-010:
    Scenario: Seleccionar 1 marca
    Given el usuario busca el producto "batman"
    When se desplaza en el submenu del lado izquierdo buscando el apartado marcas
    And selecciona la marca "DC COMICS"
    Then la pagina carga los productos de la marca "DC COMICS"

    @TC-011: 
    Scenario: Seleccionar múltiples marcas
    Given el usuario busca el producto "batman"
    When se desplaza en el submenu del lado izquierdo buscando el apartado marcas
    And selecciona la marca "DC COMICS"
    And da clic en "Ver más" de marcas
    And selecciona la marca "FUNKO"
    Then la pagina carga los productos de las marcas "DC COMICS" y "FUNKO"

    @TC-012: 
    Scenario: Deseleccionar marca
        Given el usuario busca el producto "batman"
        And se desplaza en el submenu del lado izquierdo buscando el apartado marcas
        And selecciona la marca "DC COMICS"
        And da clic en "Ver más" de marcas
        And selecciona la marca "FUNKO"
        When da clic en la marca "DC COMICS" para eliminarla
        Then la pagina carga los productos de la marca "FUNKO" 

    @TC-013: 
    Scenario: Filtrar por talla (XS, S, M, L, XL)
    Given el usuario busca el producto "aeropostal"
    When se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"
    And selecciona la talla "Grande"
    Then la pagina carga los productos de la talla "Grande"

    @TC-014: 
    Scenario: Filtrar por color
        Given el usuario busca el producto "aeropostal"
        When se desplaza en el submenu del lado izquierdo buscando el apartado "Color"
        And selecciona el color "Negro"
        Then la pagina carga los productos del color "Negro"

    @TC-015: 
    Scenario: Combinar filtros talla + color
        Given el usuario busca el producto "aeropostal"
        When se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"
        And selecciona la talla "Grande"
        And se desplaza en el submenu del lado izquierdo buscando el apartado "Color"
        And selecciona el color "Negro"
        Then la pagina carga los productos del color "Negro" y talla "Grande"