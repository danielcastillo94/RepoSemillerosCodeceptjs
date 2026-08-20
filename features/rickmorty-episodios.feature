@rickmortyEpisode
Feature: Demostración de Network Mocking con Rick and Morty API
  Como tester
  Quiero interceptar y controlar las respuestas de red
  Para probar distintos escenarios sin depender del servidor real

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 1: Reemplazar episodios reales con episodios falsos Jesus 
  # ─────────────────────────────────────────────────────────────────
  @mock-episode
  Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de espisodios está activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de epsiodios
    Then ve el espisodio "Episodio Semillero Alpha" en la respuesta
    And  ve el espisodio "Episodio Semillero Beta" en la respuesta
    And  no ve el espisode real "Pilot"

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 2: Error 503 en la API de episodios
  # ─────────────────────────────────────────────────────────────────
  @mock-error-episode-503
  Scenario: Error 503 en la API de episodios
    Given el mock de episode devuelve un error 503
    When el usuario consulta la API de epsiodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 3: Interceptar la respuesta real y modificarla
  # ─────────────────────────────────────────────────────────────────
  @mock-modify-real-episode
  Scenario: La respuesta real es interceptada y el primer episode es renombrado
    Given el mock intercepta la respuesta real y renombra al primer episodio como "Episode de Jesus Cortes Cortes"
    When el usuario consulta la API de epsiodios 
    Then ve el nombre "Episode de Jesus Cortes Cortes" en la respuesta

 
  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 4: Mockear un Espisodio específico por ID
  # ─────────────────────────────────────────────────────────────────
  @mock-espisodio-id
  Scenario: El Episodio con ID 1 es reemplazado por uno personalizado
    Given el mock del espisodio con ID 3 devuelve "Prueba de Automatización" con fecha "Semilleros 2026" y espisodio "S99E99"
    When el usuario consulta el episodio con ID 3
    Then ve el nombre "Prueba de Automatización" en la respuesta
    And  ve la fecha "Semilleros 2026" en la respuesta
    And ve el espísodio "S99E99" en la respuesta