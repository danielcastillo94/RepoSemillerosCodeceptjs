Feature: Búsqueda de productos en Liverpool

  @LP001
  Scenario: Buscar un producto existente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then se muestran resultados relacionados con la búsqueda

  @LP002
  Scenario: Buscar un producto inexistente
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps51"
    Then no se muestran productos para "ps51"

  @LP003
  Scenario: Validar resultados mostrados
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    Then los resultados muestran productos relacionados con "Ps5"

    @LP004
Scenario: Expandir categoría principal
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When abre el menú de categorías
  Then puede visualizar la categoría "Vinos y Gourmet"

@LP005
Scenario: Acceder a una categoría
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When navega a la categoría "Vinos y Gourmet"
  Then se muestra la página de Vinos y Gourmet

@LP006
Scenario: Validar contenido de la categoría
  Given que el usuario se encuentra en la página principal de Liverpool en vista móvil
  When navega a la categoría "Vinos y Gourmet"
  Then se visualiza el encabezado "Vinos y Gourmet"

  @LP007
  Scenario: Filtrar productos por precio
    Given que el usuario se encuentra en la página principal de Liverpool
    When busca el producto "ps5"
    And abre el filtro de precios
    And selecciona un rango de precio
    Then se muestran productos filtrados por precio