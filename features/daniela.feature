#Ejercicio ejemplo 4
Feature: Carrito de compras

Scenario Outline: Diferentes productos en el carrito
Given El usuario esta en la página de detalle del producto
When agrega "<cantidad>" diferente de cada "<producto>"
Then el sistema refleja correctamente el "<producto>" y la "<cantidad>"

Examples:
    | producto | cantidad |
    |   agua   |    3     |
    |  jabon   |    1     |
    |   atun   |    2     |

#Ejercicio práctico 1
#Feature que prueba una compra exitosa, fallida y con diferentes metodos de pago

Feature: Compra de productos en línea

Background:
Given El usuario inicia sesión en la página de la tienda
And el usuario agrega al carrito los productos
And usuario está en la página para hacer el pago

@critico 
#prueba compra exitosa con tarjeta
Scenario: Compra exitosa de pago con tarjeta
When selecciona el método de pago con tarjeta de crédito o débito
And introduce datos de la tarjeta y confirma la compra
Then el sistema genera la compra correctamente
And el sistema muestra mensaje de confirmación de compra

@negativo 
#prueba compra con saldo insuficiente
Scenario: Compra fallida por saldo insuficiente
When selecciona el método de pago con tarjeta de débito
And introduce los datos de la tarjeta y confirma la compra
And tiene saldo insuficiente
Then el sistema no genera la compra
And  el sistema muestra al usuario un mensaje de saldo insuficiente

@regresion 
#prueba diferentes metodos de pago
Scenario Outline: Compras con diferentes métodos de pago
When el usuario selecciona alguna opcion de "<metodo_pago>"
And proporciona los datos de pago y confirma la compra
Then el sistema genera la compra correctamente
And el sistema muestra "<mensaje>" de confirmacion de compra

Examples:
| metodo_pago      | mensaje        |
| tarjeta de crédito  | Compra exitosa |
| tarjeta de débito   | Compra exitosa | 
| Pago en efectivo    | Compra exitosa  |
| transferencia bancaria | Compra exitosa |


