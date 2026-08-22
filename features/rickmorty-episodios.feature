Feature: Network Mocking de episodios de Rick and Morty

  @episodios
  Scenario: Episodios mockeados reemplazan a los episodios reales
    Given que mockeo los episodios "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When consulto la API de episodios
    Then debo ver el episodio "Episodio Semillero Alpha"
    And debo ver el episodio "Episodio Semillero Beta"
    And no debo ver el episodio "Pilot"

  @episodios
  Scenario: La API de episodios devuelve error 503
    Given que mockeo un error 503 en la API de episodios
    When consulto la API de episodios
    Then debo ver el mensaje "Servicio de episodios no disponible"

  @episodios
  Scenario: Modifico la respuesta real de la API de episodios
    Given que intercepto y modifico la respuesta real de episodios con "Episodio de Gael"
    When consulto la API de episodios
    Then debo ver el episodio "Episodio de Gael"

  @episodios
Scenario: Mock de un episodio específico por ID
  Given que mockeo el episodio con ID 3
  When consulto el personaje con ID 3
  Then debo ver el personaje real
  And debo ver el episodio "Prueba de Automatización"
  And debo ver la fecha "Semilleros 2026"
  And debo ver el código de episodio "S99E99"