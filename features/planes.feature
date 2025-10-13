Feature: Navegacion planes

@plan_page
Scenario: Validar navegacion
Given Estoy en telcel
When doy click en Menú, muestra el submenú y selecciona "Plan de Renta"
Then se puede ver la seccion "Plan de Renta Telcel"