Feature: Validar carga del portal y elementos

Scenario: El usuario se encuentra dentro de la pagina de Telcel

Given El usuario se encuentra en la pagina principal de telcel
And El usuario debe ver el banner principal
And El usuario debe ver el menu principal
Then El usuario debe ver el logotipo

Scenario: El usuario se encuentra dentro de la pagina de Telcel plus

Given El usuario se encuentra en la pagina principal de telcel
When El usuario hace click en el boton "Menú"
And EL usuario puede ver el texto "Móvil"
Then El usuario debe ver el texto "Pagos, paquetes y recargas"

Scenario: El usuario se desliza por la pagina de Telcel plus

Given El usuario se encuentra en la pagina principal de telcel
When El usuario se desplaza hasta el banner de telcel 5g
And El usuario da click en el boton "Conoce mas"
Then El usuario debe ver el boton "Descubrelo"

Scenario: El usuario se encuentra en la pgina home de telcel

Given el usuario se encuentra en la pagina principal de telcel
When hace click en la barra de busqueda
And escribe "oppo"
Then deberia ver resultados relacionados con celulares oppo
And selecciona un equipo de la lista
Then deberia ver una imagen del equipo
And deberia ver el precio del equipo
And deberia ver los textos "Camara", "Pantalla" y "Memoria"

Scenario: El usuario se encuentra en "Conoce el mundo 5G"

Given el usuario se encuentra en la seccion "Conoce el mundo 5G"
When se desplaza hasta el banner de cobertura 5g
And hace click en el boton "ver cobertura"
Then deberia ver el mapa interactivo

Scenario: El usuario se encuentra dentro de la pagina de telcel

Given el usuario se encuentra en la pagina principal de telcel
When El usuario hace click en el boton "Menú"
And se posiciona sobre "Ayuda"
And hace click en "Contáctanos"
And hace click en "Correo Electrónico"
Then deberia ver el campo "contacto" y "telefono" 
And deberia ver el boton enviar

Scenario: El usuario se encuentra en la seccion de ayuda
Given el usuario se encuentra en la pagina de contactanos
When hace click en "Centro de Atención"
Then deberia ver los enlaces "Zacatecas", "Veracruz"

Scenario: El usuario se encuentra en la pgina home de telcel

Given el usuario se encuentra en la pagina home
When hace click en el menu deslizable de estados
And selecciona un pais
Then deberia ver contenido regional

Scenario: El usuario se encuentra en la pgina home de telcel

Given el usuario se encuentra en la pgina home

When el usuario se desplaza hasta el final de la pagina
And hace click en el enlace facebook
Then deberia redirigirse correctamente al enlace
And hace click en el enlace a x 
Then deberia ser redirigirse correctamente a x

Scenario: el usuario se encuentra en modo vista movil

Given el usuario se encuentra en la pagina principal
When hace click en "Menu"
And hace click en  "Movil"
Then deberia ver los textos "Entretenimiento" y "Ayuda"
