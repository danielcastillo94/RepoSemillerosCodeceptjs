Feature: Navegacion planes

@plan_page
Scenario: Validar navegacion
Given Estoy en telcel
When doy click en Menú, muestra el submenú y selecciona "Plan de Renta"
When doy click en algun plan
Then se puede ver la seccion "Plan Ultra"