@busqueda
Feature: Búsqueda de productos en Liverpool
  Como usuario de Liverpool.com.mx
  Quiero buscar productos por palabra clave
  Para encontrar rápidamente lo que necesito comprar

  Background:
    Given que el usuario se encuentra en la página principal de Liverpool

  @TC-001
  Scenario Outline: Buscar un producto existente muestra resultados
    When busca el producto "<producto>"
    Then se muestran resultados relacionados con la búsqueda

    Examples:
      | producto   |
      | zapatillas |
      | mochila    |

  @TC-002
  Scenario Outline: Buscar un producto inexistente no muestra productos relacionados
    When busca el producto "<producto>"
    Then no se muestran productos relacionados con "<producto>"

    Examples:
      | producto                   |
      | qwertzxcvasdf123           |
      | productoquenoexistexyz0000 |

  @TC-003
  Scenario Outline: Los resultados corresponden a la búsqueda realizada
    When busca el producto "<producto>"
    Then los resultados muestran productos relacionados con "<producto>"

    Examples:
      | producto   |
      | zapatillas |