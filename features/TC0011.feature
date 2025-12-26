@TC0011
Feature: Validar comportamiento del menú móvil
  Como usuario del portal Telcel
  Quiero simular la vista móvil y abrir el menú hamburguesa
  Para validar que las opciones del menú estén visibles y sean navegables

  Validar menú lateral en vista móvil
  Abrir menú móvil y verificar opciones

  Scenario: Abrir menú móvil y verificar opciones
    Given que abro la pagina principal de Telcel
    When abro el menú hamburguesa en vista móvil
    Then deberia ver la opción "Claro shop" visible
    And deberia ver la opción "Travel to México" visible