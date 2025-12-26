@TC003
Feature: Validar seccion de Plan Telcel Plus 5G
  Como usuario del portal Telcel
  Quiero buscar el plan Telcel Plus 5G usando el buscador
  Para validar que el plan cargue correctamente

  Scenario: Validar acceso y visibilidad del Plan Telcel Plus 5G
    Given que abro la pagina de planes de Telcel
    When busco el plan Telcel Plus 5G
    Then deberia ver el plan Telcel Plus 5G visible
