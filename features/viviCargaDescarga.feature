
Feature: Validar carga, descarga y mockeo de datos

  Scenario: Validar carga de archivo
    Given estoy en la página de carga de archivo
    When subo el archivo "testfile.txt"
    Then debería ver que el archivo se cargó correctamente

  Scenario: Validar descarga de archivo
    Given estoy en la página de carga de archivo
    When descargo el archivo "sampleFile.jpeg"
    Then debería existir el archivo descargado

@mock
Scenario Outline: Mockeo resultados youtube con diferentes términos de búsqueda
  Given Estoy en youtube
  When Hago una busqueda con mockeo de "<termino>"
  Then visualizo videos de karaoke

  Examples:
    | termino   |
    | haash   |
    | triste    |
    | fiesta  |