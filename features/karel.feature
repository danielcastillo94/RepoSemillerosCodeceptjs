#EJERCICIO 1 
# Crear un feature que represente la funcionalidad de “Compra de productos en línea”.
# Definir un Background con los pasos previos necesarios para acceder a la tienda virtual.
#Diseñar tres escenarios:
 # 1. Escenario de compra exitosa con pago con tarjeta.
# 2. Escenario de compra fallida por saldo insuficiente.
# 3. Escenario de compra utilizando diferentes métodos de pago en forma de Scenario Outline, repitiendo pasos y variando únicamente el método de pago y el resultado
   esperado.
   
 #Diseñar los escenarios buscando alcanzar la mayor cobertura posible de la funcionalidad, según se considere necesario
 
# Asignar etiquetas al feature y a cada escenario para clasificarlos según tipo de prueba (por  ejemplo, crítica, negativa, regresión).

# Incluir al menos un comentario dentro del feature que documente una decisión o nota aclaratoria

Feature: Compra de productos en linea 

Background:
 Given El usuario esta en la pagina principal de la tienda virtual 
 and inicia sesion 
 and los productos estan disponibles en la tienda 
 and tiene registrada una direccion de envio 
  


@critica @positiva 
Scenario: Compra exitosa 
 When El usuario selecciona el metodo de pago 
 and ingresa el cvv valido
 and da clic en el boton de comprar ahora 
 then el sistema muestra el mensaje de pedido realizado 
 and manda comprobante del pedido 

@critica @negativa 
Scenario: Compra fallida por saldo insuficiente 
 When el usuario selecciona el metodo de pago 
 and ingresa el cvv valido 
 and da clic en el boton de comprar ahora 
 then el sistema muestra el mensaje "Compra fallida: saldo insuficiente"
 and no realiza el pedido

 @regresion 
 Scenario Outline: Compra utilizando diferentes metodos de pago 
  When el usuario selecciona el metodo de pago "m.pago"
  and ingresa los datos validos para "m.pago" con saldo "saldo"
  and da clic en boton comprar ahora 
  then el sistema muestra el mensaje "mensaje"
  and hace la accion "accion" 

| m.pago              | saldo        |  mensaje           |
|Tarjeta de credito   |Suficiente    |Pedido Realizado    |
|Tarjeta de credito   |Insuficiente  |Pedido no realizado |
|Tarjeta de debito    |Suficiente    |Pedido Realizado    |
|Tarjeta de debito    |Insuficiente  |Pedido no Realizado |
|PayPal               |Suficiente    |Pedido Realizado    |
|Paypal               |Insuficiente  |Pedido no Realizado |