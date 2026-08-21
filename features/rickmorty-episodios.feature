@rickmorty-episodios
Feature: Mock básico de episodios y simulación de error

  @mock-episodios
  Scenario: Episodios mockeados reemplazan a los reales
    Given el mock de episodios está activo con "Episodio Semillero Alpha" y "Episodio Semillero Beta"
    When el usuario consulta la API de episodios
    Then ve el episodio "Episodio Semillero Alpha" en la respuesta
    And ve el episodio "Episodio Semillero Beta" en la respuesta
    And no ve el episodio real "Pilot" en la respuesta

  @mock-error-503
  Scenario: La API simula un error interno del servidor
    Given el mock de episodios devuelve un error 503
    When el usuario consulta la API de episodios
    Then la respuesta contiene el mensaje "Servicio de episodios no disponible"

  @mock-episodiomodify-real
  Scenario: La respuesta real es interceptada y el primer episodio es renombrado
    Given el mock intercepta la respuesta real y renombra el primer episodio como "Episodio de Omar Fuentes"
    When el usuario consulta la API de episodios
    Then ve el nombre "Episodio de Omar Fuentes" en la respuesta

  @mock-episodio-id
  Scenario: El episodio con ID 3 es reemplazado por datos personalizados
    Given el mock del episodio con ID 3 es interceptado y devuelve datos de nombre: "Mock Automatización", air_date: "18 de Agosto, 2026" y código de episodio "S08E18" personalizados
    When el usuario consulta el personaje con ID 3 con datos reales
    And el usuario consulta el episodio con ID 3
    Then ve el nombre del episodio "Mock Automatización" en la respuesta
    And ve el air_date "18 de Agosto, 2026" en la respuesta
    And ve código de episodio "S08E18" en la respuesta