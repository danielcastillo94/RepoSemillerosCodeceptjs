Feature: Mocking YouTube API
   @test 
    Scenario: Validar cambio de miniaturas en busqueda de video
    Given navego al la página de youtube
        When busco el video "asvfsdvd"
        Then valido que secambiaron las miniaturas de los videos