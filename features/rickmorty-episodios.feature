@episodios
Feature: Ejericicio 4 del framework
    Realizacion del ejercicio 4 para la comprobacion del mocking
    en el framework
    #Escenario A
    @mock-episodes
    Scenario: La API simula la lista de episodios con datos mockeados - Prueba 1
        Given el mock de episodios devuelve "Episodio Semillero Alpha" y "Episodio Semillero Beta"
        When el usuario consulta la API de episodios
        Then la respuesta contiene "Episodio Semillero Alpha"
        And la respuesta contiene "Episodio Semillero Beta"
        And la respuesta no contiene "Pilot"
    #Escenario B.
    @mock-error-503
    Scenario: La API simula un servicio no disponible
        Given el mock de episodios devuelve un error 503 con el mensaje "Servicio de episodios no disponible"
        When el usuario consulta la API de episodios
        Then la respuesta contiene "Servicio de episodios no disponible"


    #Escenario C
    @mock-modify-response
    Scenario: Modificar el primer episodio de la respuesta real
        Given el sistema intercepta y modifica el primer episodio con el nombre "Episodio de Leonel"
        When el usuario consulta la API de episodios
        Then la respuesta contiene "Episodio de Leonel"

    #Escenario D
    @mock-episode-by-id
    Scenario: Mockear un episodio específico por ID sin afectar otros endpoints
        Given el mock para el episodio 3 devuelve el nombre "Prueba de Automatización", air_date "Semilleros 2026" y episode "S99E99"
        When el usuario navega a la URL "https://rickandmortyapi.com/api/character/3"
        And el usuario navega a la URL "https://rickandmortyapi.com/api/episode/3"
        Then la respuesta contiene "Prueba de Automatización"
        And la respuesta contiene "Semilleros 2026"
        And la respuesta contiene "S99E99"