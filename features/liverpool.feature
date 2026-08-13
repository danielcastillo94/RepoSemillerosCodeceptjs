Feature: Búsqueda de productos en Liverpool

  @LP001
  Scenario: Buscar un producto existente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then se muestran resultados relacionados con la búsqueda

  @LP002
  Scenario: Buscar un producto inexistente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps51"
    Then no se muestran productos para "ps51"

  @LP003
  Scenario: Validar resultados mostrados
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then los resultados muestran productos relacionados con "Ps5"