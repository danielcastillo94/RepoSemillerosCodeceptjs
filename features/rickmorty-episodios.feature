@episodios
Feature: Simulacion de respuestas de la API de episodios de Rick and Morty
  Como equipo de automatizacion
  Quiero controlar las respuestas del servicio de episodios
  Para validar escenarios que no puedo reproducir contra el servidor real

  @RM001
  Scenario: Los episodios simulados reemplazan a los episodios reales
    Given el servicio de episodios devuelve los episodios "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la lista de episodios
    Then el usuario ve el texto "Episodio Semillero Alpha"
    And el usuario ve el texto "Episodio Semillero Beta"
    And el usuario no ve el texto "Pilot"

  @RM002
  Scenario: El servicio de episodios responde con un error de disponibilidad
    Given el servicio de episodios falla con el mensaje "Servicio de episodios no disponible"
    When el usuario consulta la lista de episodios
    Then el usuario ve el texto "Servicio de episodios no disponible"

  @RM003
  Scenario: La respuesta real se modifica antes de llegar al usuario
    Given el primer episodio real se renombra como "Episodio de Hector"
    When el usuario consulta la lista de episodios
    Then el usuario ve el texto "Episodio de Hector"

  @RM004
  Scenario: Solo el episodio con ID 3 es simulado
    Given el episodio con ID 3 devuelve "Prueba de Automatizacion", "Semilleros 2026" y "S99E99"
    When el usuario consulta el personaje con ID 3
    Then el usuario no ve el texto "Prueba de Automatizacion"
    When el usuario consulta el episodio con ID 3
    Then el usuario ve el texto "Prueba de Automatizacion"
    And el usuario ve el texto "Semilleros 2026"
    And el usuario ve el texto "S99E99"
