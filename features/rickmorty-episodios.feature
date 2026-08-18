@episodios
Feature: Network mocking de episodios de Rick and Morty

  Scenario: Episodios mockeados reemplazan a los reales
    Given activo un mock de episodios con datos inventados
    When navego al endpoint de episodios
    Then debo ver "Episodio Semillero Alpha"
    And debo ver "Episodio Semillero Beta"
    And no debo ver "Pilot"

  Scenario: Error 503 en la API de episodios
    Given activo un mock de error 503 para episodios
    When navego al endpoint de episodios
    Then debo ver "Servicio de episodios no disponible"

  Scenario: Modificar la respuesta real de episodios
    Given intercepto la respuesta real de episodios
    When navego al endpoint de episodios
    Then debo ver "Episodio de Alberto"

  Scenario: Mock de un episodio específico por ID
    Given activo un mock para el episodio 3
    When navego al endpoint del personaje 3
    And navego al endpoint del episodio 3
    Then debo ver "Prueba de Automatización"
    And debo ver "Semilleros 2026"
    And debo ver "S99E99"