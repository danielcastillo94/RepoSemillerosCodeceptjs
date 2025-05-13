#Viviana

Feature: Validación de carga inicial y elementos clave en la página de YouTube

  Background: Navegar a la página de YouTube
    Given abro la página de YouTube

  Scenario: Verificar carga de elementos clave
<<<<<<< HEAD
  Then debería ver: Logo de YouTube
  Then debería ver: Campo de búsqueda
  Then debería ver: Botón de Iniciar sesión
  Then debería ver: Al menos 10 miniaturas de video
=======
    Then debería ver:
      | elemento                          | sestado      |
      | Logo de YouTube                   | visible     |
      | Campo de búsqueda                 | visible     |
      | Botón de "Iniciar sesión"        | disponible  |
      | Al menos 10 miniaturas de video  | visibles    |
>>>>>>> 8015ac85fab7d5a487e6dae790b6b9e0d7aea2b0
