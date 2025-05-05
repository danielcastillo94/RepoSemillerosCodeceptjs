Feature: Validación de carga inicial y elementos clave en la página de YouTube

  Background: Navegar a la página de YouTube
    Given abro la página de YouTube

  Scenario: Verificar carga de elementos clave
    Then debería ver:
      | elemento                          | sestado      |
      | Logo de YouTube                   | visible     |
      | Campo de búsqueda                 | visible     |
      | Botón de "Iniciar sesión"        | disponible  |
      | Al menos 10 miniaturas de video  | visibles    |