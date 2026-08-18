@episodios
Feature: Mocking de episodios en la API Rick and Morty
@mock-episodios
  Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de episodios está activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And  ve el episodio "Episodio Semillero Beta" en la respuesta
    And  no ve el episodio real "pilot"

@mock-error-503
  Scenario: Error 503 en la API de episodios
    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

@mock-modify-real
  Scenario: La respuesta real es interceptada y el primer episodio es renombrado
    Given el mock intercepta la respuesta real y renombra al primer episodio como "yoan"
    When el usuario consulta la API de episodios
    Then ve el nombre "yoan" en la respuesta