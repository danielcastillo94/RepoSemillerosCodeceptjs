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

Scenario: compra fallida por saldo insuficiente
Given El usuario selecciona sus productos y los envia al carrito de compras
And El usuario preciona boton de carrito y se encuentra en la pagina de "carrito"
When El usuario procede a seleccionar su metodo de pago y realizar el pago con tarjeta de banco
And se muestra una ventana de confirmacion de los articulos comprados y se confirma el pago
Then se rechaza el pago por saldo insuficiente 