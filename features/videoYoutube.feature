# Autor: Armando

Feature: Validación de resultados relacionados en YouTube

  Background: Abrir página principal de YouTube
    Given abro la página de YouTube

  Scenario: Validar título y videos relacionados correctamente
    When busco el video "Falling In Reverse"
    And entro al primer video de los resultados
    Then debería ver el título "Falling In Reverse - \"Watch The World Burn\""
    And deberían mostrarse al menos 5 videos recomendados en la barra lateral

  Scenario: Validar título distinto de otro video
    When busco el video "Metallica Nothing Else Matters"
    And entro al primer video de los resultados
    Then debería ver el título "Metallica: Nothing Else Matters (Official Music Video)"
    And deberían mostrarse al menos 5 videos recomendados en la barra lateral

  Scenario: Título incorrecto provoca error
    When busco el video "Neffex"
    And entro al primer video de los resultados
    Then debería ver el título "Este título no existe"
