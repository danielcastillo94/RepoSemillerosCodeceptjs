Feature: Prueba pagina inicial de telcel

Scenario Outline: Prueba busqueda en telcel
 Given Estoy en telcel
  When Buscar "<producto>"
  Then ver los resultados de la busqueda
 
 Examples:
 |producto|
    |iphone|
    |samsung|
    |huawei|


@prueba
Scenario: Prueba mocking
Given Mockeo la api de rickandmortyapi
And Me encuentro en la pagina de rickandmortyapi
Then veo el titulo de la pagina
