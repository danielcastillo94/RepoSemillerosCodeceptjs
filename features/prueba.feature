Feature: Prueba pagina inicial de telcel

@prueba
Scenario Outline: Prueba busqueda en telcel
 Given Estoy en telcel
  When Buscar "<producto>"
  Then ver los resultados de la busqueda "<producto>"
 
 Examples:
 |producto|
    |iphone|
    |samsung|
    |huawei|


Scenario: Prueba mocking
Given Mockeo la api de rickandmortyapi
And Me encuentro en la pagina de rickandmortyapi
Then veo el titulo de la pagina

Scenario: Prueba busqueda en telcel
 Given Estoy en telcel
  When voy a factura
  Then ingreso mi celular
