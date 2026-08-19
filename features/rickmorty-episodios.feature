@rickmortyEpisodes
Feature: Network Mocking de episodios de Rick and Morty

@episodios @TC-A
Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de episodios está activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot"

@episodios @TC-B
Scenario: API de episodios devuelve error 503
    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

@episodios @TC-C
Scenario: Modificar la respuesta real del primer episodio
    Given el mock intercepta la respuesta real y renombra al primer episodio como "Episodio de Ricardo"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio de Ricardo" en la respuesta

@episodios @TC-D
Scenario: Mock de un episodio específico por ID
    Given el mock del episodio con ID 3 devuelve "Prueba de Automatización", fecha "Semilleros 2026" y código "S99E99"
    When el usuario consulta el personaje con ID 3
    When el usuario consulta el episodio con ID 3
    Then ve el episodio "Prueba de Automatización" en la respuesta
    And la respuesta contiene el mensaje "Semilleros 2026"
    And la respuesta contiene el mensaje "S99E99"