@cobertura
Feature: Validar sección de Cobertura
  Como usuario del portal Telcel
  Quiero acceder a la sección de Cobertura
  Para validar que el mapa interactivo y el título se muestren correctamente

  Scenario: Abrir Cobertura y validar mapa y título
    Given abro la página principal de Telcel
    When navego a la sección "Cobertura" usando el buscador
    Then debería ver que el mapa interactivo está visible
    And debería ver que el título de la sección se muestra correctamente
