Feature: Validar navegación hacia la sección de planes
  @Prueba2
  Scenario: Navegar a los Submenús de Planes
    Given que el usuario está en la página de inicio
    When el usuario posiciona el cursor sobre "Móvil"
    Then debe ver los submenús disponibles