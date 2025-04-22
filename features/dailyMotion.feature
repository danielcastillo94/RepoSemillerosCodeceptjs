Feature: Validaciones funcionales dailyMotion

@Carga
Scenario: Validar carga de pagina de DailyMotion
        Given navego a la pagina
        When espero a que el contenido cargue
        Then verifico que se cargue el contenido
