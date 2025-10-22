# TC012 | HU-001 | v.1.0

@TC012 @terminos_page
Feature: Validar acceso a documentos legales del sitio

@footer @terminos_condiciones
Scenario: Verificar acceso y carga del documento de Términos y Condiciones
    Given el usuario accede al sitio principal de Telcel
    When selecciona el enlace "Términos y Condiciones" en el pie de página
    Then la página de términos y condiciones se carga correctamente
    And el texto del documento es visible
