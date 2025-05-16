#Emilio

Feature: Validaciones funcionales en dailyMotion

@enlaces
Scenario: Validar el atributo href
    Given Estoy en la pagina de Daily Motion 
    When Presiono el boton de Seguidos
    Then Valido el enlace de seguidos