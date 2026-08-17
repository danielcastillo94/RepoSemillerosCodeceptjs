# 🎯 RETO SESIÓN 6: E-COMMERCE AUTOMATION - LIVERPOOL.COM.MX

## 📋 Resumen Ejecutivo

**Objetivo:** Automatizar funcionalidades REALES de Liverpool.com.mx

**Sitio:** https://www.liverpool.com.mx  
**Becarios:** (cada uno en rama personal)  
**Complejidad:** Alta

---

## 🛍️ FUNCIONALIDADES DE LIVERPOOL

### 1. BÚSQUEDA Y NAVEGACIÓN
- Búsqueda por keyword
- Navegación por categorías
- Subcategorías
- Breadcrumbs
- Paginación de resultados

### 2. FILTROS AVANZADOS
- Filtro por precio (rango)
- Filtro por marca
- Filtro por talla/medida
- Filtro por color
- Filtro por disponibilidad
- Ordenamiento (relevancia, precio, nuevo)

### 3. DETALLE DE PRODUCTO
- Galería de imágenes (zoom, carousel)
- Descripción del producto
- Precio (normal vs promoción)
- Disponibilidad/Stock
- SKU y código
- Especificaciones técnicas
- Envío y devoluciones
- Reseñas y calificaciones
- Botón "Agregar al carrito"
- Botón "Agregar a wishlist"
- Botón "Comparar"

### 4. CARRITO DE COMPRAS
- Agregar producto
- Cantidad variable
- Remover producto
- Ver subtotal, impuestos, total
- Código promocional
- Envío disponible
- Resumen de compra

### 5. CHECKOUT
- Login o compra sin cuenta
- Datos personales (nombre, email, teléfono)
- Dirección de envío
- Método de envío
- Método de pago
- Revisión de orden
- Confirmación

### 6. CUENTA DE USUARIO
- Registro de cuenta nueva
- Login con email/contraseña
- Perfil de usuario
- Direcciones guardadas
- Órdenes previas
- Wishlist
- Preferencias

### 7. WISHLIST/FAVORITOS
- Agregar a wishlist
- Ver wishlist
- Remover de wishlist
- Compartir wishlist
- Mover a carrito desde wishlist

### 8. COMPARAR PRODUCTOS
- Agregar producto a comparación
- Ver tabla de comparación
- Remover de comparación
- Diferencias entre productos

### 9. PROMOCIONES Y DESCUENTOS
- Banner de promociones
- Productos en oferta
- Códigos de cupón
- Descuentos automáticos
- Flash sales

### 10. REVIEWS Y RATINGS
- Ver reseñas de producto
- Filtrar por calificación
- Ordenar reviews
- Ver fotos de reviews
- Útil/No útil

### 11. STOCK E INVENTARIO
- Disponibilidad en tiempo real
- Tiendas cercanas con stock
- Pre-orden
- Agotado/Disponible

### 12. RESPONSIVE Y UX
- Vista desktop
- Vista móvil
- Navegación en móvil
- Buscar en móvil
- Carrito en móvil

---

## 📊 MATRIZ DE 22 CASOS DE PRUEBA

###  Búsqueda de Productos
**Casos:**
- TC-001: Buscar producto existente (ej: "zapatillas")
- TC-002: Buscar producto inexistente
- TC-003: Validar resultados mostrados

**Page Objects:** SearchPage, ResultsPage

---

### Navegación por Categorías
**Casos:**
- TC-004: Expandir categoría principal
- TC-005: Acceder a subcategoría
- TC-006: Validar productos de categoría

**Page Objects:** MenuPage, CategoryPage

---

###  Filtros por Precio
**Casos:**
- TC-007: Filtrar precio de menor a mayor
- TC-008: Filtrar por rango específico (ej: $500-$2000)
- TC-009: Validar que solo mostrar en rango

**Page Objects:** FilterPage, ResultsPage

---

###  Filtros por Marca
**Casos:**
- TC-010: Seleccionar 1 marca
- TC-011: Seleccionar múltiples marcas
- TC-012: Deseleccionar marca

**Page Objects:** FilterPage, ResultsPage

---

###  Filtros por Talla/Medida
**Casos:**
- TC-013: Filtrar por talla (XS, S, M, L, XL)
- TC-014: Filtrar por color
- TC-015: Combinar filtros talla + color

**Page Objects:** FilterPage, ResultsPage

---

### Ordenamiento de Resultados
**Casos:**
- TC-016: Ordenar por relevancia
- TC-017: Ordenar por precio (menor a mayor)
- TC-018: Ordenar por precio (mayor a menor)
- TC-019: Ordenar por más nuevo

**Page Objects:** ResultsPage

---

