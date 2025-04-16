Feature: Automatización de Telcel

    Scenario: Buscar plan Telcel Plus
    Given estoy en la página de inicio de Telcel
    When hago clic en Ver todos los Planes
    Then debo ver un plan Telcel Plus
    
    Scenario: Recargar saldo de $100
        Given estoy en la página de inicio de Telcel
        And navego a la sección "Paquetes y Recargas"
        When ingreso el número "5512345678"
        And elijo la opción "Recarga tu Saldo Amigo"
        And selecciono el monto de "$100"
        Then debo ver el resumen de la recarga y un formulario de pago


    Scenario: Registrarme como nuevo usuario
    Given estoy en la página de inicio de Telcel
    When hago clic en "Mi Telcel"
    And selecciono "Regístrate"
    Then debo ver el formulario de registro

    Scenario: Validar elementos del menú
        Given estoy en la página de inicio de Telcel
        When despliego el menú principal
        Then veo sus items y submenús correspondientes

    @test
    Scenario: Validar sección Contáctanos
        Given estoy en la página de inicio de Telcel
        When hago clic en "Políticas y códigos"
        And selecciono el acceso rapido "Contáctanos"
        And selecciono el estado "aguascalientes" y la modalidad "Plan de renta"
        Then debo ver la "region" y los "numeros de contacto" correspondientes