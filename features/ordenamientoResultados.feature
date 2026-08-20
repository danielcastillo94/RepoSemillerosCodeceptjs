@liverpool @ordenamiento
Feature: ordenamiento de resultados    
    
    Background:
    Given el usuario se encuentra en la página principal de Liverpool

    @TC-007: 
    Scenario: Filtrar precio de menor a mayor    
        Given el usuario busca el producto "batman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Menor precio"
        Then los resultados se ordenan de precio menor a mayor

    @TC-016: 
    Scenario: Ordenar por relevancia
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Destacados"
        Then los resultados se ordenan por relevancia

    @TC-017: 
    Scenario: Ordenar por precio (menor a mayor)
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Menor precio"
        Then los resultados se ordenan de precio menor a mayor

    @TC-018: 
    Scenario: Ordenar por precio (mayor a menor)
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Mayor precio"
        Then los resultados se ordenan de precio mayor a menor

    @TC-019: 
    Scenario: Ordenar por más nuevo
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Novedades"
        Then los resultados se ordenan de más nuevo a más antiguo