# EJERCICIO 1
# Daniel Cuamatzi Olmedo

# Crear un feature que represente la funcionalidad de “Compra de productos en línea”.
# Definir un Background con los pasos previos necesarios para acceder a la tienda virtual.
# Diseñar tres escenarios:
  # 1. Escenario de compra exitosa con pago con tarjeta.
  # 2. Escenario de compra fallida por saldo insuficiente.
  # 3. Escenario de compra utilizando diferentes métodos de pago en forma de Scenario Outline, repitiendo pasos y variando únicamente el método de pago y el resultado esperado.
# Diseñar los escenarios buscando alcanzar la mayor cobertura posible de la funcionalidad, según se considere necesario
# Asignar etiquetas al feature y a cada escenario para clasificarlos según tipo de prueba (por ejemplo, crítica, negativa, regresión).
# Incluir al menos un comentario dentro del feature que documente una decisión o nota aclaratoria.
 
Feature: compra de productos en linea 

Scenario: compra exitosa con pago con tarjeta
Given El usuario selecciona sus productos y los envia al carrito de compras
And El usuario preciona boton de carrito y se encuentra en la pagina de "carrito"
When El usuario procede a seleccionar su metodo de pago y realizar el pago con tarjeta de banco
And se muestra una ventana de confirmacion de los articulos comprados y se confirma el pago
Then se realiza el pago exitosamente 

Scenario: compra fallida por saldo insuficiente
Given El usuario selecciona sus productos y los envia al carrito de compras
And El usuario preciona boton de carrito y se encuentra en la pagina de "carrito"
When El usuario procede a seleccionar su metodo de pago y realizar el pago con tarjeta de banco
And se muestra una ventana de confirmacion de los articulos comprados y se confirma el pago
Then se rechaza el pago por saldo insuficiente 

Scenario Outline: Scenario Outline name compra utilizando varios metodos de pago
When el usuario selecciona el metodo de pago "<metodoP>"
And ingresa sus datos de "<metodoP>" validos "<saldo>"
And confirma su compra dando click en compra
Then el sistema muestra mensaje en pantalla "<mensaje>"
And hace la accion "<accion>"

Examples:
|     metodoP      |   saldo    |   mensaje                       |     accion        |
|Tarjeta de credito|suficiente  |pago realizado con exitoso       | se procesa pedido |
|Tarjeta de credito|insuficiente|error de pago: saldo insuficiente| se cancela pedido |
|Tarjeta de debito |suficiente  |pago realizado con exitoso       | se procesa pedido |
|Tarjeta de debito |insuficiente|error de pago: saldo insuficiente| se cancela pedido |
|      paypal      |suficiente  |pago realizado con exitoso       | se procesa pedido |
|      paypal      |insuficiente|error de pago: saldo insuficiente| se cancela pedido |


# Ejemplo 4: Carrito de compras
# Un usuario está en la página de detalle de un producto.
# Agrega distintas cantidades de distintos productos al carrito.
# El sistema debe reflejar correctamente la cantidad de cada producto en el carrito.
# Ellos deben definir la tabla de Examples con producto y cantidad.
 

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