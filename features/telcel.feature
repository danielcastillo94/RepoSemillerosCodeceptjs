Feature: Navegación en el sitio web de Telcel

  Scenario: Buscar un equipo en la página principal
    Given estoy en la página de Telcel
    When busco "iPhone 15"
    Then debería ver resultados relacionados con "iPhone 15"

  Scenario: Acceder a la sección de teléfonos
    Given estoy en la página de Telcel
    When selecciono telefonos y smartphones
    Then debería ver la lista de teléfonos disponibles

  Scenario: Filtrar teléfonos por marca Samsung
    Given estoy en la pagina Telcel y voy a la tienda
    When selecciono telefonos y smartphones
    Then selecciono la marca

  Scenario: Seleccionar un producto y agregarlo al carrito
    Given estoy en la página de Telcel
    When busco "iPhone 16"
    And selecciono el primer producto de la lista
    And agrego el producto al carrito
    Then debería ver el producto en el carrito

  # Scenario: Navegar a la sección Factura
  #   Given estoy en la página de Telcel
  #   When selecciono la opción de pago de factura
  #   When coloco el numero y lo confirmo
  

    