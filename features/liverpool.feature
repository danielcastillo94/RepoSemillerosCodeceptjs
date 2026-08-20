@liverpool
Feature: Casos no disponibles actualmente en la pagina de liverpool
    
    #Feature: Comparar Productos (De momento la pagina no cuenta con opcion para comparar productos por ende no se pueden realizar los casos TC038 -TC040)
    #Background: 
        #Given el usuario escogio un producto a comparar con otro

    @TC-038:
    Scenario: Agregar producto a comparación
        
    @TC-039:
    Scenario: Agregar segundo producto

    @TC-040:
    Scenario: Ver tabla de comparación

    # No disponible actualmente en Liverpool.
    # TC038-TC040 quedan fuera de ejecución.

    #Feature: Carrito - Totales y Impuestos
    #Background: 
        #Given el usuario ya inicio sesion y se encuentra en la pagina de pago

    @TC-045:
    Scenario: Validar cálculo de impuestos (De momento no existe un apartado que indique algo relacionado a los impuestos)
        
    # No disponible actualmente en Liverpool.
    # TC045 queda fuera de ejecución.

    #Feature: Checkout - Datos Personales (La pagina no solicita datos personales a la hora de comprar productos ya que para comprar, el inicio de sesion es obligatorio y por ende se toman los datos personales de la cuenta)
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 

    @TC-050: 
    Scenario: Llenar formulario (nombre, email, teléfono)

    @TC-051:
    Scenario: Validar email válido

    @TC-052:
    Scenario: Validar teléfono válido

    # No aplica actualmente.
    # Liverpool obtiene los datos personales desde la cuenta autenticada.
    # TC050 -TC052 quedan fuera de ejecución.

    #Feature: Checkout - Método de Envío (La pagina de momento no tiene opcion de envio estandar o express)
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 

    @TC-057: 
    Scenario: Seleccionar envío estándar
    
    @TC-058:
    Scenario: Seleccionar envío express

    # No disponible actualmente en Liverpool.
    # TC057-TC058 quedan fuera de ejecución.