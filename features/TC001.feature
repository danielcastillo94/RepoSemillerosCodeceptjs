 Feature: Validar el módulo de inicio del portal Telcel
  @Prueba1
  Scenario: Cargar el portal y verificar elementos principales del home
    Given el usuario accede al portal Telcel
    When Carga la página principal
    Then el logotipo, menú principal y banner deben ser visibles