Feature: Validaciones funcionales 

@upload
Scenario: Validar carga y descarga de archivo
    Given Estoy en la pagina de Upload
    When Carga un archivo desde mi equipo
    Then Valido que el archivo se haya cargado correctamente
    When Hago clic en el boton de descarga
    Then Valido que el archivo se haya descargado correctamente

@mock
Scenario Outline: Mockeo resultados YouTube 
    Given Estoy en youtube
    When Hago una búsqueda de "Musica"
    And Hago otra búsqueda de "<busqueda>"
    Then visualizo videos de Musica

    Examples:
      | busqueda |
      | Videojuegos        |
      | Noticias           |
      | Futbol             |
