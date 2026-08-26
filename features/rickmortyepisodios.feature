@episodios
Feature: Network mocking sobre el endpoint de episodios de Rick and Morty

  Background: Preparando el navegador
    Given que el usuario va a consultar la API de episodios de Rick and Morty

  @TC-EP-001
  Scenario: Episodios mockeados reemplazan a los reales
    Given se activa un mock que devuelve los episodios "Episodio Semillero Alpha" y "Episodio Semillero Beta" en "/api/episode"
    When el usuario navega a la API de episodios
    Then se muestra en la respuesta el episodio "Episodio Semillero Alpha"
    And se muestra en la respuesta el episodio "Episodio Semillero Beta"
    And no se muestra en la respuesta el episodio "Pilot"

  @TC-EP-002
  Scenario: Error 503 en la API de episodios
    Given se activa un mock que devuelve un error 503 en "/api/episode" con el mensaje "Servicio de episodios no disponible"
    When el usuario navega a la API de episodios
    Then se muestra en la respuesta el mensaje "Servicio de episodios no disponible"

  @TC-EP-003
  Scenario: Interceptar y modificar la respuesta real del primer episodio
    Given se intercepta la respuesta real de "/api/episode" para modificar el nombre del primer episodio por "Episodio de Diana"
    When el usuario navega a la API de episodios
    Then se muestra en la respuesta el episodio "Episodio de Diana"

  @TC-EP-004
  Scenario: Mock de un episodio específico por ID
    Given se activa un mock para el episodio con ID "3" con nombre "Prueba de Automatización", fecha "Semilleros 2026" y código "S99E99"
    When el usuario navega al detalle del personaje con ID "3"
    Then la respuesta del personaje no está interceptada
    When el usuario navega al detalle del episodio con ID "3"
    Then se muestra en la respuesta el episodio "Prueba de Automatización"
    And se muestra en la respuesta la fecha "Semilleros 2026"
    And se muestra en la respuesta el código de episodio "S99E99"