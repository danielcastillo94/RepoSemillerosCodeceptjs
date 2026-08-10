@liverpool
Feature: Busqueda de productos
    Background: 
        Given el usuario esta en la pagina principal 

    @TC001
    Scenario: Buscar producto existente (ej: "zapatillas")

    @TC-002: 
    Scenario: Buscar producto inexistente

    @TC-003: 
    Scenario: Validar resultados mostrados

Feature: navegacion por categorias
    Background: 
        Given el usuario esta en la pagina pagina principal y dio clic en el submenu categorias

    @TC-004: 
    Scenario: Expandir categoría principal

    @TC-005: 
    Scenario: Acceder a subcategoría
    
    @TC-006: 
    Scenario: Validar productos de categoría

Feature: Filtro por precios
    Background: 
        Given el usuario busco un producto

    @TC-007: 
    Scenario: Filtrar precio de menor a mayor

    @TC-008: 
    Scenario: Filtrar por rango específico (ej: $500-$2000)
    
    @TC-009: 
    Scenario: Validar que solo mostrar en rango

Feature: filtro por marca
    Background: 
        Given el usuario busco un producto

    @TC-010: 
    Scenario: Seleccionar 1 marca
    
    @TC-011: 
    Scenario: Seleccionar múltiples marcas
    
    @TC-012: 
    Scenario: Deseleccionar marca

Feature: filtro por talla/medida
    Background: 
        Given el usuario busco un producto

    @TC-013: 
    Scenario: Filtrar por talla (XS, S, M, L, XL)
    
    @TC-014: 
    Scenario: Filtrar por color
    
    @TC-015: 
    Scenario: Combinar filtros talla + color

Feature: ordenamiento de resultados
    Background: 
        Given el usuario busco un producto

    @TC-016: 
    Scenario: Ordenar por relevancia

    @TC-017: 
    Scenario: Ordenar por precio (menor a mayor)

    @TC-018: 
    Scenario: Ordenar por precio (mayor a menor)

    @TC-019: 
    Scenario: Ordenar por más nuevo

Feature: detalle de producto - basico
    Background: 
        Given el usuario escogio un producto despues de la busqueda

    @TC-020: 
    Scenario: Abrir detalle de producto

    @TC-021: 
    Scenario: Validar nombre, precio, descripción

    @TC-022: 
    Scenario: Ver galería de imágenes

Feature: detalle de producto stock y disponibilidad 
    Background: 
        Given el usuario escogio un producto despues de la busqueda y dio clic en el 

    @TC-023: 
    Scenario: Validar stock disponible
    
    @TC-024: 
    Scenario: Ver tiendas cercanas con stock

    @TC-025: 
    Scenario: Validar SKU y código de producto

Feature: detalle de producto - reviews
    Background: 
        Given el usuario escogio un producto despues de la busqueda y dio clic en el 

    @TC-026: 
    Scenario: Ver reseñas de producto
    
    @TC-027: 
    Scenario: Filtrar por calificación (estrellas)

    @TC-028: 
    Scenario: Ver fotos en reviews

Feature: agregar al carrito - un producto 
    Background: 
        Given el usuario se encuentra en el producto 
    
    @TC-029: 
    Scenario: Agregar 1 producto al carrito

    @TC-030: 
    Scenario: Validar cantidad en badge

    @TC-031: 
    Scenario: Ver confirmación de agregado

Feature: agregar al carrito - multiples productos 
    Background: 
        Given el usuario ya agrego uno o mas productos al carrito

    @TC-032: 
    Scenario: Agregar 3+ productos diferentes
    
    @TC-033:
    Scenario: Validar cantidad total en carrito
    
    @TC-034:
    Scenario: Ver subtotal actualizado


Feature: agregar a Wishlist
    Background: 
        Given el usuario se encuentra en un producto que le agrada pero no va a comprar de momento

    @TC-035:
    Scenario: Agregar producto a wishlist
    
    @TC-036: 
    Scenario: Ver wishlist actualizada

    @TC-037:
    Scenario: Remover de wishlist

Feature: Comparar Productos
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

    @TC-042: 
    Scenario: Disminuir cantidad
    
    @TC-043:
    Scenario: Remover producto del carrito

Feature: Carrito - Totales y Impuestos
    Background: 
        Given el usuario tiene productos por pagar y se encuentra en la pagina de pago

    @TC-044: 
    Scenario: Validar subtotal correcto
    
    @TC-045:
    Scenario: Validar cálculo de impuestos

    @TC-046:
    Scenario: Validar total final

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