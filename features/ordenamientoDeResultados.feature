@JesusCOrdenamientoResultados
Feature: Ordenamiento de Resultados 
    Background:
        Given El usuario se encuentra en la página principal de Liverpool
    
    @TC-016
    Scenario: Ordenar resultados por Destacados
        Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer 
        When El usario da click en el componente de la página que dice Ordenar por 
        Then El usuario le muestra todas las opciones posibles para ordenar
        When El usuario dar click em el que dice destacados 
        Then Se muestran los resultados Destacados

    @TC-017
    Scenario: Ordenar resultados por Menor Precio
        Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer 
        When El usario da click en Menor Precio 
        Then El usuario le muestra los productos de menor precio 

    @TC-018
    Scenario: Ordenar resultados por Mayor Precio
        Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer 
        When El usario da click en Mayor Precio 
        Then El usuario le muestra los productos de mayor precio 
    
    @TC-019
    Scenario: Ordenar resultados por Mejor Calificación
        Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer 
        When El usario da click en Mejor Calificación
        Then El usuario le muestra los productos de Mejor Calificación 