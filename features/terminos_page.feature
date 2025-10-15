@terminos
Feature: Terminos y condiciones
    Scenario: Estoy en la pagina principal de telcel
        Given El usuario se encuentra en la pagina principal de telcel
        When El usuario se desplaza hasta el final de la pagina
        And El usuario hace click en terminos y condiciones
        Then El usuario debe ver Terminos y condiciones
