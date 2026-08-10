@busquedaLiverpool
Feature: Búsqueda de Productos
Background: Caso inicial
    Given El usuario se encuentra en la pagina principal
@TC001
Scenario: Buscar producto existente
    When El usuario escribe "pantalon hombre" en el buscador
    Then El usuario ve los resultados de su busqueda

@TC002
Scenario: Buscar producto inexistente
    When El usuario escribe "DiDi" en el buscador
    Then El usuario ve un mensaje de error de busqueda

@TC003
Scenario: Validar resultados mostrados
    When El usuario escribe "pantalon hombre" en el buscador
    And el usuario da clic en un pantalon
    Then El usuario puede ver detalles del pantalon