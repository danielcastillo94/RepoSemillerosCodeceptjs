Feature: Carrito de compras 
Scenario: Un usuario está en la página de detalle de un producto.
Given El usuario se encuentra en la página de detalle de un producto. 
When Se agregan distintas cantidades de distintos productos al carrito. 
Then El sistema debe reflejar correctamente la "<cantidad>" de cada "<producto>" en el carrito.

Examples: 

|producto        |cantidad|
|TV              |5  |
|Refrigerador    |10 |npm install



