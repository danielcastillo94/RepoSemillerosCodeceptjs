@promocion_checkout
Feature: Funcionamiento del checkout

    Feature Description

    Scenario: Validar el checkout
        Given El usuario ingresa los codigos de promocion.

    # Código Promocional

    @TC047
    Scenario: Aplicar código promocional válido.
        Given El usuario se encuentra en la página del carrito.
        When El usuario ingresa un código promocional válido.
        And El usuario hace clic en "Aplicar".
        Then El usuario valida que el descuento se haya aplicado correctamente.

    @TC048
    Scenario: Validar código promocional inválido.
        Given El usuario se encuentra en la página del carrito.
        When El usuario ingresa un código promocional inválido.
        And El usuario hace clic en "Aplicar".
        Then El usuario valida que se muestre un mensaje de error indicando que el código no es válido.

    @TC049
    Scenario: Remover código promocional aplicado.
        Given El usuario se encuentra en la página del carrito.
        When El usuario aplica un código promocional válido.
        And El usuario hace clic en "Remover".
        Then El usuario valida que el descuento aplicado se haya eliminado correctamente y que el total del carrito se haya actualizado.

    # Checkout - Datos Personales

    @TC050
    Scenario: Llenar formulario de datos personales.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa sus datos personales como nombre, teléfono y correo electrónico.
        Then El usuario valida que los datos personales se hayan ingresado correctamente.

    @TC051
    Scenario: Validar email.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa un email válido y hace clic en "Continuar".
        Then El usuario valida que el email sea aceptado correctamente.

    @TC052
    Scenario: Validar teléfono.
        Given El usuario se encuentra en la página del formulario.
        When El usuario ingresa un teléfono válido y hace clic en "Continuar".
        Then El usuario valida que el teléfono sea aceptado correctamente.

    # Checkout - Dirección de Envío

    @TC053
    Scenario: Seleccionar dirección guardada.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario selecciona una dirección guardada y hace clic en "Continuar".
        Then El usuario valida que la dirección seleccionada sea correcta.

    @TC054
    Scenario: Agregar nueva dirección.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario ingresa una nueva dirección y hace clic en "Guardar".
        Then El usuario valida que la nueva dirección se haya agregado correctamente.

    @TC055
    Scenario: Validar campos de dirección.
        Given El usuario se encuentra en la página de dirección de envío.
        When El usuario ingresa información en los campos de dirección.
        Then El usuario valida que los campos de dirección sean aceptados correctamente.

    # Checkout - Método de Envío

    @TC056
    Scenario: Ver opciones de envío disponibles.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario consulta las opciones de envío disponibles.
        Then El usuario valida que se muestren las opciones de envío disponibles.

    @TC057
    Scenario: Seleccionar envío estándar.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario selecciona la opción de envío estándar y hace clic en "Continuar".
        Then El usuario valida que el método de envío seleccionado sea correcto.

    @TC058
    Scenario: Seleccionar envío express.
        Given El usuario se encuentra en la página de método de envío.
        When El usuario selecciona la opción de envío express y hace clic en "Continuar".
        Then El usuario valida que el método de envío seleccionado sea correcto.

    # Checkout - Método de Pago

    @TC059
    Scenario: Seleccionar pago con tarjeta.
        Given El usuario se encuentra en la página de método de pago.
        When El usuario selecciona la opción de pago con tarjeta y hace clic en "Continuar".
        Then El usuario valida que el método de pago seleccionado sea correcto.

    @TC060
    Scenario: Validar campos de tarjeta.
        Given El usuario se encuentra en la página de método de pago.
        When El usuario ingresa la información de su tarjeta y hace clic en "Continuar".
        Then El usuario valida que los campos de tarjeta sean aceptados correctamente.

    @TC061
    Scenario: Ver resumen antes de pagar.
        Given El usuario se encuentra en la página de resumen de pago.
        When El usuario revisa el resumen de su pedido antes de pagar.
        Then El usuario valida que el resumen sea correcto y corresponda a los productos seleccionados, dirección de envío y método de pago.
