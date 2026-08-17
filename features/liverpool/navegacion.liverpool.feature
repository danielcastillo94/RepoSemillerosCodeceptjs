@navegacion
Feature: Navegación en la página de Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    And el usuario hace clic en el botón de "Categorias"

  @TC-004
  Scenario: Expandir categoría principal
    When el usuario hace clic en la categoría "Hombres"
    Then se expande la categoría "Hombres"

  @TC-005
  Scenario: Acceder a subcategoría
    When el usuario hace clic en la categoría "Hombres"
    And el usuario hace clic en la subcategoría "Ropa"
    Then se muestra la página de la subcategoría "Ropa"

  @TC-006
  Scenario: Validar productos de categoría
    When el usuario hace clic en la categoría "Hombres"
    Then se muestran los productos correspondientes a la categoría "Hombres"