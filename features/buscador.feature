@TC004 @buscador_page @Xochitl
Feature: Buscador de equipos

Scenario: Buscar un equipo y validar resultados
    Given el usuario se encuentra dentro de la página principal de Telcel
    When busca el término "iPhone"
    Then se muestran resultados visibles que contienen el término "iPhone"