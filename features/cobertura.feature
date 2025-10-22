# TC006 | HU-001 | v.1.0

@TC006 @cobertura_page
Feature: Validar acceso a la sección de cobertura nacional

@cobertura @mapa
Scenario: Acceder al menú "Cobertura" y validar mapa interactivo
    Given el usuario se encuentra en la página principal de Telcel
    When accede en el menú a la sección "Móvil" y "Red de mayor cobertura"
    And da clic al botón "Ver cobertura"
    Then se muestra el mapa interactivo y el título de la sección
