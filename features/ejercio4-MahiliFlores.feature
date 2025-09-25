Feature: Compra de producto en línea 

#pasos previos necesarios para acceder a la tienda virtual.
Background: Acceder a la tienda virtual
Given El usuario ingresa a la página inicial de la tienda virtual
When Ingresa sus credenciales
Then Accede a su cuenta de usuario 


#Escenario 1: Compra exitosa con pago de tarjeta 
@critica
Scenario: Compra exitosa con pago de tarjeta 
Given El usuario ingresa a su cuenta de usuario 
And Navega por la tienda virtual
And Selecciona productos para comprar 
When El usuario realiza el proceso de compra 
And Seleciona tarjeta de crédito / débito como forma de pago 
And Confirma la compra 
Then Se realiza exitosamente la compra 
And Recibe la confirmación de dicha compra con los detalles de los articulos comprados y total pagado 

#Escenario 2: Compra fallida por saldo insuficiente 
@negativa
Scenario: Compra fallida por saldo insuficiente
Given El usuario hace login a su cuenta
And Navega por la tienda virtual
And Slecciona productos para comprar 
When El usuario realiza el proceso de compra
And Ingresa su método de pago 
And Confirma la compra 
Then La compra no se realiza por insuficiencia de fondos 
And Recibe un mensaje de método de pago rechazado por falta de fondos 

#Escenario 3: Compra utilizando diferentes métodos de pago 
@regresion
Scenario Outline: Compra utilizando diferentes métodos de pago 
Given El usuario hace login con su cuenta
And Navega por la tienda en linea
And Selecciona productos para comprar 
When El usuario realiza el proceso de compra
And Selecciona el método de pago "<método>"
And Confirma la compra
Then Se confirma el estado del "<resultado>" de la compra

Examples:
| método  | resultado |
| tarjeta  | compra exitosa  | 
| tarjeta  | fondos insuficientes | 
| PayPal | compra exitosa  | 
| Amazon Pay| compra exitosa  | 
| Google Pay| compra exitosa |
|Tranferencia bancaria | compra exitosa