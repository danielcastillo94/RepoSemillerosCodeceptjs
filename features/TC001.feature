Feature:Validar carga del portal
@TC001 @regression
Scenario: Carga del portal y elementos principales
Given el usuario selecciona la pagina telcel.com
When carga la pagina principal
Then el usuario puede ver el logotipo, menu principal y banner