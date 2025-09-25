@regression
Feature: compra de productos en linea
#Se tiene por entendido que para los dos primeros escenarios el usuario ya ha seleccionado el metodo de pago

Background: el usuario se encuentra en la pantalla de confirmacion de pago

@regression
Scenario: compra exitosa con pago en tarjeta

When el usuario ingresa como <meotodo_pago> tarjeta y tiene <monto> suficiente
And el usuario hace click en boton confirmar
Then se muestra mensaje "Pago realizado con exito"

@regression
Scenario: compra fallida por saldo insuficiente

When el usuario tiene <monto> menor al <monto_necesario>
And el usuario hace click en el boton confirmar
Then se muestra mensaje "Se rechazo la forma de pago, verifica que tu tarjeta cuente con saldo suficiente o elige otro metodo de pago"

@regression
Scenario: compra con diferentes metodos de pago exitosa

When el usuario tiene <monto> igual al <monto_necesario> y selecciona <meotodo_pago>
And el usuario hace click en el boton confirmar
Then se muestra el mensaje "Pago realizado con exito"

Examples:
    | Metodo pago | monto | monto_necesario | mensaje                         |
    | Efectivo    | 1000  | 1000            | Pago realizado con exito        |
    | Tarjeta     | 5000  | 5000            | Pago realizado con exito        |

@regression
Scenario: compra con diferentes metodos de pago fallida

When el usuario tiene <monto> menor al <monto_necesario> y selecciona <meotodo_pago>
And el usuario hace click en el boton confirmar
Then se muestra el mensaje "Pago realizado con exito"

Examples:
    | Metodo pago | monto | monto_necesario | mensaje                         |
    | Efectivo    | 1000  | 7000            | Se rechazo la forma de pago, verifica que tu tarjeta cuente con saldo suficiente o elige otro metodo de pago        |
    | Tarjeta     | 4000  | 5000            | Se rechazo la forma de pago, verifica que tu tarjeta cuente con saldo suficiente o elige otro metodo de pago        |