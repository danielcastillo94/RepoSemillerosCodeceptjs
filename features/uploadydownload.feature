Feature: Carga y descarga de archivos

  @carga
  Scenario: Carga de archivos
    Given estoy en demoqa
    When Cargo un archivo
    Then Valido el archivo cargados

    @descarga
  Scenario: Descarga de archivos
    Given estoy en demoqa
    When Descargo un archivo
    Then Valido el archivo descargado