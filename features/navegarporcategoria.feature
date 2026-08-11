@navegacioncategoria
Feature: Navegación por Categorías
Background: Caso inicial
    Given El usuario se encuentra en la pagina principal
@TC004
Scenario: Expandir categoría principal
    When El usuario da clic sobre "Categorías"
    Then El usuario observa un menu lateral del lado izquierdo
@TC005
Scenario: Acceder a subcategoría
    When El usuario da clic sobre "Categorías"
    When El usuario da clic sobre la categoria "Hombre"
    When El usuario da clic en la subcategoría "Zapatos"
    Then El usuario observa un nuevo menu y imagenes relacionados a la categoria
@TC006
Scenario: Validar productos de categoría
    When El usuario da clic en la opcion "Tenis Casuales"
    Then El usuario ve todos los resultados relacionados de la subcategoría