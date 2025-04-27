Feature: Validaciones funcionales en la plataforma de YouTube
  
  Background: navegar a la página de YouTube
    Given abro la página de YouTube

  Scenario: Validar fecha de publicación reciente
    Given realizo una búsqueda con el texto "bbng" 
    When abro los filtros de búsqueda
    And selecciono el filtro Hoy
    Then visualizo videos con fecha de publicación reciente

  Scenario: Validación de una búsqueda en YouTube
    When realizo una búsqueda con el texto "Falling In Reverse"
    Then Verifico que al menos un resultado contenga "Falling In Reverse"
    And Verifico que el primer resultado muestre una miniatura visible
    And Verifico que el primer resultado muestre un título visible
    And Verifico que el primer resultado contenga una duración en formato mm:ss
  
  Scenario: Navegar al canal 
    Given realizo una búsqueda con el texto "Deportes"
    When hago clic en el nombre del canal del primer resultado
    When voy a la seccion videos
    Then debería ver el nombre del canal
    And debería ver la pestaña de Videos
    And debería ver al menos un video con miniatura y título


  Scenario: Validación de duración de video en campo oculto 
    Given realizo una búsqueda con el texto "lofi-music"
    Then verifico que el primer resultado contiene un campo con la duración
    And verifico que dicho campo está oculto
    And verifico que la duración tiene un formato válido
  
  Scenario Outline: Validación de carga inicial y elementos clave en la página de YouTube
    Then debería ver: "<elemento>"

    Examples:
    | elemento                          |
    | Logo de YouTube                   |
    | Campo de búsqueda                 |
    | Botón de Iniciar sesión           |
    | Al menos 10 miniaturas de video   |