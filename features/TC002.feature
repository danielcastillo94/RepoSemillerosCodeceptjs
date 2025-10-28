Feature: Validar navegación hacia la sección de planes

@TC002 @regression
Scenario: Validar navegacion
Given Estoy en telcel
When doy click en Menú, muestra el submenú y selecciona "Plan de Renta"
When doy click en algun plan
Then se puede ver la seccion "Plan Ultra"