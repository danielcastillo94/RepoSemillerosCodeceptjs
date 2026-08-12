    @Flujo_cuenta
    Scenario: EL usuario se encuentra en la página de inicio de sesión.
        Given El usuario se encuentra en la página de inicio de sesión.

    # Flujo Completo E2E (Búsqueda → Compra)

    @TC062
    Scenario: Buscar producto.
        Given El usuario ingresa a la página de Liverpool.
        When El usuario localiza la barra de búsqueda.
        And El usuario ingresa la palabra "zapatillas" en la barra de búsqueda.
        Then El usuario valida el resultado de la búsqueda.

    @TC063
    Scenario: Agregar producto al carrito.
        Given El usuario se encuentra en la página de detalle de un producto.
        When El usuario selecciona el producto y hace clic en "Agregar al carrito".
        Then El usuario valida que el producto se haya agregado correctamente al carrito.

    @TC064
    Scenario: Completar checkout hasta la confirmación.
        Given El usuario se encuentra en la página del carrito.
        When El usuario hace clic en "Continuar con el checkout".
        And El usuario ingresa sus datos personales, dirección de envío, método de envío y método de pago.
        Then El usuario valida que el resumen del pedido sea correcto antes de confirmar la compra.

    # Login y Cuenta de Usuario

    @TC065
    Scenario: Registrar nueva cuenta.
        Given El usuario se encuentra en la página de registro.
        When El usuario ingresa la información requerida para crear una nueva cuenta y hace clic en "Registrarse".
        Then El usuario valida que la cuenta se haya creado correctamente y pueda iniciar sesión.

    @TC066
    Scenario: Iniciar sesión con una cuenta existente.
        Given El usuario se encuentra en la página de inicio de sesión.
        When El usuario ingresa sus credenciales y hace clic en "Iniciar sesión".
        Then El usuario valida que haya iniciado sesión correctamente y pueda acceder a su cuenta.

    @TC067
    Scenario: Ver perfil y direcciones guardadas.
        Given El usuario se encuentra en la página de su perfil.
        Then El usuario valida que pueda ver y editar su información personal y direcciones guardadas.
