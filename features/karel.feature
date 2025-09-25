#EJERCICIO 1 
# Crear un feature que represente la funcionalidad de “Compra de productos en línea”.
# Definir un Background con los pasos previos necesarios para acceder a la tienda virtual.
#Diseñar tres escenarios:
 # 1. Escenario de compra exitosa con pago con tarjeta.
# 2. Escenario de compra fallida por saldo insuficiente.
# 3. Escenario de compra utilizando diferentes métodos de pago en forma de Scenario Outline, repitiendo pasos y variando únicamente el método de pago y el resultado
   #esperado.
   
 #Diseñar los escenarios buscando alcanzar la mayor cobertura posible de la funcionalidad, según se considere necesario
 
# Asignar etiquetas al feature y a cada escenario para clasificarlos según tipo de prueba (por  ejemplo, crítica, negativa, regresión).

# Incluir al menos un comentario dentro del feature que documente una decisión o nota aclaratoria

Feature: Compra de productos en linea 

Background:
 Given El usuario esta en la pagina principal de la tienda virtual 
 Given El usuario  inicia sesion 
 And los productos estan disponibles en la tienda 
 And tiene registrada una direccion de envio 
  


@critica @positiva 
Scenario: Compra exitosa 
 When El usuario selecciona el metodo de pago "m.pago"
 And da clic en el boton de comprar ahora 
 then el sistema muestra el mensaje de pedido realizado 
 And manda comprobante del pedido 

@critica @negativa 
Scenario: Compra fallida por saldo insuficiente 
 When el usuario selecciona el metodo de pago "m.pago"
 And da clic en el boton de comprar ahora 
 then el sistema muestra el mensaje "Pedido no Realizado"
 And no realiza el pedido

 @regresion 
 Scenario Outline: Compra utilizando diferentes metodos de pago 
  When el usuario selecciona el metodo de pago "m.pago"
  And ingresa los datos validos para "m.pago" con saldo "saldo"
  And da clic en boton comprar ahora 
  then el sistema muestra el mensaje "mensaje"
  And hace la accion "accion" 

| m.pago              | saldo        |  mensaje           | accion 
|Tarjeta de credito   |Suficiente    |Pedido Realizado    | realiza el pedido
|Tarjeta de credito   |Insuficiente  |Pedido no realizado | no realiza el pedido
|Tarjeta de debito    |Suficiente    |Pedido Realizado    | realiza el pedido
|Tarjeta de debito    |Insuficiente  |Pedido no Realizado | no realiza el pedido
|PayPal               |Suficiente    |Pedido Realizado    | realiza el pedido
|Paypal               |Insuficiente  |Pedido no Realizado | no realiza el pedido