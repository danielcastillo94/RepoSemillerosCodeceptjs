@TC001
Feature: Validar sección Inicio
  Como usuario del portal Telcel
  Quiero acceder al Home
  Para validar que los elementos principales (logotipo, menú y banner) se carguen correctamente

  Scenario: Validar acceso y visibilidad de la sección Inicio
    Given que abro la pagina principal de Telcel
    Then deberia ver el logotipo visible
    And deberia ver el menú principal visible
    And deberia ver el banner inicial visible
