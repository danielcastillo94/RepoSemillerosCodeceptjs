Feature: Validar el acceso al plan Telcel Plus 5G
    @Prueba3
    Scenario: Ingreso al detalle del plan Telcel Plus 5G
        Given el usuario esta en la pagina de tarifas
        When el usuario elige el plan 5G y da click en comparar
        Then el usuario puede ver los detalles del plan