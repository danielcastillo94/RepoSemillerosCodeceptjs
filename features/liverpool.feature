@liverpool
Feature: Búsqueda de productos en Liverpool

Como usuario de Liverpool
Quiero buscar productos
Para encontrar artículos disponibles en la tienda

@TC001

Scenario: Buscar un producto existente


Given El usuario se encuentra en la página principal de Liverpool
When El usuario busca el producto "tenis"
Then El usuario visualiza resultados de búsqueda

@TC002

Scenario: Buscar un producto inexistente

Given El usuario se encuentra en la página principal de Liverpool
When El usuario busca el producto "productoxyz123456789"
Then El usuario visualiza el mensaje de producto no encontrado

@TC003

Scenario: Validar información de los productos mostrados

Given El usuario se encuentra en la página principal de Liverpool
When El usuario busca el producto "tenis"
Then El usuario visualiza productos con nombre y precio

@TC004

Scenario: Expandir categoría principal

Given El usuario se encuentra en la página principal de Liverpool
When El usuario abre el menú de "Categorías"
And El usuario selecciona la categoría "Mujer"
Then El usuario visualiza la subcategoría "Ropa"

@TC005

Scenario: Navegar a la categoría Ropa

  Given El usuario se encuentra en la página principal de Liverpool
  When El usuario abre el menú principal
  And El usuario abre el menú de "Categorías"
  And El usuario selecciona la categoría "Mujer"
  And El usuario selecciona la subcategoría "Ropa"
  Then El usuario visualiza la página de Ropa


