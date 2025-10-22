Feature: Validar carga del portal y elementos

    Background:
        Given El usuario se encuentra en la pagina principal de telcel

    @carga-portal
    Scenario: Verificar la carga del portal y de los elementos
        And El usuario debe ver el banner principal
        And El usuario debe ver el menu principal
        Then El usuario debe ver el logotipo

    @verificar-terminos-condiciones
    Scenario: Verificar la carga de los terminos y condiciones en la pagina principal

        When El usuario se desplaza hasta el final de la pagina
        And El usuario hace click en terminos y condiciones
        Then El usuario debe ver Terminos y condiciones

    @navegacion-planes-submenus
    Scenario: Verificar navegacion hacia la seccion de planes y submenus

        When El usuario hace click en el boton "Menú"
        And EL usuario puede ver el texto "Móvil"
        Then El usuario debe ver el texto "Pagos, paquetes y recargas"

    @detalle-plan-especifico
    Scenario: Verificar ingreso al detalle de un plan especifico

        When El usuario se desplaza hasta el banner de telcel 5g
        #And El usuario da click en el boton "Conoce más"
        #Then El usuario debe ver el boton "Descúbrelo"

    @barra-busqueda
    Scenario: Verificar funcionalidad de la barra de busqueda

        When El usuario hace click en la barra de busqueda
        #And El usuario escribe "oppo"
        #Then El usuario deberia ver resultados relacionados con celulares oppo
        #And El usuario selecciona un equipo de la lista
        #Then El usuario deberia ver una imagen del equipo
        #And El usuario deberia ver el precio del equipo
        #And El usuario deberia ver los textos "Camara" y "Memoria"

    @regionalizacion
    Scenario: Verificar cambio de regionalizacion

        When El usuario hace click en el menu deslizable de estados
        #And El usuario selecciona un pais
        #Then El usuario deberia ver el texto de la regionalizacion

    @enlaces
    Scenario: Verficar que los enlaces redirigen correctamente a sus paginas

        When El usuario se desplaza hasta el final de la pagina
        #And El usuario hace click en el enlace facebook
        #Then El usuario deberia redirigirse correctamente al enlace
        #And El usuario hace click en el enlace a x
        #Then El usuario deberia ser redirigido correctamente a x


