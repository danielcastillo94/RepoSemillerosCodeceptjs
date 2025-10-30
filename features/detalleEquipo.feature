@TC005 @Xochitl
Feature: Validar visualización del detalle de un producto

Scenario: Seleccionar un equipo desde resultados y validar imágenes, precio y especificaciones
    Given el usuario se encuentra dentro de la página principal de Telcel
    When busca el término "iPhone"
    And selecciona el primer equipo de los resultados
    Then se muestra el detalle del equipo con imágenes, precio y especificaciones visibles