@episodios

Feature: Network Mocking de episodios de Rick and Morty API

  Como tester
  Quiero interceptar y controlar las respuestas de la API de episodios
  Para probar diferentes escenarios sin depender del servidor real


  @episodios-mock

  Scenario: Los episodios mockeados reemplazan a los episodios reales

    Given el mock de episodios está activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot"


  @episodios-error

  Scenario: La API de episodios simula un error 503

    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"


  @episodios-modificar

  Scenario: La respuesta real es interceptada y el primer episodio es renombrado

    Given el mock intercepta la respuesta real y renombra al primer episodio como "Episodio de Ximena"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio de Ximena" en la respuesta


  @episodio-id

  Scenario: El episodio con ID 3 es reemplazado por uno personalizado

    Given el mock del episodio con ID 3 devuelve "Prueba de Automatización" con fecha "Semilleros 2026" y código "S99E99"
    When el usuario consulta el personaje con ID 3
    And el usuario consulta el episodio con ID 3
    Then ve el nombre "Prueba de Automatización" en la respuesta
    And ve la fecha "Semilleros 2026" en la respuesta
    And ve el código de episodio "S99E99" en la respuesta