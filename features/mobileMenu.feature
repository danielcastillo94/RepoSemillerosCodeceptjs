# TC011 | HU-001 | v.1.0

@TC011 @mobile_menu_page
Feature: Validar comportamiento del menú en vista móvil

Scenario: Abrir menú hamburguesa y validar opciones disponibles
    Given el usuario accede a la página principal de Telcel
    When simula vista móvil y abre el menú hamburguesa
    Then las opciones del menú lateral son visibles y navegables
