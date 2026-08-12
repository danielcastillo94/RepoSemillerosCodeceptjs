@busquedaProductos

Feature: Validar la Búsqueda de Productos
    Background: Caso 
         Given El usuario esta en la pagina principal
    

    @T001
    Scenario: Buscar producto existente
          When El usuario da click en el buscador
          When El usuario escribe "Videojuegos"
          When El usuario da 'Enter'
          Then Se muestran diferentes productos


     @T002
     Scenario: Buscar producto inexistente

          When El usuario da click en el buscador
          When El usuario escribe "vvnvnvnc"
          When El usuario da 'Enter'         
          Then Aparece la pagina de "Lo sentimos, no encontramos nada"
      
     