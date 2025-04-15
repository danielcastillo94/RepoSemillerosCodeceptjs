Feature: Búsqueda en Mercado Libre

  Scenario: Buscar un producto
    Given Estoy en la página de Mercado Libre
    When Busco "laptop"
    Then Veo resultados relacionados con "laptop"
