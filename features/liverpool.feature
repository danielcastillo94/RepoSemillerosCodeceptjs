@liverpool
Feature: Busqueda de productos
    Background: 
        Given el usuario valida y esta en la pagina principal 

    @TC001
    Scenario: Buscar producto existente (ej: "zapatillas")
        When el usuario da clic en la barra de busqueda 
        And el usuario ingresa la palabra "zapatillas"
        And da enter 
        Then la pagina carga y muestra los resultados de la busqueda

    @TC-002: 
    Scenario: Buscar producto inexistente
        When el usuario da clic en la barra de busqueda 
        And ingresa un texto invalido por ejemplo: isbxisbx
        And da enter 
        Then la pagina carga y muestra el mensaje de: lo sentimos, no encontramos nada para (texto ingresado)

    @TC-003: 
    Scenario: Validar resultados mostrados
        When el usuario da clic en la barra de busqueda 
        And escribe un producto existente
        And da enter
        Then la pagina carga y muestra resultados que coinciden con la busqueda y se comprueba con el final de la url donde aparece el nombre del producto

Feature: navegacion por categorias
    Background: 
        Given el usuario valida y se encuentra en la pagina pagina principal 

    @TC-004: 
    Scenario: Expandir categoría principal
        When el usuario da clic en categorias
        Then el submenu de categorias carga al lado izquierdo de la pagina

    @TC-005: 
    Scenario: Acceder a subcategoría
        When el usuario da clic en categorias
        And el submenu de categorias carga al lado izquierdo de la pagina
        And da clic en videojuegos
        Then la pagina carga y te envia a la pagina de la categoría
    
    @TC-006: 
    Scenario: Validar productos de categoría
        When el usuario da clic en categorias
        And el submenu de categorias carga al lado izquierdo de la pagina
        And da clic en videojuegos
        And la pagina carga y te envia a la pagina de la categoría
        Then podemos ver las opciones de productos por marcas

Feature: Filtro por precios
    Background: 
        Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-007: 
    Scenario: Filtrar precio de menor a mayor
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic en el boton (Ordenar por:) del lado derecho 
        And selecciona menor precio
        Then los resultados se ordenan de precio menor a mayor 

    @TC-008: 
    Scenario: Filtrar por rango específico (ej: $500-$2000)
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado precios
        And coloca el rango $500 - $2000
        Then da clic en el boton (>) de la derecha 

    @TC-009: 
    Scenario: Validar que solo mostrar en rango
        When el usuario ya filtro los precios
        Then la pagina carga y muestra unicamente productos con el rango establecido 

Feature: filtro por marca
    Background: 
        Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-010: 
    Scenario: Seleccionar 1 marca
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado marcas
        And selecciona una marca
        Then la pagina carga los productos de la marca seleccionada

    @TC-011: 
    Scenario: Seleccionar múltiples marcas
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado marcas
        And selecciona una marca mas dejando la palomita en rosa de la marca anteriormente seleccionada
        Then la pagina carga los productos de la marcas seleccionadas

    @TC-012: 
    Scenario: Deseleccionar marca
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado marcas
        And da clic en la marca que desea eliminar
        Then la pagina carga los productos de la marca restante

Feature: filtro por talla/medida
    Background: 
        Given el usuario busco un articulo de ropa y se muestran los resultados 

    @TC-013: 
    Scenario: Filtrar por talla (XS, S, M, L, XL)
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado talla
        And selecciona una talla
        Then la pagina carga los productos de la talla seleccionada

    @TC-014: 
    Scenario: Filtrar por color
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado color
        And selecciona un color
        Then la pagina carga los productos del color seleccionado

    @TC-015: 
    Scenario: Combinar filtros talla + color
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And se desplaza en el submenu del lado izquierdo buscando el apartado talla
        And selecciona una talla
        And se desplaza en el submenu del lado izquierdo buscando el apartado color
        And selecciona un color
        Then la pagina carga los productos del color y talla seleccionada


