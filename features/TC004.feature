Feature:Validar funcionamiento del buscador general
@TC004
Scenario: Buscador de equipos
Given el usuario est en la pagina principal
When el usuario introduce "IPhone" en la barra de busqueda
Then el usuario puede ver los resultados de la busqueda