# TC005 | HU-001 | v.1.0

@TC005 @detalle_equipo_page 
Feature: Validar visualización del detalle de un producto

@equipos @detalles @productos
Scenario: Seleccionar un equipo desde resultados y validar imágenes, precio y especificaciones
    Given el usuario se encuentra en la página principal de Telcel
    When busca el término "iPhone"
    And selecciona el primer equipo de los resultados
    Then se muestra el detalle del equipo con imágenes, precio y especificaciones visibles