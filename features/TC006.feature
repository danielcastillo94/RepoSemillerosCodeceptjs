# features/TC006.feature

Feature: Validar la sección de Cobertura del portal Telcel
  @Prueba6
  Scenario: Acceder a la sección de cobertura nacional
    Given el usuario esta en el menu principal
    When el usuario accede a la sección de cobertura
    And da clic al botón "Ver Cobertura"
    Then el usuario puede ver el mapa de cobertura
