Feature: Validar acceso a la sección de cobertura nacional
@TC006 @regression
Scenario: cobertura
Given el usuario esta en el menu principal
When el usuario accede a la opcion red de mayor cobertura
When el usuario da click en Ver Cobertura
Then el usuario puede ver el mapa de cobertura