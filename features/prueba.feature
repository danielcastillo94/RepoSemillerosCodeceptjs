Feature: Prueba pagina inicial de telcel

Scenario Outline: Prueba busqueda en telcel
  Given Estoy en telcel
  When Buscar "<producto>"
  Then ver los resultados de la busqueda

Examples:
  | producto |
  | iphone   |
  | samsung  |
  | huawei   |
