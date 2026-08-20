Feature: Login y Cuenta de Usuario

    @TC-065: 
    Scenario: Registrar cuenta nueva
        When el usuario visualiza la pagina de login
        And desplaza la pagina 
        And da clic en: Crear cuenta
        And la pagina se actualiza
        And el usuario ve el mensaje crear cuenta
        And da clic en el campo correo electronico e ingresa su correo
        And da clic en el campo contraseña e ingresa una contraseña
        And da clic en el boton crear cuenta
        Then un mensaje de confirmacion aparecera y pedira confirmar la cuenta en el correo ingresado

    @TC-066: 
    Scenario: Login con cuenta existente (Nota: si la cuenta tiene verificacion de dos pasos o es la primera vez que se ingresa desde un navegador nuevo, la pagina solicitara un codigo de verificacion)
        When el usuario visualiza la pagina de login
        And da clic en el campo correo electronico e ingresa su correo
        And da clic en el campo contraseña e ingresa su contraseña
        And da clic en el boton: iniciar sesion
        Then la pagina se actualiza y muestra la pagina principal

    @TC-067: 
    Scenario: Ver perfil y direcciones guardadas
        When el usuario visualiza la pagina principal
        And da clic en el icono o nombre de su perfil
        And la pagina: mi cuenta se visualiza
        And da clic en: direcciones que se encuentra en el submenu izquierdo
        Then las direcciones guardadas aparecen