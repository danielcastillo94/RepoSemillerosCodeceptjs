#

Feature: Validaciones del login en youtube

Scenario: Validar el boton del login
    Given Estoy en la pagina de youtube
    When Presiono el boton de login
    Then Valido si la loginpage tiene el login

Scenario: Validar credenciales de login
    Given Estoy en la pagina de youtube
    When Presiono el boton de login
    Then Valido si la loginpage tiene el login
    And Ingreso las credenciales de usuario y password incorrectas
    And Presiono el boton de siguiente
    Then Valido si el correo no es correcto