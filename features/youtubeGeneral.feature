Feature: Validaciones funcionales en la plataforma de YouTube
@youtube

  Scenario: Navegar al canal 
    Given busco el video "Deportes"
    When hago clic en el nombre del canal del primer resultado
    When voy a la seccion videos
    Then debería ver el nombre del canal
    And debería ver la pestaña de Videos
    And debería ver al menos un video con miniatura y título
