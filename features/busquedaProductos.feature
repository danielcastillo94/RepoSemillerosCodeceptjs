@busquedaProductos
Feature: Validar la Búsqueda de Productos

    Background: 
        Given El usuario esta en la pagina principal

    @T001
    Scenario: Buscar producto existente
        When El usuario da click en el buscador
        And El usuario escribe "Xbox series x"
        And El usuario da 'Enter'
        Then Se muestran resultados del producto "Xbox series x"
        And El usuario selecciona la card de la consola

    @T002
    Scenario: Buscar producto inexistente
        When El usuario da click en el buscador
        And El usuario escribe "vvnvnvnc"
        And El usuario da 'Enter'         
        Then Aparece el mensaje de "Lo sentimos, no encontramos nada"
      
    @T003
    Scenario: Validar resultados mostrados
        When El usuario da click en el buscador
        And El usuario escribe "Videojuegos"
        And El usuario da 'Enter'
        Then Se muestran resultados generales del producto "Videojuegos"
   