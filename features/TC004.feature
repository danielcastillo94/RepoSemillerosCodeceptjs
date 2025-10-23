Feature: Validar el funcionamiento del buscador general
@Prueba4
Scenario: Buscador de equipos
Given el usuario esta en el portal telcel
When el usuario busca el equipo "IPhone" en la barra de busqueda
Then el usuario puede ver los resultados