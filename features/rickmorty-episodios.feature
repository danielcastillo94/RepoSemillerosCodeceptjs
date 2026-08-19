@mock-episodios
Feature: Demostración de Mocking con los episodios de Rick and Morty API

  @escenario-a
  Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de episodios está activo con los episodios "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario navega en la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot" en la respuesta

  @escenario-b
  Scenario: Escenario B — Error 503 en la API de episodios
    Given el mock de episodios devuelve un error 503 con el mensaje "Servicio de episodios no disponible"
    When el usuario navega en la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

  @escenario-c
  Scenario: Interceptar y modificar la respuesta real
    Given la respuesta real de la API es interceptada y el primer episodio es renombrado como "Episodio de Irving"
    When el usuario navega en la API de episodios con el id=3
    Then ve el nombre "Episodio de Irving" en la respuesta

  @escenario-d
  Scenario: Mock de un episodio específico por ID
    Given el mock del episodio con ID 3 en la API devuelve el nombre "Prueba de Automatización", air_date "Semilleros 2026" y episode "S99E99"
    When el usuario navega en API de personajes con el id=3
    And el usuario navega en la API de episodios con el id=3
    Then ve el nombre "Prueba de Automatización" en la respuesta
    And ve el air_date "Semilleros 2026" en la respuesta
    And ve el código de episodio "S99E99" en la respuesta