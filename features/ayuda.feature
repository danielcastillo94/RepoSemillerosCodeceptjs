# TC008 | HU-001 | v.1.0

@TC008 @ayuda_page
Feature: Validar contenido del apartado de ayuda o preguntas frecuentes

@ayuda @preguntas_frecuentes @centro_ayuda
Scenario: Navegar al módulo de "Centro de ayuda" y comprobar que se muestren categorías o enlaces informativos
    Given el usuario accede a la página principal de Telcel
    When da clic en el menú a la sección "Ayuda"
    Then las categorías desplegables están disponibles
    And los enlaces resultantes son visibles