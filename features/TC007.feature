Feature: Validar acceso y estructura del formulario de contacto

@Prueba7
Scenario: Entrar al módulo de "Contáctanos" y verificar campos de formulario y botones de envío
    Given el usuario está en el módulo de Contáctanos de Telcel
    When da clic en la opción "Correo Electrónico"
    Then se muestra el formulario de contacto con los campos requeridos
    And el botón de envío es visible