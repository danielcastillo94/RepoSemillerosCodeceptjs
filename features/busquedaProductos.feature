@liverpool @busqueda
Feature: Búsqueda de productos

    Background:
        Given el usuario se encuentra en la página principal de Liverpool
    
    @TC-001
    Scenario: Buscar producto existente (ej: "batman")
        When el usuario da clic en la barra de busqueda
        And el usuario ingresa "batman"
        And da enter 
        Then la pagina carga y muestra los resultados relacionados a "batman"

    @TC-002: 
    Scenario: Buscar producto inexistente (ej: "isbxisbx")
        When el usuario da clic en la barra de busqueda 
        And el usuario ingresa "isbxisbx"
        And da enter 
        Then la pagina muestra el mensaje de producto no encontrado para "isbxisbx"

    @TC-003: 
    Scenario: Validar resultados mostrados
        When el usuario da clic en la barra de busqueda
        And el usuario ingresa "Batman"
        And da enter
        Then la URL contiene "Batman"