# EJERCICIO 1
# ANA PAOLA REBOLLOSO SAUCEDO

# Crear un feature que represente la funcionalidad de “Compra de productos en línea”.
# Definir un Background con los pasos previos necesarios para acceder a la tienda virtual.
# Diseñar tres escenarios:
  # 1. Escenario de compra exitosa con pago con tarjeta.
  # 2. Escenario de compra fallida por saldo insuficiente.
  # 3. Escenario de compra utilizando diferentes métodos de pago en forma de Scenario Outline, repitiendo pasos y variando únicamente el método de pago y el resultado esperado.
# Diseñar los escenarios buscando alcanzar la mayor cobertura posible de la funcionalidad, según se considere necesario
# Asignar etiquetas al feature y a cada escenario para clasificarlos según tipo de prueba (por ejemplo, crítica, negativa, regresión).
# Incluir al menos un comentario dentro del feature que documente una decisión o nota aclaratoria.
 
@critica
Feature: Compra de productos en línea

Background:
  Given el usuario esta en la página principal de la tienda virtual
    And ha iniciado sesión con credenciales válidas
    And tiene productos agregados en el carrito
    And los productos en el carrito están disponibles en el inventario
    And ha ingresado una dirección de envío válida

@critica @positiva
Scenario: Compra exitosa con pago con tarjeta
   When el usuario selecciona el método de pago "Tarjeta de crédito/débito"
    And ingresa numero de tarjeta, nombre, fecha de vencimiento y CVV válidos
    And da clic en el boton Confirmar compra
   Then el sistema muestra el mensaje de éxito
    And realiza el pedido

@critica @negativa
Scenario: Compra fallida por saldo insuficiente
   When el usuario selecciona el método de pago "Tarjeta de débito"
    And ingresa numero de tarjeta, nombre, fecha de vencimiento y CVV de una tarjeta con saldo insuficiente
    And da clic en el boton Confirmar compra
   Then el sistema muestra el mensaje "Compra fallida: saldo insuficiente"
    And no realiza el pedido

@regresion
Scenario Outline: Compra utilizando diferentes métodos de pago
   When el usuario selecciona el método de pago "<metodo>"
    And ingresa los datos válidos para "<metodo>" con saldo "<saldo>"
    And da clic en el boton Confirmar compra
   Then el sistema muestra el mensaje "<mensaje>"
    And hace la acción "<accion>"

  Examples:
  |      metodo      |    saldo   |              mensaje             |       accion       |
  |Tarjeta de crédito| Suficiente |    Compra realizada con éxito    |  Realiza el pedido |
  |Tarjeta de crédito|Insuficiente|Compra fallida: saldo insuficiente|No realiza el pedido|
  | Tarjeta de débito| Suficiente |    Compra realizada con éxito    |  Realiza el pedido |
  | Tarjeta de débito|Insuficiente|Compra fallida: saldo insuficiente|No realiza el pedido|
  | Tarjeta de regalo| Suficiente |    Compra realizada con éxito    |  Realiza el pedido |
  | Tarjeta de regalo|Insuficiente|Compra fallida: saldo insuficiente|No realiza el pedido|
  |      PayPal      | Suficiente |    Compra realizada con éxito    |  Realiza el pedido |
  |      PayPal      |Insuficiente|Compra fallida: saldo insuficiente|No realiza el pedido|


# Ejemplo 4: Carrito de compras
# Un usuario está en la página de detalle de un producto.
# Agrega distintas cantidades de distintos productos al carrito.
# El sistema debe reflejar correctamente la cantidad de cada producto en el carrito.
# Ellos deben definir la tabla de Examples con producto y cantidad.
 
@regresion
Feature: Carrito de compras

Scenario Outline: Agregar distintos productos al carrito
  Given El usuario está en la página de detalle de un producto "<producto>"
   When agrega "<cantidad>" del producto
    And Da clic en el boton Agregar al carrito
   Then el carrito muestra la "<cantidad>" correspondiente al "<producto>"
    
  Examples: 
  |producto|cantidad|
  | Laptop |    1   |
  |  Libro |    3   |
  | Playera|    4   |
  