# Featur que valida la compra de productos en linea

Feature: Compra de productos en linea

    Background: Agregar productos al carrito
        Given el usuario está en la página de inicio
        When el usuario agrega un producto al carrito
        And el usuario procede al pago

    Scenario: Compra exitosa con pago con tarjeta
        And el usuario ingresa los detalles de la tarjeta de crédito
        Then el usuario debe recibir una confirmación de compra

    Scenario: Compra fallida por fondos insuficientes
        And el usuario ingresa los detalles de una tarjeta con fondos insuficientes
        Then el usuario debe recibir un mensaje de error por fondos insuficientes

    Scenario Outline: Pago usando distintos metodos de pago
        And el usuario selecciona el método de pago "<metodo_pago>"
        Then el usuario debe ser redirigido a la página de confirmación de pago

        Examples:
            | metodo_pago            |
            | Tarjeta de crédito     |
            | PayPal                 |
            | Transferencia bancaria |