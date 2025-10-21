Feature: Plan Telcel Plus 5G
@TC003
Scenario: Validar ingreso al detalle de un plan especifico
Given el usuario esta en la pagina de tarifas
When el usuario elige el plan 5G y da click en comparar
Then el usuario puede ver los detalles del plan
