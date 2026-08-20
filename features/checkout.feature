Feature: Checkout
    
    @TC-053: 
    Scenario: Seleccionar dirección guardada
        When el usuario da clic en: cambiar del apartado entrega
        And el submenu de direcciones aparece al lado derecho 
        And el usuario da clic en una direccion 
        And da clic en el boton: Continuar
        Then la pagina se actualiza y un mensaje de confirmacion aparece durante unos segundos

    @TC-054: 
    Scenario: Agregar dirección nueva
        When el usuario da clic en: cambiar que se encuentra en el apartado entrega
        And el submenu de direcciones aparece al lado derecho de la pantalla
        And el usuario da clic en el boton agregar direccion 
        Then aparece el formulario de datos para la nueva direccion
    
    @TC-055: 
    Scenario: Validar campos de dirección
        When el usuario visualiza el formulario de datos para la nueva direccion
        And completa el campo nombre
        And el campo apellido paterno
        And el campo apellido materno
        And el alias de direccion
        And el codigo postal
        And el estado
        And el municipio
        And la colonia
        And la ciudad
        And la calle
        And el numero exterior
        And el telefono celular
        And el telefono particular 
        And el usuario da clic en el boton: usar esta direccion
        Then la direccion se guarda y un mensaje de confirmacion aparece durante unos segundos

    @TC-056:
    Scenario: Ver opciones de envío disponibles
        When el usuario da clic en: cambiar del apartado direccion
        And el submenu de direccion de entrega aparece
        Then se visualizan dos opciones de envio: a tu domicilio o click and collect

    @TC-059:
    Scenario: Seleccionar pago con tarjeta
        When el usuario da clic en: cambiar. del apartado metodo de pago 
        And el submenu de metodos de pago aparece al lado derecho 
        Then el usuario da clic en tarjetas de credito/debito

    @TC-060: 
    Scenario: Validar campos de tarjeta
        When se visualizan las opciones de tarjetas de credito/debito
        And el usuario da clic en Agrega tarjeta
        And el formulario de agregar tarjeta aparece
        And el usuario completa el campo alias de tarjeta 
        And nombre completo
        And numero de tarjeta
        And selecciona una direccion
        And el usuario da clic en el boton: Continuar
        Then la tarjeta se agrega y valida, igualmente aparece un mensaje de confirmacion durante unos segundos

    @TC-061:
    Scenario: Ver resumen antes de pagar
        Then el usuario ve los detalles de pago antes de Continuar la compra 