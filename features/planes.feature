# TC002-TC003 | HU-001 | v.1.0

@planes
Feature: Validación del menú Planes y detalle del Plan Telcel Plus 5G

@TC002 @planes_page @menuPlanes
Scenario: Validar navegación hacia la sección de Planes y submenús
    Given el usuario accede a la página principal de Telcel
    When la página principal termina de cargar
    And el usuario accede al menú principal
    And el usuario se posiciona sobre la opción "Móvil"
    Then los submenús de Móvil son visibles y funcionales

@TC003 @plan5g_page @telcel5G
Scenario: Validar ingreso al detalle de un plan específico
    Given el usuario se encuentra en la página de planes de Telcel
    When  hace clic en el botón "Ver más" del Plan Telcel Ultra
    And hace clic en el botón "Ver detalles" del plan Telcel Ultra 5
    Then se muestra la información detallada del plan Telcel Ultra 5
