Feature: Validar acceso a documentos legales del sitio
@TC012
Scenario: Terminos y condiciones
Given el usuario esta en el final de la pagina principal
When el usuario da click en "Términos y Condiciones"
Then el usuario puede ver la pagina cargada