#Emilio

Feature: Validaciones funcionales en dailyMotion

@enlaces
Scenario: Validar el atributo href
    Given Estoy en la pagina de Daily Motion 
    When Presiono el boton de Explorar
    Then Valido si el href contiene explore