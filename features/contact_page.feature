Feature: Validar que el centro de atencion cargue correctamente los elementos

Background:
    Given El usuario se encuentra en la pagina de contactanos

@centro-de-atencion
Scenario: Verficar elementos del centro de atencion
    When El usuario hace click en "Centro de Atención"
    #Then El usuario deberia ver los enlaces "Zacatecas", "Veracruz"

@formulario-elementos
Scenario: Verificar la carga correcta de los elementos del formulario

    When El usuario se posiciona sobre el boton Menú
    #And El usuario se posiciona sobre "Ayuda"
    #And El usuario hace click en "Contáctanos"
    #And El usuario hace click en "Correo Electrónico"
    #Then El usuario deberia ver el campo "contacto" y "telefono" 
    #And El usuario deberia ver el boton enviar    