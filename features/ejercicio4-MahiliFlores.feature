Feature: Compra de producto en línea 

#pasos previos necesarios para acceder a la tienda virtual.
Background: Acceder a la tienda virtual
Given El usuario ingresa a la página inicial de la tienda virtual 
When Ingresa sus credenciales
Then El acceso a la cuenta es exitoso 


#Escenario 1: Compra exitosa con pago de tarjeta 
@critica
Scenario: Compra exitosa con pago de tarjeta 
Given Selecciona productos para comprar 
When El usuario realiza el proceso de compra 
And Seleciona tarjeta de crédito / débito como forma de pago 
And Confirma la compra 
Then Se realiza exitosamente la compra 
And Recibe la confirmación de dicha compra con los detalles de los articulos comprados y total pagado 

#Escenario 2: Compra fallida por saldo insuficiente 
@negativa
Scenario: Compra fallida por saldo insuficiente
Given Selecciona productos para comprar 
When El usuario realiza el proceso de compra
And Ingresa su método de pago 
And Confirma la compra 
Then Se notifica que la compra no se puede realizar por insuficiencia de fondos 


#Escenario 3: Compra utilizando diferentes métodos de pago 
@regresion
Scenario Outline: Compra utilizando diferentes métodos de pago 
Given Selecciona productos para comprar 
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