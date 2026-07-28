Feature: Registro del usuario en el aplicativo de PlayStation

    Scenario: Registro exitoso en el aplicativo
        Given El usuario abre el aplicativo de 'https://www.playstation.com/es-mx/'
        And El usuario hace clic en el botón de "Iniciar sesión"
        When El usuario selecciona la opción de "Crear cuenta"
        And Ingresa su información personal (país, código postal, ciudad, estado y fecha de nacimiento)
        And Hace clic en el botón de "Siguiente"
        And Ingresa su información de inicio de sesión (correo electrónico, ID en línea y nombre de usuario)
        And Acepta los términos y condiciones y hace clic en el botón de "Siguiente"
        And Elige las recomendaciones personalizadas de contenido y hace clic en el botón de "Confirmar"
        And Ingresa una nueva contraseña y hace clic en el botón de "Crear cuenta"
        Then El usuario debería ver un mensaje de confirmación de registro exitoso
        And Se le debe enviar un correo electrónico de verificación a la dirección proporcionada

    Scenario: Registro fallido en el aplicativo por correo electrónico ya existente
        Given El usuario abre el aplicativo de 'https://www.playstation.com/es-mx/'
        And El usuario hace clic en el botón de "Iniciar sesión"
        When El usuario selecciona la opción de "Crear cuenta"
        And Ingresa su información personal (país, código postal, ciudad, estado y fecha de nacimiento)
        And Hace clic en el botón de "Siguiente"
        And Ingresa su información de inicio de sesión (correo electrónico ya existente, ID en línea y nombre de usuario)
        And Acepta los términos y condiciones y hace clic en el botón de "Siguiente"
        Then El usuario debería ver un mensaje de error indicando que el correo electrónico ya existe
        And No debería poder continuar con el proceso de registro hasta que ingrese un correo electrónico válido y único

    Scenario: Registro fallido en el aplicativo por campos obligatorios vacíos
        Given El usuario abre el aplicativo de 'https://www.playstation.com/es-mx/'
        And El usuario hace clic en el botón de "Iniciar sesión"
        When El usuario selecciona la opción de "Crear cuenta"
        And Deja uno o más campos obligatorios vacíos
        Then El usuario debería ver el botón de "Siguiente" deshabilitado ni poder hacer clic en el botón hasta que complete todos los campos obligatorios