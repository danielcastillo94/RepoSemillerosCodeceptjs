@cobertura
Feature: Validar sección de Cobertura
  Como usuario del portal Telcel
  Quiero acceder a la sección de Cobertura
  Para validar que el mapa interactivo y el título se muestren correctamente

  Scenario: Validar acceso y visibilidad de la sección Cobertura
    Given que abro la página principal de Telcel
    When navego a la sección de Cobertura usando el buscador
    Then debería ver el título de la sección visible
    And debería ver el mapa interactivo visible