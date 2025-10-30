Feature: Validación del menú Planes y detalle del Plan Telcel Plus 5G

@TC002 @planes_page @Xochitl
Scenario: Validar navegación hacia la sección de Planes y submenús
    Given el usuario esta en la página principal de Telcel
    When la página principal termina de cargar
    And el usuario accede al menú principal
    And el usuario se posiciona sobre la opción "Móvil"
    Then los submenús de Móvil son visibles y funcionales

@TC003 @plan5g_page @Xochitl
Scenario: Validar acceso al detalle de un plan específico
    Given el usuario se encuentra dentro de la página de planes de Telcel
    When  hace clic en el botón "Ver más" del Plan Telcel Ultra
    And hace clic en el botón "Ver detalles" del plan Telcel Ultra 5
    Then se muestra la información detallada del plan Telcel Ultra 5