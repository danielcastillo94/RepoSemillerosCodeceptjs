# Este feature describe la funcionalidad de compra en línea.
# Se consideraron diferentes métodos de pago y se simuló tanto una compra exitosa como fallida.
#Leon Vencedor Luis Gilberto 
@compras @crítica
Feature: Compra de productos en línea 

Background: 
Given El usuario ha accedido al sitio web de la tienda virtual 
   And El usuario se ha registrado e iniciado sesión 
      And El usuario ha agregado productos al carrito

@compras @exitosa
Scenario: Compra exitosa con pago con tarjeta 
  When El usuario selecciona "Pagar con tarjeta"
     And ingresa los detalles de la tarjeta de crédito
        And confirma la compra
    Then El sistema debe procesar el pago correctamente
       And mostrar un mensaje de confirmación de la compra

@compras @negativa
Scenario: Compra fallida por saldo insuficiente
  When El usuario selecciona "Pagar con tarjeta"
     And ingresa los detalles de la tarjeta de crédito con saldo insuficiente
        And confirma la compra
    Then El sistema debe rechazar el pago 
       And mostrar un mensaje de error indicando saldo insuficiente

@compras @regresión
Scenario Outline: Compra utilizando diferentes métodos de pago
  When El usuario selecciona "<métodos de pago>"
     And ingresa los detalles de pago correspondientes 
        And confirma la compra
    Then El sistema debe "<resultado esperado>"


|métodos de pago        |resultado esperado|
|tarjeta de crédito     |procesar el pago correctamente|
|Paypal                 | procesar el pago correctamente|
|transferencia bancaria | procesar el pago correctamente|
|tarjeta de débito      | Rechazar el pago por saldo insuficiente|