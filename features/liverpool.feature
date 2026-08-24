@liverpool_victor
Feature: Automatización de tienda Liverpool (30 Flujos Core)
  Como usuario de Liverpool
  Deseo poder buscar productos y gestionar mi bolsa
  Para realizar compras en la plataforma

  Background:
    Given Victor ingresa al portal principal de Liverpool

  # --- BÚSQUEDA ---
  @TC_LIV_001 @humo
  Scenario: Buscar producto existente
    When busca el artículo "Mancuernas" en la barra superior
    Then el sistema despliega una lista de opciones

  @TC_LIV_002
  Scenario: Buscar producto inexistente
    When busca el artículo "asdfghjkl987" en la barra superior
    Then el sistema no devuelve ningún producto en la cuadrícula

  @TC_LIV_003
  Scenario: Validar resultados mostrados
    When busca el artículo "Nintendo Switch" en la barra superior
    Then el sistema despliega una lista de opciones

  # --- NAVEGACIÓN ---
  @TC_LIV_004
  Scenario: Expandir menú de categorías
    When abre el menú de categorías principales
    Then puede visualizar la categoría "Vinos y Gourmet"

  @TC_LIV_005
  Scenario: Acceder a subcategoría
    When navega directamente a la categoría de Vinos y Gourmet
    Then la página muestra el encabezado "Vinos y Gourmet"

  @TC_LIV_006
  Scenario: Validar productos de categoría
    When navega directamente a la categoría de Vinos y Gourmet
    Then el sistema despliega una lista de opciones

  # --- FILTROS DE PRECIO ---
  @TC_LIV_007
  Scenario: Filtrar precio de menor a mayor
    When busca el artículo "Zapatos" en la barra superior
    And ingresa un rango de precio de "500" a "1000"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_008
  Scenario: Filtrar por rango específico
    When busca el artículo "Reloj" en la barra superior
    And ingresa un rango de precio de "2000" a "5000"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_009
  Scenario: Validar que solo mostrar en rango
    When ingresa un rango de precio de "100" a "300"
    Then el sistema despliega una lista de opciones filtradas

  # --- FILTROS DE MARCA ---
  @TC_LIV_010
  Scenario: Seleccionar 1 marca
    When filtra los resultados por la marca "Nike"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_011
  Scenario: Seleccionar múltiples marcas
    When filtra los resultados por la marca "Adidas"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_012
  Scenario: Deseleccionar marca
    When filtra los resultados por la marca "Puma"
    Then el sistema despliega una lista de opciones filtradas

  # --- ORDENAMIENTO ---
  @TC_LIV_013
  Scenario: Ordenar por relevancia
    When busca el artículo "Lentes" en la barra superior
    And ordena los resultados por "Relevancia"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_014
  Scenario: Ordenar por precio menor a mayor
    When busca el artículo "Lentes" en la barra superior
    And ordena los resultados por "Menor precio"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_015
  Scenario: Ordenar por precio mayor a menor
    When busca el artículo "Lentes" en la barra superior
    And ordena los resultados por "Mayor precio"
    Then el sistema despliega una lista de opciones filtradas

  @TC_LIV_016
  Scenario: Ordenar por más nuevo
    When busca el artículo "Lentes" en la barra superior
    And ordena los resultados por "Lo más nuevo"
    Then el sistema despliega una lista de opciones filtradas

  # --- PDP BÁSICO ---
  @TC_LIV_017
  Scenario: Abrir detalle de producto
    When busca el artículo "Audífonos inalámbricos" en la barra superior
    And ingresa al detalle del primer resultado
    Then la página muestra el título y precio del artículo

  @TC_LIV_018
  Scenario: Validar nombre y descripción
    When busca el artículo "Termo" en la barra superior
    And ingresa al detalle del primer resultado
    Then la página muestra el título y precio del artículo

  @TC_LIV_019
  Scenario: Ver galería de imágenes
    When busca el artículo "Lentes de sol" en la barra superior
    And ingresa al detalle del primer resultado
    Then la página muestra la galería de imágenes del artículo

  # --- PDP STOCK ---
  @TC_LIV_020
  Scenario: Validar stock disponible
    When busca el artículo "Mancuernas" en la barra superior
    And ingresa al detalle del primer resultado
    Then el producto muestra disponibilidad para seleccionar cantidad

  @TC_LIV_021
  Scenario: Validar código de producto
    When busca el artículo "Perfume" en la barra superior
    And ingresa al detalle del primer resultado
    Then la página muestra el encabezado "Código"

  # --- CARRITO 1 PRODUCTO ---
  @TC_LIV_022
  Scenario: Agregar 1 producto al carrito
    When busca el artículo "Lentes de sol" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    Then el contador de la bolsa refleja el nuevo artículo

  @TC_LIV_023
  Scenario: Validar cantidad en badge
    When busca el artículo "Tablet" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    Then el contador de la bolsa refleja "1" artículo

  @TC_LIV_024
  Scenario: Ver confirmación de agregado
    When busca el artículo "Tablet" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    Then la página muestra el título y precio del artículo

# --- CARRITO MULTIPLES ---
  @TC_LIV_025
  Scenario: Agregar múltiples productos diferentes
    When busca el artículo "Lentes de sol" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    And busca el artículo "Reloj" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    Then el contador de la bolsa refleja "2" artículo

  @TC_LIV_026
  Scenario: Validar cantidad total en carrito
    When hace clic en el icono superior de la bolsa de compras
    Then el sistema redirige a la pantalla del carrito

  # --- CARRITO CAMBIOS ---
  @TC_LIV_027
  Scenario: Aumentar cantidad en carrito
    When busca el artículo "Audífonos" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    And hace clic en el icono superior de la bolsa de compras
    And aumenta la cantidad del producto en el carrito
    Then se muestra el subtotal de la compra

  @TC_LIV_028
  Scenario: Remover producto del carrito
    When busca el artículo "Termo" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    And hace clic en el icono superior de la bolsa de compras
    And elimina el artículo de la bolsa de compras
    Then la bolsa de compras se muestra vacía

  # --- CARRITO TOTALES ---
  @TC_LIV_029
  Scenario: Validar subtotal correcto
    When busca el artículo "Reloj" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    And hace clic en el icono superior de la bolsa de compras
    Then se muestra el subtotal de la compra

  @TC_LIV_030
  Scenario: Validar IVA en el total
    When busca el artículo "Termo" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    And hace clic en el icono superior de la bolsa de compras
    Then se indica que el total incluye IVA