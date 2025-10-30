@TC012 @Xochitl
Feature: Validar acceso a documentos legales del sitio

Scenario: Verificar acceso y carga del documento de Términos y Condiciones
    Given el usuario accede dentro de la página principal de Telcel
    When selecciona el enlace "Términos y Condiciones" en el pie de página
    Then la página de términos y condiciones se carga correctamente
    And el texto del documento es visible