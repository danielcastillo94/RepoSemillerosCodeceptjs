@carrito
Feature: Funcionalidades del carrito de compras en Liverpool

  Background:
    Given El usuario se encuentra en la página principal de Liverpool
    And el usuario busca el producto "tenis"
    And se muestran resultados relacionados con la búsqueda "tenis"
    And el usuario hace clic en un producto para ver su detalle

  @TC-029
  Scenario: Agregar 1 producto al carrito
    When el usuario agrega el producto al carrito
    Then se valida que el producto se ha agregado correctamente al carrito

  @TC-030
  Scenario: Validar cantidad en badge
    When el usuario agrega un producto al carrito
    Then se valida que la cantidad en el badge del carrito se actualiza correctamente

  @TC-031
  Scenario: Ver confirmación de agregado
    When el usuario agrega un producto al carrito
    Then se valida que se muestra una confirmación de que el producto ha sido agregado

  @TC-032
  Scenario: Agregar 3 productos diferentes al carrito
    When el usuario agrega 3 productos diferentes al carrito
    Then se valida que los 3 productos se han agregado correctamente al carrito

  @TC-033
  Scenario: Validar cantidad total en carrito
    When el usuario agrega 3 productos diferentes al carrito
    Then se valida que la cantidad total en el carrito es correcta

  @TC-034
  Scenario: Ver subtotal actualizado
    When el usuario agrega 3 productos diferentes al carrito
    Then se valida que el subtotal en el carrito se actualiza correctamente

  @TC-035
  Scenario: Agregar producto a wishlist
    When el usuario agrega un producto a la wishlist
    Then se valida que el producto se ha agregado correctamente a la wishlist

  @TC-036
  Scenario: Ver wishlist actualizada
    When el usuario agrega un producto a la wishlist
    Then se valida que la wishlist se ha actualizado correctamente

  @TC-037
  Scenario: Remover de wishlist
    When el usuario remueve un producto de la wishlist
    Then se valida que el producto se ha removido correctamente de la wishlist

  @TC-038
  Scenario: Agregar producto a comparación
    When el usuario agrega un producto a la comparación
    Then se valida que el producto se ha agregado correctamente a la comparación

  @TC-039
  Scenario: Agregar segundo producto a comparación
    When el usuario agrega un segundo producto a la comparación
    Then se valida que ambos productos se han agregado correctamente a la comparación

  @TC-040
  Scenario: Ver tabla de comparación
    When el usuario accede a la tabla de comparación
    Then se valida que la tabla de comparación muestra correctamente los productos agregados

  @TC-041
  Scenario: Aumentar cantidad en carrito
    When el usuario aumenta la cantidad de un producto en el carrito
    Then se valida que la cantidad se ha actualizado correctamente

  @TC-042
  Scenario: Disminuir cantidad en carrito
    When el usuario disminuye la cantidad de un producto en el carrito
    Then se valida que la cantidad se ha actualizado correctamente

  @TC-043
  Scenario: Remover producto del carrito
    When el usuario remueve un producto del carrito
    Then se valida que el producto se ha removido correctamente del carrito

  @TC-044
  Scenario: Validar subtotal correcto
    When el usuario agrega productos al carrito
    Then se valida que el subtotal en el carrito es correcto

  @TC-045
  Scenario: Validar el cálculo de impuestos
    When el usuario agrega productos al carrito
    Then se valida que el cálculo de impuestos es correcto

  @TC-046
  Scenario: Aplicación de código promocional válido
    When el usuario aplica un código promocional válido
    Then se valida que el descuento se ha aplicado correctamente

  @TC-047
  Scenario: Validación de descuento
    When el usuario aplica un código promocional válido
    Then se valida que el descuento aplicado es correcto

  @TC-048
  Scenario: Remover código promocional
    When el usuario remueve un código promocional aplicado
    Then se valida que el descuento ha sido removido correctamente

  @TC-049
  Scenario: Llenar formulario de datos personales
    When el usuario llena el formulario con nombre, email y teléfono
    Then se valida que los datos personales se han llenado correctamente

  @TC-050
  Scenario: Validar un email válido
    When el usuario ingresa un email válido en el formulario
    Then se valida que el email ingresado es correcto

  @TC-051
  Scenario: Validar un teléfono válido
    When el usuario ingresa un teléfono válido en el formulario
    Then se valida que el teléfono ingresado es correcto

  @TC-052
  Scenario: Seleccionar dirección guardada
    When el usuario selecciona una dirección guardada
    Then se valida que la dirección seleccionada es correcta

  @TC-053
  Scenario: Agregar dirección nueva
    When el usuario agrega una dirección nueva
    Then se valida que la dirección nueva se ha agregado correctamente

  @TC-054
  Scenario: Validar campos de dirección
    When el usuario llena los campos de dirección
    Then se valida que los campos de dirección son correctos

  @TC-055
  Scenario: Ver opciones de envío disponibles
    When el usuario accede a las opciones de envío
    Then se valida que se muestran todas las opciones de envío disponibles

  @TC-056
  Scenario: Seleccionar envío estándar
    When el usuario selecciona la opción de envío estándar
    Then se valida que la opción de envío estándar ha sido seleccionada correctamente

  @TC-057
  Scenario: Seleccionar envío express
    When el usuario selecciona la opción de envío express
    Then se valida que la opción de envío express ha sido seleccionada correctamente

  @TC-058
  Scenario: Seleccionar pago con tarjeta
    When el usuario selecciona la opción de pago con tarjeta
    Then se valida que la opción de pago con tarjeta ha sido seleccionada correctamente

  @TC-059
  Scenario: Validar los campos de tarjeta
    When el usuario llena los campos de tarjeta con número, fecha y CVV
    Then se valida que los campos de tarjeta son correctos

  @TC-060
  Scenario: Ver resumen antes de pagar
    When el usuario accede al resumen de compra antes de pagar
    Then se valida que el resumen muestra correctamente los productos, cantidades, precios y total a pagar

  @TC-061
  Scenario: Evaluación de proceso de compra de principio a fin
    When el usuario agrega un producto al carrito
    And el usuario entra al carrito y valida el registro del producto
    And el usuario llena el formulario de datos personales
    And el usuario selecciona una dirección de envío
    And el usuario selecciona una opción de envío
    And el usuario selecciona una opción de pago
    And el usuario revisa el resumen de compra
    Then se valida que el proceso de compra se ha completado correctamente
