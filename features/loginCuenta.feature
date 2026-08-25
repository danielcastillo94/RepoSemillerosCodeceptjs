@login
Feature: Login y Cuenta de Usuario

    @TC-065
    Scenario: Registrar cuenta nueva
        When el usuario visualiza la pagina de login
        And da clic en "Crear cuenta"
        Then la pagina de registro se muestra
        And el usuario ve el formulario "Crear cuenta"
        And el usuario ingresa su correo de registro
        And ingresa su contraseña de registro
        And da clic en el boton "Crear cuenta"
        Then el formulario de datos personales se muestra

    @TC-066
    Scenario: Login con cuenta existente
        When el usuario se encuentra en la pagina de login
        And ingresa su correo electronico
        And ingresa su contraseña
        And da clic en el boton de iniciar sesion
        And el usuario ingresa manualmente el codigo de verificacion
        And da clic en el boton continuar
        Then el usuario se encuentra en la página principal de Liverpool

    #@TC-067
    Scenario: Ver perfil y direcciones guardadas
        Given el usuario ha iniciado sesion
        When da clic en el icono o nombre de su perfil
        And la pagina de mi cuenta se muestra
        And da clic en direcciones
        Then las direcciones guardadas aparecen