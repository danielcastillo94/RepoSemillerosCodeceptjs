# Ejercicio 4: Carrito de compras
# Un usuario está en la página de detalle de un producto.
# Agrega distintas cantidades de distintos productos al carrito.
# El sistema debe reflejar correctamente la cantidad de cada producto en el carrito.
# Ellos deben definir la tabla de Examples con producto y cantidad.

Feature: Carrito de compras

    Scenario Outline: Añadir productos al carrito
        Given el usuario está en la pagina de detalles del producto "<producto>"
        When el usuario agrega "<cantidad>" unidades del producto al carrito
        Then el carrito debe reflejar "<cantidad>" unidades del producto "<producto>"
        Examples:
            | producto   | cantidad |
            | Camiseta   | 2        |
            | Pantalones | 1        |