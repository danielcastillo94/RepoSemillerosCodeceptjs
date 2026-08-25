Feature: Búsqueda de productos en Liverpool @liverpool

  Como usuario de Liverpool
  Quiero buscar productos
  Para encontrar artículos disponibles en la tienda

  Scenario: Buscar un producto existente @TC001
    Given El usuario se encuentra en la página principal de Liverpool
    When El usuario busca el producto "tenis"
    Then El usuario visualiza resultados de búsqueda

  Scenario: Buscar un producto inexistente @TC002
    Given El usuario se encuentra en la página principal de Liverpool
    When El usuario busca el producto "productoxyz123456789"
    Then El usuario visualiza el mensaje de producto no encontrado

  Scenario: Validar información de los productos mostrados @TC003
    Given El usuario se encuentra en la página principal de Liverpool
    When El usuario busca el producto "tenis"
    Then El usuario visualiza productos con nombre y precio

  Scenario: Expandir categoría principal @TC004
    Given El usuario se encuentra en la página principal de Liverpool
    When El usuario abre el menú de "Categorías"
    And El usuario selecciona la categoría "Mujer"
    Then El usuario visualiza la subcategoría "Ropa"

  Scenario: Navegar a la categoría Ropa @TC005
    Given El usuario se encuentra en la página principal de Liverpool
    When El usuario abre el menú de "Categorías"
    And El usuario selecciona la categoría "Mujer"
    And El usuario selecciona la subcategoría "Ropa"
    Then El usuario visualiza la página de Ropa