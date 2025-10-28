Feature: Validar acceso y estructura del formulario de contacto
@TC007 @regression
Scenario: Contacto
Given el usuario esta en el menu principal y selecciona contactanos
When el usuario selecciona la opcion correo
Then el usuario puede ver el formulario y sus elementos