Feature: Validación de resultados relacionados

  Background: Buscar video específico
    Given abro la página de YouTube
    When busco el video "Falling In Reverse"
    
  Scenario: Validar título y videos relacionados
    When entro al primer video de los resultados
    Then debería ver el título 'Falling In Reverse - "Watch The World Burn"'
    And deberían mostrarse al menos 5 videos recomendados en la barra lateral
