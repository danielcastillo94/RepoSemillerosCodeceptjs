# FEATURE QUE PRUEBA EL LOGIN DE LA APLICACION

Feature: Probando Login

Background:
Given El usuario esta en la pagina de login



@loginfallido
Scenario: Login fallido
When ingresan credenciales incorrectas
Then Se muestra un mensaje de error


@loginfallido # Ejemplo de Scenario Outline
Scenario Outline: Login con diferentes credenciales 
When ingresar el usuario "<username>" y la contraseña "<password>" # ejemplo de uso de variables
Then el usuario deberia ver el mensaje "<message>"

Examples:
| username | password | message                  |
| admin    | admin123 | Bienvenido, admin!       |
| admin    | xxxxx    | Credenciales incorrectas |


