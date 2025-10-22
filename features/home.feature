# TC001 | HU-001 | v.1.0

@TC001 @inicio @home_page
Feature: Validar la carga del portal y los elementos principales del home

@logotipo @menuprincipal @bannerinicial
Scenario: Verificar que el logotipo, menú principal y banner inicial se carguen correctamente
    Given el usuario accede a la página principal de Telcel
    When la página principal termina de cargar
    Then el logotipo de Telcel es visible
    And el menú principal es visible y navegable
    And el banner inicial es visible y funcional