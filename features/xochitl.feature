Feature: Compra de productos en Línea
 
# Este Feauture fue hecho por Xochitl Perez y válida distintos flujos de una tienda en línea
# en ella incluye lo que son transacciones exitosas y fallidas, así como distintos métodos de pago
 
Background:
Given El usuario se encuentra en la página principal
And Inicio sesión con credenciales válidas
When Da click en la sección de productos
When Agrega algún producto al carrito de compras
And Procede a realizar su checkout
 
@Acciónpositiva
Scenario: Compra exitosa 
When Selecciona "Tarjeta de crédito/debito" como método de pago
And Ingresa datos de la tarjeta válidos
When Da click al bóton de "Confirmar Compra"
Then Se muestra un mensaje de compra exitosa
And Se genera un número de orden de compra
 
@Saldoinsuficiente @negativa
Scenario: Compra fállida por saldo insuficiente
When Selecciona método de pago "Tarjeta de crédito/debito"
And Ingresa datos de la tarjeta válidos con saldo insuficiente
When Da click en el bóton "Confirmar Compra"
Then Se muestra un mensaje de error de "Pago rechazado por fondos insuficientes"
And No debe de generar un número orden de compra
 
@datosinválidos @negativa
 
Scenario: Compra fállida por datos incorrectos del método de pago
When Selecciona método de pago "Tarjeta de crédito/debito"
And Ingresa datos de la tarjeta incorrectos 
When Da click en el bóton "Confirmar Compra"
Then Se muestra un mensaje de error de "Datos incorrectos de la Tarjeta"
And No debe de generar un número orden de compra
 
@metodosdepago @positiva
  Scenario Outline: Compra utilizando diferentes métodos de pago
    When Selecciona "<método_de_pago>" como método de pago
    And Ingresa datos válidos del "<método_de_pago>" seleccionado
    When Da clic en botón de "Confirmar Compra"
    Then Se muestra un mensaje de "<resultado_esperado>"
    And Se genera un número de orden de compra
 
    Examples:
      | método_de_pago     | resultado_esperado                              |
      | Tarjeta de crédito | Compra realizada exitosamente                   |
      | Tarjeta de débito  | Compra relizada extosamente                     |
      | PayPal             | Compra realizada exitosamente                   |
      | Transferencia      | Compra pendiente de confirmación bancaria       |