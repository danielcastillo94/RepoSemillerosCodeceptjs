Feature: Validación del botón "Explorar" y navegación en YouTube
  @test
  Scenario: Usuario hace clic en "Explorar" y navega a Música desde prueba.feature @test
    Given el usuario navega a la página principal de YouTube
    When hace clic en el botón "Explorar"
    Then debería ver las categorías "Tendencias, Música, Noticias"
    When selecciona la categoría "Música"
    Then debería ver los elementos del video visibles
