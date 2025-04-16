Feature: Funcionalidades principales de Amazon

  Scenario: Iniciar sesión en Amazon exitosamente
    Given estoy en la página de inicio de Amazon
    When doy clic en el botón de iniciar sesión
    And ingreso mi usuario y contraseña de Amazon
    Then debería ver el nombre del usuario en la barra superior

  Scenario: Buscar y seleccionar el primer producto ordenado de mayor a menor
    Given estoy en la página principal de Amazon
    When busco el producto "Laptop"
    And aplico el filtro de precio de mayor a menor
    And selecciono el primer producto de la lista
    Then debería ver el nombre y el precio del producto

  Scenario: Agregar un producto al carrito
    Given estoy en la página de resultados de búsqueda de "Laptop"
    When selecciono el primer producto disponible
    And doy clic en "Agregar al carrito"
    Then debería ver el mensaje "Se agregó al carrito"

  Scenario: Acceder al carrito de compras
    Given estoy en la página principal de Amazon
    When doy clic en el ícono del carrito
    Then debería ver el título del carrito de compras

  Scenario: Aplicar filtro de precio más bajo
    Given estoy en la página de resultados de búsqueda de "Laptop"
    When selecciono el filtro de ordenamiento por precio más bajo
    Then debería ver productos ordenados por precio