Feature: ordenamiento de resultados
    Background: 
        Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-016: 
    Scenario: Ordenar por relevancia
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic en el boton (Ordenar por:) del lado derecho 
        And selecciona destacados
        Then los resultados se ordenan por relevancia

    @TC-017: 
    Scenario: Ordenar por precio (menor a mayor)
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic en el boton (Ordenar por:) del lado derecho 
        And selecciona menor precio
        Then los resultados se ordenan de precio menor a mayor 

    @TC-018: 
    Scenario: Ordenar por precio (mayor a menor)
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic en el boton (Ordenar por:) del lado derecho 
        And selecciona mayor precio
        Then los resultados se ordenan de precio mayor a menor

    @TC-019: 
    Scenario: Ordenar por más nuevo
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic en el boton (Ordenar por:) del lado derecho 
        And selecciona novedades
        Then los resultados se ordenan por mas nuevo 

Feature: detalle de producto - basico
    Background: 
        Given el usuario escogio un producto despues de la busqueda

    @TC-020: 
    Scenario: Abrir detalle de producto
        When el usuario se encuentra y visualiza los resultados del producto buscado
        Then da clic sobre un producto  

    @TC-021: 
    Scenario: Validar nombre, precio, descripción
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic sobre un producto 
        Then la pagina carga y se muestran los detalles del producto 

    @TC-022: 
    Scenario: Ver galería de imágenes
        When el usuario se encuentra y visualiza los resultados del producto buscado
        And da clic sobre un producto 
        And la pagina carga y se muestran los detalles del producto
        Then desplazamos la pagina para ver la galeria de imagenes

Feature: detalle de producto stock y disponibilidad 
    Background: 
        Given el usuario escogio un producto despues de la busqueda y dio clic en el 

    @TC-023: 
    Scenario: Validar stock disponible
        When el usuario se encuentra en la pagina del producto
        And se desplaza la boton de (comprar ahora) 
        Then si el boton esta habilitado hay stock disponible 
    
    @TC-024: 
    Scenario: Ver tiendas cercanas con stock
        When el usuario se encuentra en la pagina del producto
        And da clic en el boton (ver disponibilidad en tienda)
        And el submenu de la derecha se habilita
        And se desplaza 
        And da clic en su estado
        Then se muestran tiendas con stock disponible en su estado

    @TC-025: 
    Scenario: Validar SKU y código de producto
        When el usuario se encuentra en la pagina del producto
        Then el codigo de producto aparece arriba del nombre del producto 

Feature: detalle de producto - reviews
    Background: 
        Given el usuario escogio un producto despues de la busqueda y dio clic en el 

    @TC-026: 
    Scenario: Ver reseñas de producto
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        Then aparecen las opiniones del producto
    
    @TC-027: 
    Scenario: Filtrar por calificación (estrellas)
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de (ordenar por) aparece en el lado derecho y el usuario da clic
        And el submenu de filtros aparece
        And el usuario da clic en: mayor calificación
        Then las opiniones se actualizan de mayor a menor calificación

    @TC-028: 
    Scenario: Ver fotos en reviews
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And aparecen las opiniones del producto
        Then si la opinion tiene imagenes apareceran con la reseña

Feature: agregar al carrito - un producto 
    Background: 
        Given el usuario se encuentra en el producto 
    
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
        Then aparece del lado derecho: Total (IVA incluido) con el valor de los productos 

    @TC-031: 
    Scenario: Ver confirmación de agregado
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de (agregar a mi bolsa) aparece
        And el usuario da clic en el 
        Then un mensaje de confirmacion aparece durante unos segundos  

Feature: agregar al carrito - multiples productos 
    Background: 
        Given el usuario ya agrego uno o mas productos al carrito

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
        Then el total de los productos aparece del lado derecho de la siguiente manera: Total (IVA incluido): 
    
    @TC-034:
    Scenario: Ver subtotal actualizado
        When el usuario ya agrego productos a su bolsa
        And da clic en el boton del carrito al lado derecho de la pagina
        And la pagina del carrito carga 
        And el total de los productos aparece del lado derecho de la siguiente manera: Total (IVA incluido): 
        And si el usuario da clic en el boton de bote de basura de un producto
        And el mensaje de confirmacion aparece
        And el usuario da clic en el boton aceptar
        Then la pagina se actualiza y el subtotal tambien 

