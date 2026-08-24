@episodios
Feature: Network Mocking con Rick and Morty API - Episodios
  Como tester
  Quiero interceptar y controlar las respuestas de red de los episodios
  Para probar distintos escenarios sin depender del servidor real

  @mock-episodios
  Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de episodios esta activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot"

  @mock-error-503
  Scenario: Error 503 en la API de episodios
    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

  @mock-modify-real-episodio
  Scenario: Interceptar y modificar la respuesta real
    Given el mock intercepta la respuesta real y renombra el primer episodio como "Episodio de Victor Morales"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio de Victor Morales" en la respuesta

  @mock-episodio-id
  Scenario: Mock de un episodio especifico por ID
    Given el mock del episodio con ID 3 devuelve "Prueba de Automatización", "Semilleros 2026" y "S99E99"
    When el usuario consulta el personaje con ID 3 para validar que no es interceptado
    And el usuario consulta el episodio con ID 3
    Then ve el episodio "Prueba de Automatización" en la respuesta
    And la respuesta contiene el mensaje "Semilleros 2026"
    And la respuesta contiene el mensaje "S99E99"