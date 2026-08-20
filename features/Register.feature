@crearcuenta
Feature: cuenta de usuario
@TC065
Scenario: Registrar cuenta nueva
    Given El usuario se encuentra en la pagina de inicio
    When El usuario da clic en "iniciar sesion"
    And El usuario da clic en "Crear cuenta"
    And El usuario ingresa correo y contraseña
    And El usuario ingresa sus datos personales
    And El usuario ingresa un numero celular valido
    And El usuario ingresa el codigo de sms
    And El usuario va a playeras