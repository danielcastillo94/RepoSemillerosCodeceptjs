@TC004

Feature: Buscador de equipos

  Scenario: Validar funcionamiento del buscador general
    Given que el usuario está en la página principal de Telcel
    When ingresa un término de búsqueda válido en el buscador general
    Then se deben mostrar resultados coherentes con la búsqueda realizada
