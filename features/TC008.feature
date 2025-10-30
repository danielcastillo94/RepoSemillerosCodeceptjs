@TC008
Feature: Validar contenido del apartado de ayuda
  Como usuario del portal Telcel
  Quiero acceder al apartado de ayuda
  Para validar que se muestren categorias y enlaces informativos correctamente

  Scenario: Validar acceso y contenido del Centro de ayuda
    Given que abro la pagina principal de Telcel
    When navego al modulo Centro de ayuda
    Then deberia ver las categorias visibles
    And los enlaces informativos deberian ser visibles y sus contenidos desplegables
