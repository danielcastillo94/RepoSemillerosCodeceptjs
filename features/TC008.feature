Feature: Validar contenido del apartado de ayuda o preguntas frecuentes

@Prueba8
Scenario: Navegar al módulo de "Centro de ayuda" y comprobar que se muestren categorías o enlaces informativos
    Given el usuario accede al portal principal de Telcel
    When se encuentra en la sección "Ayuda"
    Then las categorías desplegables están disponibles
    And los enlaces resultantes son visibles