Feature: agregar a Wishlist
    Background: 
        Given el usuario ya inicio sesion con su cuenta

    @TC-035:
    Scenario: Agregar producto a wishlist
        When el usuario ya agrego un producto y se encuentra en la pagina de su bolsa   
        And da clic en el boton de: Mover a wishlist junto a la imagen del producto
        And el submenu del lado derecho aparece
        And selecciona una lista
        Then aparece un mensaje de confirmacion que indica que el producto fue movido a la lista de deseos
    
    @TC-036: 
    Scenario: Ver wishlist actualizada
        When el usuario se encuentra en la pagina de wishlist
        And selecciona una de sus listas
        And da clic sobre ella
        Then la pagina se actualiza y se muestran los productos de la lista de deseos

    @TC-037:
    Scenario: Remover de wishlist
        When el usuario se encuentra en la pagina de wishlist
        And selecciona una de sus listas
        And da clic sobre ella
        And la pagina se actualiza y se muestran los productos de la lista de deseos
        And el usuario da clic en los 3 puntitos que aparecen en el lado derecho del producto
        And da clic en eliminar
        And el mensaje de confirmacion aparece
        And el usuario da clic en el boton eliminar
        Then la pagina se actualiza, desaparece el producto y un mensaje de confirmacion es visible durante unos segundos

Feature: Comparar Productos (De momento la pagina no cuenta con opcion para comparar productos por ende no se pueden realizar los casos TC038 -TC040)
    Background: 
        Given el usuario escogio un producto a comparar con otro

    @TC-038:
    Scenario: Agregar producto a comparación
        
    @TC-039:
    Scenario: Agregar segundo producto

    @TC-040:
    Scenario: Ver tabla de comparación


Feature: Carrito - Cantidad y Cambios
    Background: 
        Given el usuario tiene uno o mas productos en el carrito

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

Feature: Carrito - Totales y Impuestos
    Background: 
        Given el usuario ya inicio sesion y se encuentra en la pagina de pago

    @TC-044: 
    Scenario: Validar subtotal correcto
        When el usuario se encuentra en la pagina de pago
        Then el subtotal se muestra a la derecha de la pagina de la siguiente manera: Subtotal: y el monto de los productos

    @TC-045:
    Scenario: Validar cálculo de impuestos (De momento no existe un apartado que indique algo relacionado a los impuestos)
        

    @TC-046:
    Scenario: Validar total final
        When el usuario se encuentra en la pagina de pago
        Then el total se muestra a la derecha de la pagina de la siguiente manera: Total (IVA incluido): y el monto de los productos

Feature: Código Promocional
    Background: 
        Given el usuario se encuentra en la pagina de pago y cuenta con un codigo promocional valido/vigente

    @TC-047: 
    Scenario: Aplicar código promocional válido

    @TC-048:
    Scenario: Validar descuento aplicado
    
    @TC-049: 
    Scenario: Remover código promocional

Feature: Checkout - Datos Personales
    Background: 
        Given el usuario se encuentra en la pagina de pago 

    @TC-050: 
    Scenario: Llenar formulario (nombre, email, teléfono)

    @TC-051:
    Scenario: Validar email válido

    @TC-052:
    Scenario: Validar teléfono válido


Feature: Checkout - Dirección de Envío
    Background: 
        Given el usuario se encuentra en la pagina de pago 

    @TC-053: 
    Scenario: Seleccionar dirección guardada
    
    @TC-054: 
    Scenario: Agregar dirección nueva
    
    @TC-055: 
    Scenario: Validar campos de dirección

Feature: Checkout - Método de Envío
    Background: 
        Given el usuario se encuentra en la pagina de pago 

    @TC-056:
    Scenario: Ver opciones de envío disponibles
    
    @TC-057: 
    Scenario: Seleccionar envío estándar
    
    @TC-058:
    Scenario: Seleccionar envío express


Feature: Checkout - Método de Pago
    Background: 
        Given el usuario se encuentra en la pagina de pago 

    @TC-059:
    Scenario: Seleccionar pago con tarjeta
    
    @TC-060: 
    Scenario: Validar campos de tarjeta

    @TC-061:
    Scenario: Ver resumen antes de pagar


Feature: Flujo Completo E2E (Búsqueda → Compra)
    Background: 
        Given el usuario se encuentra en la pagina principal

    @TC-062: 
    Scenario: Buscar producto

    @TC-063: 
    Scenario: Agregar a carrito

    @TC-064: 
    Scenario: Checkout completo hasta confirmación

Feature: Login y Cuenta de Usuario
    Background: 
        Given el usuario se encuentra en la pagina de login

    @TC-065: 
    Scenario: Registrar cuenta nueva

    @TC-066: 
    Scenario: Login con cuenta existente

    @TC-067: 
    Scenario: Ver perfil y direcciones guardadas