Feature: Validación del detalle de equipo en el portal Telcel
  @Prueba5
  Scenario: Visualización del detalle de un producto
    Given que estoy en la página de inicio del portal Telcel
    When selecciono un equipo desde los resultados
    Then debo ver las imágenes, el precio del producto
    And las especificaciones del producto