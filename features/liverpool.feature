Feature: Validación de funcionalidades principales del portal de Liverpool
    Background: Accede a la página principal
    Given El usuario está en la página principal

    @TC001
    Scenario: Búsqueda de producto existente
        When El usuario hace clic en la barra de búsqueda
        And El usuario introduce "zapatillas" en la barra de búsqueda
        And El usuario presiona la tecla "Enter"
        Then El usuario puede ver los resultados coincidentes de la búsqueda

    @TC002
    Scenario: Búsqueda de producto inexistente
        When El usuario hace clic en la barra de búsqueda
        And El usuario introduce "duolingo" en la barra de búsqueda
        And El usuario presiona la tecla "Enter"
        Then El usuario puede ver resultados que no coinciden con la búsqueda inicial