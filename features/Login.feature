@Login
Feature: Login y Cuenta de Usuario
Background: inicio de sesion
 Given El usuario se encuentra en la pagina de inicio
@TC066-067
Scenario: Login exitoso
    When El usuario se logea con existo
    Then El usuario puede ver su perfil y direcciones guardadas
