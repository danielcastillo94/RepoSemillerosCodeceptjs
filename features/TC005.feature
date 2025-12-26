@TC005

Feature: Detalle de equipo
  Validar visualización del detalle de un producto  

  
  Scenario: Validar detalle de un equipo desde los resultados
    Given que el usuario está en la página principal de Telcel
    When selecciona un equipo de los resultados de búsqueda
    Then se debe mostrar la sección de detalle correctamente con imagen, precio y especificaciones
