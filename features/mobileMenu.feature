@TC011 @Xochitl
Feature: Validar comportamiento del menú en vista móvil

Scenario: Abrir menú hamburguesa y validar opciones disponibles
    Given el usuario accede dentro de la página principal de Telcel
    When simula vista móvil y abre el menú hamburguesa
    Then las opciones del menú lateral son visibles y navegables