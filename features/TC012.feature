Feature: Validar acceso a documentos legales del sitio

@Prueba12
Scenario: Seleccionar el enlace “Términos y condiciones” desde el footer y verificar que el documento se cargue completamente
    Given el usuario accede al portal principal de Telcel
    When selecciona el enlace "Términos y Condiciones" en el pie de página
    Then la página de términos y condiciones se carga correctamente
    And el texto del documento es visible