### Detalle de Producto - Básico
**Casos:**
- TC-020: Abrir detalle de producto
- TC-021: Validar nombre, precio, descripción
- TC-022: Ver galería de imágenes

**Page Objects:** ProductDetailPage

---

### Detalle de Producto - Stock y Disponibilidad
**Casos:**
- TC-023: Validar stock disponible
- TC-024: Ver tiendas cercanas con stock
- TC-025: Validar SKU y código de producto

**Page Objects:** ProductDetailPage, StockPage

---

### Detalle de Producto - Reviews
**Casos:**
- TC-026: Ver reseñas de producto
- TC-027: Filtrar por calificación (estrellas)
- TC-028: Ver fotos en reviews

**Page Objects:** ProductDetailPage, ReviewsPage

---

###  Agregar al Carrito - Un Producto
**Casos:**
- TC-029: Agregar 1 producto al carrito
- TC-030: Validar cantidad en badge
- TC-031: Ver confirmación de agregado

**Page Objects:** ProductDetailPage, CartPage

---

### Agregar al Carrito - Múltiples Productos
**Casos:**
- TC-032: Agregar 3+ productos diferentes
- TC-033: Validar cantidad total en carrito
- TC-034: Ver subtotal actualizado

**Page Objects:** ProductDetailPage, CartPage

---

###  Agregar a Wishlist
**Casos:**
- TC-035: Agregar producto a wishlist
- TC-036: Ver wishlist actualizada
- TC-037: Remover de wishlist

**Page Objects:** ProductDetailPage, WishlistPage

---

### Comparar Productos
**Casos:**
- TC-038: Agregar producto a comparación
- TC-039: Agregar segundo producto
- TC-040: Ver tabla de comparación

**Page Objects:** ProductDetailPage, ComparePage

---

###  Carrito - Cantidad y Cambios
**Casos:**
- TC-041: Aumentar cantidad en carrito
- TC-042: Disminuir cantidad
- TC-043: Remover producto del carrito

**Page Objects:** CartPage

---

###  Carrito - Totales y Impuestos
**Casos:**
- TC-044: Validar subtotal correcto
- TC-045: Validar cálculo de impuestos
- TC-046: Validar total final

**Page Objects:** CartPage

---

###  Código Promocional
**Casos:**
- TC-047: Aplicar código promocional válido
- TC-048: Validar descuento aplicado
- TC-049: Remover código promocional

**Page Objects:** CartPage, CheckoutPage

---

###  Checkout - Datos Personales
**Casos:**
- TC-050: Llenar formulario (nombre, email, teléfono)
- TC-051: Validar email válido
- TC-052: Validar teléfono válido

**Page Objects:** CheckoutPage

---

###  Checkout - Dirección de Envío
**Casos:**
- TC-053: Seleccionar dirección guardada
- TC-054: Agregar dirección nueva
- TC-055: Validar campos de dirección

**Page Objects:** CheckoutPage, AddressPage

---

###  Checkout - Método de Envío
**Casos:**
- TC-056: Ver opciones de envío disponibles
- TC-057: Seleccionar envío estándar
- TC-058: Seleccionar envío express

**Page Objects:** ShippingPage

---

### Checkout - Método de Pago
**Casos:**
- TC-059: Seleccionar pago con tarjeta
- TC-060: Validar campos de tarjeta
- TC-061: Ver resumen antes de pagar

**Page Objects:** PaymentPage

---

### Flujo Completo E2E (Búsqueda → Compra)
**Casos:**
- TC-062: Buscar producto
- TC-063: Agregar a carrito
- TC-064: Checkout completo hasta confirmación

**Page Objects:** Todas

---

### Login y Cuenta de Usuario
**Casos:**
- TC-065: Registrar cuenta nueva
- TC-066: Login con cuenta existente
- TC-067: Ver perfil y direcciones guardadas

**Page Objects:** LoginPage, RegisterPage, ProfilePage

---

## 📁 ESTRUCTURA DEL REPO

```
RepoSemillerosCodeceptjs/
├── features/
│
├── pages/
│
├── step_definitions/
│
├── utils/
│   ├── playwrightVideoAllure_helper.js
│
└── codecept.conf.js
```

---

## FLUJO


## CRITERIOS DE EVALUACIÓN

- ✅ Código limpio (sin hardcodes)
- ✅ Page Objects reutilizables
- ✅ Features con Gherkin claro
- ✅ Mínimo 3 escenarios por becario
- ✅ Allure Report con videos, trazas, screenshots
- ✅ Commits descriptivos
- ✅ PR con descripción y pruebas
- ✅ Sin duplicación de código


##  ENTREGA

- **Rama personal** en GitHub
- **Pull Request** con descripción
- **Allure Report** adjunto
- **5 minutos** presentando en vivo

