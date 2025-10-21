Feature: Buscador de equipos en Telcel
  Como usuario visitante del portal Telcel
  Quiero buscar equipos específicos
  Para validar que el buscador muestra resultados coherentes

  Scenario: Validar funcionamiento del buscador general
    Given que el usuario abre el portal oficial de Telcel "https://www.telcel.com"
    When ingresa un término de búsqueda "iPhone"
    Then debe ver resultados relacionados con "iPhone"
