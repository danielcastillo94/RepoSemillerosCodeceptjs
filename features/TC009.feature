#Validar cambio de estado/region en el portal
Feature: Selector de Region 
@TC009
Scenario: Usuario valida cambio de region
Given El usuario esta en la pagina principal
When El usuario cambia de region a Guerrero
Then El usuario ve el cambio de region