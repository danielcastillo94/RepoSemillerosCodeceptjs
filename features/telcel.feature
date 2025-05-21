#Hector

Feature: Automatización de Telcel

    Scenario: Buscar plan Telcel Plus
        Given estoy en la pagina de inicio de Telcel
        When hago clic en Ver todos los Planes
        Then debo ver un plan Telcel Plus

    Scenario Outline: Mobile recharge of '<amount>'
        Given estoy en la pagina de inicio de Telcel
        When recargo '<amount>' al numero '<phone_number>'
        Then debo ver el resumen de la recarga y un formulario de pago

        Examples:
            | amount  | phone_number |
            | $100    | 5512345678   |
            | $200    | 5512345678   |
            | $300    | 5512345678   |

    # Not implemented yet
    #Scenario: Registrarme como nuevo usuario
    #    Given estoy en la pagina de inicio de Telcel
    #    When hago clic en "Mi Telcel"
    #    And selecciono "Regístrate"
    #    Then debo ver el formulario de registro
    
    #Scenario: Validar elementos del menú
    #    Given estoy en la pagina de inicio de Telcel
    #    When despliego el menú principal
    #    Then veo sus items y submenús correspondientes

    Scenario: Validar sección Contáctanos
        Given estoy en la pagina de inicio de Telcel
        When hago clic en "Políticas y códigos"
        And selecciono el acceso rapido "Contáctanos"
        And selecciono el estado "ciudad de méxico" y la modalidad "Plan de Renta"
        And realizo la búsqueda
        Then debo ver la region y los números de contacto