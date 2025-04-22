Feature: Validaciones funcionales en la plataforma de YouTube
  
  Background: navegar a la página de YouTube
     Given abro la página de YouTube

   @youtube
     Scenario: Validar fecha de publicación reciente
        Given realicé una búsqueda de videos
        When abro los filtros de búsqueda
        And selecciono el filtro Hoy
        Then visualizo videos con fecha de publicación reciente

    @busqueda
    Scenario: Validación de una búsqueda en YouTube
      Given Estoy en la página principal de YouTube
      When Escribo Falling In Reverse y presiono Enter en la barra de búsqueda
      Then Verifico que al menos un resultado contenga Falling In Reverse
      And Verifico que el primer resultado muestre una miniatura visible
      And Verifico que el primer resultado muestre un título visible
      And Verifico que el primer resultado contenga una duración en formato mm:ss
  
  @canal
  Scenario: Navegar al canal 
    Given busco el video "Deportes"
    When hago clic en el nombre del canal del primer resultado
    When voy a la seccion videos
    Then debería ver el nombre del canal
    And debería ver la pestaña de Videos
    And debería ver al menos un video con miniatura y título
