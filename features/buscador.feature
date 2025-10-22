# TC004 | HU-001 | v.1.0

@TC004 @buscador @buscador_page
Feature: Buscador de equipos

Scenario: Buscar un equipo y validar resultados
    Given el usuario se encuentra en la página principal de Telcel
    When busca el término "iPhone"
    Then se muestran resultados visibles que contienen el término "iPhone"
