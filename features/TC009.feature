Feature: Validar cambio de estado/región en el portal
@TC009
Scenario: Selector de region
Given el usuario esta en la pagina principal
When seleccion el boton de ubicacion y elige su estado
Then la pagina principal se puede evr el cambio de region