@TC008 @Xochitl
Feature: Validar contenido del apartado de ayuda o preguntas frecuentes

Scenario: Navegar en el módulo de "Centro de ayuda" y comprobar que esten visibles sus componentes
    Given el usuario accede a la página principal de Telcel
    When da clic en el menú a la sección "Ayuda"
    Then las categorías desplegables están disponibles
    And los enlaces resultantes son visibles