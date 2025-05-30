Feature: Prueba de carga y descarga de archivos demoQA
    
    Background: navegar a la página de demoQA
        Given abro la página de demoQA de carga de archivos
    @demo
    Scenario: Validar carga de un archivo en demoqa.com
        When selecciono un archivo para subir
        Then el archivo debe mostrarse como cargado correctamente
    @demo
    Scenario: Validar descarga de archivo en demoqa.com

        When hago clic en el botón de descarga
        Then el archivo debe descargarse correctamente