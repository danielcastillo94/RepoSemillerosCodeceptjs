@karelTelcel
Feature: Validar flujos principales del portal Telcel desde el home hasta secciones de información, contacto y planes.
    Background: Regresando al caso inicial
        Given El usuario esta en la pagina principal

    @TC001
    Scenario: Validar la carga del portal y los elementos principales del home
        Then El usuario valida la pagina principal
    
    @TC002
    Scenario: Validar navegacion hacia la seccion de planes y submenus
        When El usuario da click en Menú, muestra el submenú y selecciona "Plan de Renta"
        When El usuario da click en algun plan
        Then se puede ver la seccion "Plan Ultra" 

    @TC003
    Scenario: Validar ingreso al detalle de un plan especifico
    Given El usuario esta en la pagina de planes 
        When El usuario se desplaza por los planes 
        Then El usuario ve el plan "Telcel 5G Plus" 
        And  da click en el boton de "Detalles"  
        Then El usuario ve la informacion de ese plan

    @TC004
    Scenario: Validar funcionamiento del buscador general
        When El usuario introduce "IPhone" en la barra de busqueda
        Then El usuario puede ver los resultados de la busqueda 

    @TC005
    Scenario: Validar visualizacion del detalle de un producto
    Given El usuario esta en la pagina de resultados de la busqueda
        When El usuario selecciona algun equipo
        Then El usuario puede ver la imagen, especificaciones y precio del equipo 

    @TC006
    Scenario: Validar acceso a la seccion de cobertura nacional
        When El usuario da click a red de mayor cobertura
        When El usuario da click en Ver Cobertura
        Then El usuario puede ver el mapa interactivo 

    @TC007
    Scenario: Validar acceso y estructura del formulario de contacto
        When El usuario da click en contactanos
        Then El usuario da click en la opcion correo
        Then El usuario puede ver el formulario y sus elementos

    @TC008
    Scenario: Validar contenido del apartado de ayuda o preguntas frecuentes
        When El usuario da click en ayuda
        Then El usuario ve la seccion de Preguntas frecuentes

    @TC009
    Scenario: Validar cambio de estado o region en el portal
        When El usuario cambia de region a Guerrero
        Then El usuario ve el cambio de region 

    @TC010 
    Scenario: Validar enlaces de redes sociales y acceso en el pie de pagina
        When se desplaza al final del sitio
        Then los enlaces de redes sociales son visibles y apuntan a la URL correcta
        And los accesos rápidos son visibles y apuntan a la URL correcta 

    @TC011
    Scenario: Validar comportamiento del menu en vista movil
    Given El usuario esta en simulacion movil
        When El usuario da click en menu
        Then Puede ver todas las opciones 

    @TC012
    Scenario: Validar acceso a documentos legales del sitio
        When El usuario se desplaza hasta el final de la pagina
        And El usuario hace click en terminos y condiciones
        Then El usuario debe ver Terminos y condiciones



