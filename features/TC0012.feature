@TC0012
Feature: Validar acceso a documentos legales del sitio
  Como usuario del portal Telcel
  Quiero seleccionar el enlace "Términos y condiciones" desde el footer
  Para verificar que el documento se cargue completamente

  Validar acceso a Términos y condiciones
  Scenario: Abrir el enlace de Términos y condiciones y validar contenido
    Given que abro la pagina principal de Telcel
    When navego al enlace de Términos y condiciones desde el footer
    Then deberia ver el titulo de la pagina "Términos y condiciones" visible
    And deberia ver el texto principal de los terminos cargado