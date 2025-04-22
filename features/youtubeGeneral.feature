Feature: Validaciones funcionales en la plataforma de YouTube

    Background: navegar a la página de YouTube
        Given abro la página de YouTube
    @youtube
    Scenario: Validar fecha de publicación reciente
        Given realicé una búsqueda de videos
        When abro los filtros de búsqueda
        And selecciono el filtro Hoy
        Then visualizo videos con fecha de publicación reciente

  @canal
  Scenario: Navegar al canal 
    Given busco el video "Deportes"
    When hago clic en el nombre del canal del primer resultado
    When voy a la seccion videos
    Then debería ver el nombre del canal
    And debería ver la pestaña de Videos
    And debería ver al menos un video con miniatura y título
