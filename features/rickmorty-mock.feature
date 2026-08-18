@rickmorty #Comentario de CI
Feature: Demostración de Network Mocking con Rick and Morty API
  Como tester
  Quiero interceptar y controlar las respuestas de red
  Para probar distintos escenarios sin depender del servidor real

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 1: Reemplazar personajes reales con personajes falsos
  # ─────────────────────────────────────────────────────────────────
  @mock-personajes
  Scenario: Los personajes mockeados reemplazan a los reales
    Given el mock de personajes está activo con "Test Semillero Rick" y "Test Semillero Morty"
    When el usuario consulta la API de personajes
    Then ve al personaje "Test Semillero Rick" en la respuesta
    And  ve al personaje "Test Semillero Morty" en la respuesta
    And  no ve al personaje real "Rick Sanchez"

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 2: Simular error 500 del servidor
  # ─────────────────────────────────────────────────────────────────
  @mock-error-500
  Scenario: La API simula un error interno del servidor
    Given el mock de personajes devuelve un error 500
    When el usuario consulta la API de personajes
    Then la respuesta contiene el mensaje "Error del servidor simulado"

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 3: Cambiar el título de la página web via DOM
  # ─────────────────────────────────────────────────────────────────
  @mock-titulo
  Scenario: El título y encabezado principal de la página son modificados
    Given el usuario visita el home de Rick and Morty
    When se inyecta el título "Prueba Semilleros Mock" en la página
    Then el título del tab del navegador muestra "Prueba Semilleros Mock"
    And  el encabezado principal muestra "Prueba Semilleros Mock"

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 4: Mockear un personaje específico por ID
  # ─────────────────────────────────────────────────────────────────
  @mock-personaje-id
  Scenario: El personaje con ID 1 es reemplazado por uno personalizado
    Given el mock del personaje con ID 1 devuelve "Test Semillero" de especie "Test Automatizador"
    When el usuario consulta el personaje con ID 1
    Then ve el nombre "Test Semillero" en la respuesta
    And  ve la especie "Test Automatizador" en la respuesta

  # ─────────────────────────────────────────────────────────────────
  # EJEMPLO 5: Interceptar la respuesta real y modificarla
  # ─────────────────────────────────────────────────────────────────
  @mock-modify-real
  Scenario: La respuesta real es interceptada y el primer personaje es renombrado
    Given el mock intercepta la respuesta real y renombra al primer personaje como "Interceptado por Semilleros"
    When el usuario consulta la API de personajes
    Then ve el nombre "Interceptado por Semilleros" en la respuesta
