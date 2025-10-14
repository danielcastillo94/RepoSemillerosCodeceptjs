Feature: Validar el módulo de inicio del portal Telcel

  Scenario: Cargar el portal y verificar elementos principales del home
    Given el usuario accede al portal Telcel
    When el usuario visualiza la página de inicio
    Then el logotipo debe ser visible
    And el menú principal debe ser navegable
    And el banner inicial debe estar presente