Feature: Validar navegación hacia la sección de planes
  @Prueba2
   Scenario: Navegación hacia la sección de Planes y submenús
    Given el usuario accede a la página de inicio de Telcel
    When la página de inicio carga completamente
    And el usuario accede al menú principal
    And el usuario posiciona el cursor sobre la opción "Móvil"
    Then debe ver los submenús visibles y funcionales