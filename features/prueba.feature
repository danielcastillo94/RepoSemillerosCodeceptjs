Feature: Validación del botón "Explorar" y navegación en YouTube
@test
  Scenario: Usuario hace clic en "Explorar" y navega a la categoría Música
    Given el usuario está en la página principal de YouTube
    When haces clic en el botón "Explorar"
    And debería ver las categorías "Tendencias", "Música" y "Noticias"
    When hacer clic en la categoría "Música"
    Then debería ver videos con título y nombre del canal visible

