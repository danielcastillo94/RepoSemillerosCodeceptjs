@TC009 @Xochitl
Feature: Validar cambio de estado/región en el portal

Scenario: Cambiar el estado desde el selector del encabezado y confirmar actualización
    Given el usuario accede dentro de la página principal de Telcel
    When cambia el estado a "Chiapas"
    Then el estado seleccionado se actualiza correctamente