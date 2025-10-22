# TC007 | HU-001 | v.1.0

@TC007 @contacto_page
Feature: Validar acceso y estructura del formulario de contacto

@contacto @formulario_correo
Scenario: Entrar al módulo de "Contáctanos" y verificar campos y botones
    Given el usuario se encuentra en el módulo de Contáctanos de Telcel
    When da clic en la opción "Correo Electrónico"
    Then se muestra el formulario de contacto con los campos requeridos
    And el botón de envío es visible
