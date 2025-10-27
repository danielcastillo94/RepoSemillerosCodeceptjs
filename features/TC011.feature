Feature: Validar comportamiento del menú en vista móvil
    @Prueba11
    Scenario: Simular vista móvil, abrir el menú hamburguesa y verificar las opciones disponibles
        Given el usuario accede al portal principal de Telcel
        When el usuario abre el menú hamburguesa
        Then el usuario visualiza las opciones disponibles