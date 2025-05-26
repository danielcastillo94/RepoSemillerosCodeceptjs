Feature: Cargar y descargar un archivo

  @upload
  Scenario: Usuario sube un archivo exitosamente
    Given que el usuario está en la página de carga de archivos
    When el usuario adjunta un archivo válido
    Then el archivo debería mostrarse como cargado

  @download
  Scenario: Usuario descarga un archivo exitosamente
    Given que el usuario está en la página de descarga
    When el usuario hace clic en el botón de descarga
    Then el archivo debería estar presente en la carpeta de descargas

