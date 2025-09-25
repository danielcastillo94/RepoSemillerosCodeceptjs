


Feature: Carrito de compras

   Scenario: El usuario se encuentra en la página de detalle de un producto 
   Given El usuario agrega cantidades de varios productos al carrito 
   When El usuario revisa el carrito de compras
   Then El sistema refleja la cantidad de productos seleccionados en el carrito 
   And Refleja la cantidad total del precio de compra


   Examples
   | producto | cantidad |
   |----------|----------|
   | Producto A | 2        |
   | Producto B | 3        |
