@login
Feature: Validación de login y gestión de cuenta de usuario en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    And el usuario hace clic en el botón "Iniciar sesión"
    And se muestra el formulario de login

  @TC-029
  Scenario: Registrar cuenta nueva
    When el usuario hace clic en "Crear cuenta"
    And ingresa un correo y contraseña validos
    And hace clic en "Crear cuenta"
    And completa el formulario de registro con datos válidos
    And hace clic en "Crear cuenta" dentro del formulario de datos
    And se redirigirá al formulario para ingresar su número de telefono
    And el usuario ingresará su número telefonico y hace click en "Continuar"
    Then se muestra un mensaje de confirmación de registro exitoso

  @TC-030
  Scenario: Login con cuenta existente
    When el usuario ingresa su correo electrónico y contraseña válidos
    And hace clic en "Iniciar sesión"
    And el usuario ingresa el código de verificación manualmente y confirma la sesión
    Then se redirige al usuario a la página principal

  @TC-031
  Scenario: Ver perfil y direcciones guardadas
    When el usuario ingresa su correo electrónico y contraseña válidos
    And hace clic en "Iniciar sesión"
    And el usuario ingresa el código de verificación manualmente y confirma la sesión
    And se redirige al usuario a la página principal
    And navega a la sección "Mi perfil"
    Then se muestran los detalles del perfil del usuario
    And se muestran las direcciones guardadas
