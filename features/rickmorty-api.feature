@api
Feature: API Rick and Morty

  Scenario: Obtener lista de episodios
    When hago GET al endpoint "/api/episode"
    Then el status de respuesta es 200
    And la respuesta contiene resultados

  Scenario: Obtener episodio por ID
    When hago GET al endpoint "/api/episode/1"
    Then el status de respuesta es 200
    And el campo "id" de la respuesta es 1

  Scenario: Episodio que no existe retorna 404
    When hago GET al endpoint "/api/episode/9999"
    Then el status de respuesta es 404
