@liverpool_victor
Feature: Automatización de tienda Liverpool (Flujos Core)
  Como usuario de Liverpool
  Deseo poder buscar productos y gestionar mi bolsa
  Para realizar compras en la plataforma

  Background: 
    Given Victor ingresa al portal principal de Liverpool

  @TC_LIV_001 @humo
  Scenario: Validar que el motor de búsqueda devuelva resultados correctamente
    When busca el artículo "Mancuernas" en la barra superior
    Then el sistema despliega una lista de opciones para "Mancuernas"

  @TC_LIV_002 @regresion
  Scenario: Consultar el detalle de un artículo específico
    When busca el artículo "Audífonos inalámbricos" en la barra superior
    And ingresa al detalle del primer resultado
    Then la página muestra el título y precio del artículo

  @TC_LIV_003 @critico
  Scenario: Añadir un artículo válido a la bolsa de compras
    When busca el artículo "Lentes de sol" en la barra superior
    And ingresa al detalle del primer resultado
    And hace clic en el botón para agregar a mi bolsa
    Then el contador de la bolsa refleja el nuevo artículo

  @TC_LIV_004 @humo
  Scenario: Validar el comportamiento del buscador ante un artículo inexistente
    When busca el artículo "asdfghjkl987" en la barra superior
    Then el sistema no devuelve ningún producto en la cuadrícula

  @TC_LIV_005 @regresion
  Scenario: Acceder a la sección de la bolsa de compras
    When hace clic en el icono superior de la bolsa de compras
    Then el sistema redirige a la pantalla del carrito