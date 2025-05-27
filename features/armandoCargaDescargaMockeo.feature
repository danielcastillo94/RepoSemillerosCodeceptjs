Feature: Validar carga, descarga y mockeo de datos

  Scenario: Validar carga de archivo
    Given estoy en la página de carga de archivo
    When subo el archivo "testfile.txt"
    Then debería ver que el archivo se cargó correctamente

  Scenario: Validar descarga de archivo
    Given estoy en la página de carga de archivo
    When descargo el archivo "sampleFile.jpeg"
    Then debería existir el archivo descargado

  Scenario: Validar mockeo de datos en YouTube
    Given estoy en la página de YouTube
    When mockeo la respuesta de la API de YouTube
    Then debería ver el título "Mocked Title"
