Feature: Validación de carga inicial y elementos clave en la página de YouTube

  Background: Navegar a la página de YouTube
    Given abro la página de YouTube

  Scenario: Verificar carga de elementos clave
  Then debería ver: Logo de YouTube
  Then debería ver: Campo de búsqueda
  Then debería ver: Botón de Iniciar sesión
  Then debería ver: Al menos 10 miniaturas de video
