Feature: Código Promocional

    @TC-047: 
    Scenario: Aplicar código promocional válido
        When el usuario se encuentra en la pagina de pago
        And da clic en el boton cupones del lado derecho
        And el submenu aparece del lado derecho
        And el usuario agrega su cupon en la barra que dice: Agregar cupon
        And el usuario da clic en el boton: Aplicar
        Then si el cupon es valido se agrega a la compra y se muestra un mensaje de confirmacion durante unos segundos

    @TC-048:
    Scenario: Validar descuento aplicado
        When el usuario ya agrego un codigo valido 
        And aparece el apartado: cupon aplicado 
        And el apartado del lado derecho cupones muestra una cantidad 
        Then la cantidad mostrada se resta del subtotal y el total del producto se actualiza
    
    @TC-049: 
    Scenario: Remover código promocional
        When el usuario ya agrego un codigo valido 
        And aparece el apartado: cupon aplicado
        And el usuario da clic en: Remover
        And confirma la decision
        Then el cupon se remueve y el total se actualiza