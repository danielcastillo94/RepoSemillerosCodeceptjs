Feature: Validar cambio de estado/región en el portal

@Prueba9
Scenario: Cambiar el estado desde el selector del encabezado y confirmar actualización del contenido regional
    Given el usuario accede al portal principal de Telcel
    When cambia el estado a "Aguascalientes"
    Then el estado seleccionado se actualiza correctamente