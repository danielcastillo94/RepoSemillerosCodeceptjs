# Feature de prueba para la funcionalidad de compra en línea
@critica
Feature: Compra de productos en línea
  Este feature sirve para probar los pasos principales de la tienda virtual.

  # Background: cosas que siempre hay que hacer antes de comprar
  Background: Acceder a la tienda virtual
    Given el usuario abre la página de la tienda
    And el usuario inicia sesión con un usuario válido

  # Escenario 1: compra exitosa
  @compra_exitosa
  Scenario: Compra exitosa con tarjeta
    When el usuario agrega un producto al carrito
    And procede a pagar con tarjeta
    Then el pago se completa sin problemas
    And recibe un mensaje de confirmación de la compra

  # Escenario 2: compra fallida
  @negativa
  Scenario: Compra rechazada por saldo insuficiente
    When el usuario intenta comprar un producto que cuesta más de lo que tiene
    And trata de pagar con tarjeta
    Then el pago no se realiza
    And aparece un mensaje diciendo "Saldo insuficiente"

  # Escenario 3: probar varios métodos de pago
  @regresion
  Scenario Outline: Compra con distintos métodos de pago
    When el usuario selecciona un producto
    And paga usando <metodo_de_pago>
    Then el resultado esperado es <resultado>

    Examples:
      | metodo_de_pago | resultado |
      | tarjeta        | exitosa   |
      | transferencia  | exitosa   |
      | efectivo       | fallida   |

  # Nota: Uso Scenario Outline para no repetir los mismos pasos varias veces y probar varios métodos de pago

