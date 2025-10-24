Feature:   Validar acceso y visualización del mapa interactivo en la sección de cobertura nacional del sitio de Telcel.


  Scenario: Validar acceso a la sección de cobertura nacional
    Given  I am on the telcel page home
    When I am navigate to the "Coverage" menu
    Then I see the interactive map and section title must be displayed correctly

