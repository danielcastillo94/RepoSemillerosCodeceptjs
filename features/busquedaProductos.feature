@JesusCLiverpool
Feature: Búsqueda de productos en Liverpool.
    Background:
    Given El usuario se encuentra en la página principal de Liverpool

    @TC-001
    Scenario: Buscar producto existente
        When El usuario busca el producto "zapatillas"
        Then El usuario visualiza los resultados de búsqueda
    
    @TC-002
    Scenario: Buscar producto inexistente
        When El usuario busca el producto inexistente "productoXYZ99999"
        Then El usuario visualiza un mensaje indicando que no hay resultados

    @TC-003
    Scenario: Validar resultados mostrados
        When El usuario busca el producto de "zapatillas"
        Then El usuario visualiza productos relacionados con "zapatillas"

    