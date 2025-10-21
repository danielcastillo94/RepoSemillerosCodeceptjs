Feature: Validar contenido del apartado de ayuda o preguntas frecuentes
@TC008
Scenario: Centro de ayuda
Given el usuario esta en el menu principal
When el usuario selecciona la opcion de ayuda
Then el usuario ve la seccion de "Preguntas frecuentes"