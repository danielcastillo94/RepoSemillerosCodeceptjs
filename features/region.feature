# TC009 | HU-001 | v.1.0

@TC009 @region_page
Feature: Validar cambio de estado/región en el portal

@region @encabezado
Scenario: Cambiar el estado desde el selector del encabezado y confirmar actualización
    Given el usuario accede a la página principal de Telcel
    When cambia el estado a "Coahuila"
    Then el estado seleccionado se actualiza correctamente
