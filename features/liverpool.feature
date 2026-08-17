@liverpool
Feature: Automatizacion liverpool
    Background: 
        Given el usuario se encuentra en la página principal de Liverpool
    
    #Feature: Busqueda de productos

    @TC-001
    Scenario: Buscar producto existente (ej: "batman")
        When el usuario da clic en la barra de busqueda
        And el usuario ingresa "batman"
        And da enter 
        Then la pagina carga y muestra los resultados relacionados a "batman"

    @TC-002: 
    Scenario: Buscar producto inexistente (ej: "isbxisbx")
        When el usuario da clic en la barra de busqueda 
        And el usuario ingresa "isbxisbx"
        And da enter 
        Then la pagina muestra el mensaje de producto no encontrado para "isbxisbx"

    @TC-003: 
    Scenario: Validar resultados mostrados
        When el usuario da clic en la barra de busqueda
        And el usuario ingresa "Batman"
        And da enter
        Then la URL contiene "Batman"

    #Feature: navegacion por categorias
    #Background: 
        #Given el usuario valida y se encuentra en la pagina pagina principal 

    @TC-004: 
    Scenario: Expandir categoría principal
        When el usuario da clic en categorias
        Then el submenu de categorias carga al lado izquierdo de la pagina

    @TC-005
    Scenario: Acceder a categoría (ej: "Videojuegos")
    When el usuario da clic en categorias
    And el submenu de categorias carga al lado izquierdo de la pagina
    And da clic en "Videojuegos"
    Then la pagina carga y muestra la categoria "Videojuegos"

    @TC-006
    Scenario: Validar productos de categoría (ej: "Videojuegos")
    When el usuario da clic en categorias
    And el submenu de categorias carga al lado izquierdo de la pagina
    And da clic en "Videojuegos"
    And la pagina carga y muestra la categoria "Videojuegos"
    Then podemos ver las opciones de productos de "Videojuegos"

    #Feature: Filtro por precios
    #Background: 
        #Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-007: 
    Scenario: Filtrar precio de menor a mayor    
        Given el usuario busca el producto "batman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Menor precio"
        Then los resultados se ordenan de precio menor a mayor

    @TC-008: 
    Scenario: Filtrar por rango específico (ej: $500-$2000)
        Given el usuario busca el producto "batman"
        When se desplaza en el submenu del lado izquierdo buscando el apartado precios
        And coloca el rango $500 - $2000
        And da clic en el botón para aplicar el rango
        Then los resultados se actualizan aplicando el rango de $500 a $2000

    @TC-009: 
    Scenario: Validar que solo mostrar en rango
        Given el usuario busca el producto "batman"
        When se desplaza en el submenu del lado izquierdo buscando el apartado precios
        And coloca el rango $500 - $2000
        And da clic en el botón para aplicar el rango
        Then la pagina muestra unicamente productos entre $500 y $2000

    #Feature: filtro por marca
    #Background: 
        #Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-010:
    Scenario: Seleccionar 1 marca
    Given el usuario busca el producto "batman"
    When se desplaza en el submenu del lado izquierdo buscando el apartado marcas
    And selecciona la marca "DC"
    Then la pagina carga los productos de la marca "DC"

    @TC-011: 
    Scenario: Seleccionar múltiples marcas
    Given el usuario busca el producto "batman"
    When se desplaza en el submenu del lado izquierdo buscando el apartado marcas
    And selecciona la marca "DC"
    And da clic en "Ver más" de marcas
    And selecciona la marca "FUNKO"
    Then la pagina carga los productos de las marcas "DC" y "FUNKO"

    @TC-012: 
    Scenario: Deseleccionar marca
        Given el usuario busca el producto "batman"
        And se desplaza en el submenu del lado izquierdo buscando el apartado marcas
        And selecciona la marca "DC"
        And da clic en "Ver más" de marcas
        And selecciona la marca "FUNKO"
        When da clic en la marca "DC" para eliminarla
        Then la pagina carga los productos de la marca "FUNKO"

    #Feature: filtro por talla/medida
    #Background: 
        #Given el usuario busco un articulo de ropa y se muestran los resultados 

    @TC-013: 
    Scenario: Filtrar por talla (XS, S, M, L, XL)
    Given el usuario busca el producto "aeropostal"
    When se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"
    And selecciona la talla "Grande"
    Then la pagina carga los productos de la talla "Grande"

    @TC-014: 
    Scenario: Filtrar por color
        Given el usuario busca el producto "aeropostal"
        When se desplaza en el submenu del lado izquierdo buscando el apartado "Color"
        And selecciona el color "Negro"
        Then la pagina carga los productos del color "Negro"

    @TC-015: 
    Scenario: Combinar filtros talla + color
        Given el usuario busca el producto "aeropostal"
        When se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"
        And selecciona la talla "Grande"
        And se desplaza en el submenu del lado izquierdo buscando el apartado "Color"
        And selecciona el color "Negro"
        Then la pagina carga los productos del color "Negro" y talla "Grande"


    #Feature: ordenamiento de resultados
    #Background: 
        #Given el usuario ya busco un producto existente y se muestran los resultados 

    @TC-016: 
    Scenario: Ordenar por relevancia
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Destacados"
        Then los resultados se ordenan por relevancia

    @TC-017: 
    Scenario: Ordenar por precio (menor a mayor)
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Menor precio"
        Then los resultados se ordenan de precio menor a mayor

    @TC-018: 
    Scenario: Ordenar por precio (mayor a menor)
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Mayor precio"
        Then los resultados se ordenan de precio mayor a menor

    @TC-019: 
    Scenario: Ordenar por más nuevo
        Given el usuario busca el producto "spiderman"
        When da clic en el boton "Ordenar por:"
        And selecciona "Novedades"
        Then los resultados se ordenan de más nuevo a más antiguo

    #Feature: detalle de producto - basico
    #Background: 
        #Given el usuario escogio un producto despues de la busqueda

    @TC-020:
    Scenario: Abrir detalle de producto
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        Then la página de detalle del producto se muestra

    @TC-021:
    Scenario: Validar nombre, precio y descripción
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        Then la pagina carga y se muestran los detalles del producto

    @TC-022:
    Scenario: Ver galería de imágenes
        Given el usuario busca el producto "halo"
        When da clic sobre un producto
        And la pagina carga y se muestran los detalles del producto
        Then desplazamos la pagina para ver la galeria de imagenes

    #Feature: detalle de producto stock y disponibilidad 
    #Background: 
        #Given el usuario escogio un producto despues de la busqueda y dio clic en el 

    @TC-023: 
    Scenario: Validar stock disponible
        When el usuario se encuentra en la pagina del producto
        And se desplaza hasta el boton de (comprar ahora) 
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

    #Feature: detalle de producto - reviews
    #Background: 
        #Given el usuario escogio un producto despues de la busqueda y dio clic en el 

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

    #Feature: agregar al carrito - un producto 
    #Background: 
        #Given el usuario se encuentra en el producto 
    
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

    #Feature: agregar al carrito - multiples productos 
    #Background: 
        #Given el usuario ya agrego uno o mas productos al carrito

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

    #Feature: agregar a Wishlist
    #Background: 
        #Given el usuario ya inicio sesion con su cuenta

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

    #Feature: Comparar Productos (De momento la pagina no cuenta con opcion para comparar productos por ende no se pueden realizar los casos TC038 -TC040)
    #Background: 
        #Given el usuario escogio un producto a comparar con otro

    @TC-038:
    Scenario: Agregar producto a comparación
        
    @TC-039:
    Scenario: Agregar segundo producto

    @TC-040:
    Scenario: Ver tabla de comparación

    # No disponible actualmente en Liverpool.
    # TC038-TC040 quedan fuera de ejecución.

    #Feature: Carrito - Cantidad y Cambios
    #Background: 
        #Given el usuario tiene uno o mas productos en el carrito

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

    #Feature: Carrito - Totales y Impuestos
    #Background: 
        #Given el usuario ya inicio sesion y se encuentra en la pagina de pago

    @TC-044: 
    Scenario: Validar subtotal correcto
        When el usuario se encuentra en la pagina de pago
        Then el subtotal se muestra a la derecha de la pagina de la siguiente manera: Subtotal: y el monto de los productos

    @TC-045:
    Scenario: Validar cálculo de impuestos (De momento no existe un apartado que indique algo relacionado a los impuestos)
        
    # No disponible actualmente en Liverpool.
    # TC045 queda fuera de ejecución.

    @TC-046:
    Scenario: Validar total final
        When el usuario se encuentra en la pagina de pago
        Then el total se muestra a la derecha de la pagina de la siguiente manera: Total (IVA incluido): y el monto de los productos

    #Feature: Código Promocional
    #Background: 
        #Given el usuario ya inicio sesion con su cuenta y se encuentra en la pagina de pago y cuenta con un codigo promocional valido/vigente

    @TC-047: 
    Scenario: Aplicar código promocional válido
        When el usuario se encuentra en la pagina de pago
        And da clic en el boton cupones del lado derecho
        And el submenu aparece del lado derecho
        And el usuario agrega su cupon en la barra que dice: Agregar cupon
        And el usuario da clic en el boton: Aplicar
        Then si el cupon es valido se agrega a la compra y se muestra un mensaje de confirmacion durante unos segundos

    @TC-048:
    Scenario: Validar descuento aplicado
        When el usuario ya agrego un codigo valido 
        And aparece el apartado: cupon aplicado 
        And el apartado del lado derecho cupones muestra una cantidad 
        Then la cantidad mostrada se resta del subtotal y el total del producto se actualiza
    
    @TC-049: 
    Scenario: Remover código promocional
        When el usuario ya agrego un codigo valido 
        And aparece el apartado: cupon aplicado
        And el usuario da clic en: Remover
        And confirma la decision
        Then el cupon se remueve y el total se actualiza

    #Feature: Checkout - Datos Personales (La pagina no solicita datos personales a la hora de comprar productos ya que para comprar, el inicio de sesion es obligatorio y por ende se toman los datos personales de la cuenta)
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 

    @TC-050: 
    Scenario: Llenar formulario (nombre, email, teléfono)

    @TC-051:
    Scenario: Validar email válido

    @TC-052:
    Scenario: Validar teléfono válido

    # No aplica actualmente.
    # Liverpool obtiene los datos personales desde la cuenta autenticada.
    # TC050-TC052 quedan fuera de ejecución.

    #Feature: Checkout - Dirección de Envío
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 
    
    @TC-053: 
    Scenario: Seleccionar dirección guardada
        When el usuario da clic en: cambiar del apartado entrega
        And el submenu de direcciones aparece al lado derecho 
        And el usuario da clic en una direccion 
        And da clic en el boton: Continuar
        Then la pagina se actualiza y un mensaje de confirmacion aparece durante unos segundos

    @TC-054: 
    Scenario: Agregar dirección nueva
        When el usuario da clic en: cambiar que se encuentra en el apartado entrega
        And el submenu de direcciones aparece al lado derecho de la pantalla
        And el usuario da clic en el boton agregar direccion 
        Then aparece el formulario de datos para la nueva direccion
    
    @TC-055: 
    Scenario: Validar campos de dirección
        When el usuario visualiza el formulario de datos para la nueva direccion
        And completa el campo nombre
        And el campo apellido paterno
        And el campo apellido materno
        And el alias de direccion
        And el codigo postal
        And el estado
        And el municipio
        And la colonia
        And la ciudad
        And la calle
        And el numero exterior
        And el telefono celular
        And el telefono particular 
        And el usuario da clic en el boton: usar esta direccion
        Then la direccion se guarda y un mensaje de confirmacion aparece durante unos segundos

    #Feature: Checkout - Método de Envío (La pagina de momento no tiene opcion de envio estandar o express)
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 

    @TC-056:
    Scenario: Ver opciones de envío disponibles
        When el usuario da clic en: cambiar del apartado direccion
        And el submenu de direccion de entrega aparece
        Then se visualizan dos opciones de envio: a tu domicilio o click and collect
    
    @TC-057: 
    Scenario: Seleccionar envío estándar
    
    @TC-058:
    Scenario: Seleccionar envío express

    # No disponible actualmente en Liverpool.
    # TC057-TC058 quedan fuera de ejecución.

    #Feature: Checkout - Método de Pago
    #Background: 
        #Given el usuario inicio sesion en su cuenta y se encuentra en la pagina de pago 

    @TC-059:
    Scenario: Seleccionar pago con tarjeta
        When el usuario da clic en: cambiar. del apartado metodo de pago 
        And el submenu de metodos de pago aparece al lado derecho 
        Then el usuario da clic en tarjetas de credito/debito

    @TC-060: 
    Scenario: Validar campos de tarjeta
        When se visualizan las opciones de tarjetas de credito/debito
        And el usuario da clic en Agrega tarjeta
        And el formulario de agregar tarjeta aparece
        And el usuario completa el campo alias de tarjeta 
        And nombre completo
        And numero de tarjeta
        And selecciona una direccion
        And el usuario da clic en el boton: Continuar
        Then la tarjeta se agrega y valida, igualmente aparece un mensaje de confirmacion durante unos segundos


    @TC-061:
    Scenario: Ver resumen antes de pagar
        Then el usuario ve los detalles de pago antes de Continuar la compra 


    #Feature: Flujo Completo E2E (Búsqueda → Compra)
    #Background: 
        #Given el usuario se encuentra en la pagina principal y ya inicio sesion en su cuenta 

    @TC-062: 
    Scenario: Buscar producto
        When el usuario da clic en la barra de busqueda 
        And el usuario ingresa el producto a buscar 
        Then da enter 

    @TC-063: 
    Scenario: Agregar a carrito
        When el usuario se encuentra en la pagina del producto
        And desliza la pagina 
        And el boton de: agregar a mi bolsa aparece
        Then el usuario da clic en el y se agrega el producto a la bolsa

    @TC-064: 
    Scenario: Checkout completo hasta confirmación
        When el usuario se encuentra en la pagina de pago
        And el usuario deja o escoge una direccion
        And el usuario deja o escoge una tarjeta de pago
        And el usuario coloca el CVV de la tarjeta
        And el usuario verifica los productos
        And el usuario da clic en el boton: finalizar compra 
        Then el checkout y confirmacion esta hecho 

    #Feature: Login y Cuenta de Usuario
    #Background: 
        #Given el usuario se encuentra en la pagina de login

    @TC-065: 
    Scenario: Registrar cuenta nueva
        When el usuario visualiza la pagina de login
        And desplaza la pagina 
        And da clic en: Crear cuenta
        And la pagina se actualiza
        And el usuario ve el mensaje crear cuenta
        And da clic en el campo correo electronico e ingresa su correo
        And da clic en el campo contraseña e ingresa una contraseña
        And da clic en el boton crear cuenta
        Then un mensaje de confirmacion aparecera y pedira confirmar la cuenta en el correo ingresado

    @TC-066: 
    Scenario: Login con cuenta existente (Nota: si la cuenta tiene verificacion de dos pasos o es la primera vez que se ingresa desde un navegador nuevo, la pagina solicitara un codigo de verificacion)
        When el usuario visualiza la pagina de login
        And da clic en el campo correo electronico e ingresa su correo
        And da clic en el campo contraseña e ingresa su contraseña
        And da clic en el boton: iniciar sesion
        Then la pagina se actualiza y muestra la pagina principal

    @TC-067: 
    Scenario: Ver perfil y direcciones guardadas
        When el usuario visualiza la pagina principal
        And da clic en el icono o nombre de su perfil
        And la pagina: mi cuenta se visualiza
        And da clic en: direcciones que se encuentra en el submenu izquierdo
        Then las direcciones guardadas aparecen

    #Feature: Validación inicial de Liverpool
    @Smoke
    Scenario: Validar elementos principales del home
        Given el usuario se encuentra en la página principal de Liverpool
        Then los elementos principales del home son visibles