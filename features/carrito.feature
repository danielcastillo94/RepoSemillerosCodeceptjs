Feature: carrito
    
    @TC-029: 
    Scenario: Agregar 1 producto al carrito
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de (agregar a mi bolsa) aparece
        And el usuario da clic en el 
        Then el articulo se agrega al carrito 

    @TC-030: 
    Scenario: Validar cantidad en badge
        When el usuario ya agrego un produto a la bolsa
        And da clic en el boton de bolsa del lado derecho
        And la pagina del carrito carga
        Then el badge del carrito muestra la cantidad de productos agregados

    @TC-031: 
    Scenario: Ver confirmación de agregado
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de (agregar a mi bolsa) aparece
        And el usuario da clic en el 
        Then un mensaje de confirmacion aparece durante unos segundos  

    @TC-032: 
    Scenario: Agregar 3+ productos diferentes
        When el usuario busca un producto en la barra de busqueda 
        And los resultados aparecen 
        And escoge un elemento
        And da clic en el 
        And la pagina del producto carga 
        And el usuario da clic en el boton agrega a mi bolsa
        And el mensaje de confirmacion aparece
        And el usuario vuelve a buscar un producto en la barra de busqueda
        And los resultados aparecen 
        And escoge un elemento
        And da clic en el 
        And la pagina del producto carga 
        And el usuario da clic en el boton agrega a mi bolsa
        And el mensaje de confirmacion aparece
        And el usuario vuelve a buscar un producto en la barra de busqueda
        And los resultados aparecen 
        And escoge un elemento
        And da clic en el 
        And la pagina del producto carga 
        And el usuario da clic en el boton agrega a mi bolsa
        And el mensaje de confirmacion aparece 
        And el usuario repite los pasos las veces que desee
        Then el boton de bolsa indica el numero de productos agregados 

    @TC-033:
    Scenario: Validar cantidad total en carrito
        When el usuario ya agrego productos a su bolsa
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga 
        Then el carrito muestra la cantidad total de productos agregados
    
    @TC-034:
    Scenario: Ver subtotal actualizado
        When el usuario ya agrego productos a su bolsa
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga 
        And el total de los productos aparece del lado derecho de la siguiente manera: Total (IVA incluido): 
        And si el usuario da clic en el boton de bote de basura de un producto
        And el mensaje de confirmacion aparece
        And el usuario da clic en el boton aceptar
        Then el subtotal se actualiza correctamente

    @TC-041:
    Scenario: Aumentar cantidad en carrito
        When el usuario ya agrego productos a su bolsa y se encuentra en la pagina de bolsa
        And el producto o productos sons visibles
        And el usuario escoge un producto
        And da clic en el boton del simbolo de mas al lado del producto 
        Then la pagina se actualiza, la cantidad de productos sube por uno y el nuevo precio se refleja

    @TC-042: 
    Scenario: Disminuir cantidad
        When el usuario ya agrego productos a su bolsa y se encuentra en la pagina de bolsa
        And el producto o productos son visibles
        And el usuario escoge un producto
        And da clic en el boton del simbolo de menos al lado del producto 
        Then la pagina se actualiza, la cantidad de productos disminuye por uno y el nuevo precio se refleja

    @TC-043:
    Scenario: Remover producto del carrito
        When el usuario ya agrego productos a su bolsa y se encuentra en la pagina de bolsa
        And el producto o productos son visibles
        And el usuario escoge un producto
        And si el usuario da clic en el boton de bote de basura de un producto
        And el mensaje de confirmacion aparece
        And el usuario da clic en el boton aceptar
        Then la pagina se actualiza, el producto desaparece y el total se actualiza 

    @TC-044: 
    Scenario: Validar subtotal correcto
        When el usuario se encuentra en la pagina de pago
        Then el subtotal se muestra a la derecha de la pagina de la siguiente manera: Subtotal: y el monto de los productos

    @TC-046:
    Scenario: Validar total final
        When el usuario se encuentra en la pagina de pago
        Then el total se muestra a la derecha de la pagina de la siguiente manera: Total (IVA incluido): y el monto de los productos