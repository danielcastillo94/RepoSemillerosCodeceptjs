@TC09
Feature: Validar selector de región
  Como usuario del portal Telcel
  Quiero cambiar el estado/región desde el encabezado
  Para validar que los textos y valores se actualicen correctamente

  Scenario: Validar cambio de estado/región en el portal
    Given que abro la pagina principal de Telcel
    When cambio la región desde el selector del encabezado a "Ciudad de México"
    Then deberia ver que la región seleccionada se actualiza correctamente