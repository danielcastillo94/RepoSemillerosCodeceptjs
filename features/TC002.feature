@TC002
Feature: Validar sección Menú Planes
  Como usuario del portal Telcel
  Quiero acceder al menú Planes
  Para validar que la sección de Planes se cargue correctamente

  Scenario: Validar visibilidad y navegación hacia Planes
    Given que abro la página principal de Telcel
    When hago clic en el menú "Planes"
    Then debería ver el título de la sección Planes visible
