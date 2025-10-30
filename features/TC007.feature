@TC007
Feature: Validar sección de Contacto
  Como usuario del portal Telcel
  Quiero acceder al módulo de Contáctanos
  Para validar que el formulario se muestre correctamente con todos los campos requeridos

  Scenario: Validar acceso y visibilidad del formulario de contacto
    Given que abro la página principal del módulo Contáctanos
    Then deberia ver el formulario visible con campos requeridos
