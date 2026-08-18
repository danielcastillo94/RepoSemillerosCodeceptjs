Feature: Network Mocking de episodios de Rick and Morty

  @episodios001
  Scenario: Episodios mockeados reemplazan a los episodios reales

    Given el mock de episodios está activo
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot"
      @episodios002
  Scenario: La API de episodios devuelve error 503

    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"
      @episodios003
  Scenario: Modificar el nombre del primer episodio real

    Given el mock intercepta la respuesta real y renombra al primer episodio como "Episodio de Vianey"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio de Vianey" en la respuesta
      @episodios004
  Scenario: Mock de un episodio específico por ID

    Given el mock del episodio con ID 3 está activo
    When el usuario consulta el personaje con ID 3
    When el usuario consulta el episodio con ID 3
    Then ve el nombre del episodio "Prueba de Automatización"
    And ve la fecha "Semilleros 2026"
    And ve el código de episodio "S99E99"