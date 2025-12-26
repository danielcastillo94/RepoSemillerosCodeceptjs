@TC006
Feature: Validar seccion de Cobertura
  Como usuario del portal Telcel
  Quiero acceder a la seccion de Cobertura
  Para validar que el mapa interactivo y el titulo se muestren correctamente

  Scenario: Validar acceso y visibilidad de la seccion Cobertura
    Given que abro la pagina principal de Telcel
    When navego a la seccion de Cobertura usando el buscador
    Then deberia ver el titulo de la seccion visible
    And deberia ver el mapa interactivo visible