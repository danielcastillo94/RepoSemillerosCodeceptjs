#Viviana

Feature: Validación de carga inicial y elementos clave en la página de YouTube

  Background: Navegar a la sección de tendencias
    Given abro la página de YouTube

  Scenario: Verificar carga de elementos clave
    Then debería ver el logo de YouTube
    And debería ver el campo de búsqueda
    And debería ver el botón de "Iniciar sesión"
    And deberían mostrarse al menos 10 miniaturas de video