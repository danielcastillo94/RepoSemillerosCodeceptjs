@JesusCFiltrarMarca
Feature: Filtros por Marca
  Background: Regresando al caso inicial
        Given El usuario se encuentra en la página principal de Liverpool
        And El usuario se encuentra en la página de Subcategorias de Tenis Casuales 
    
 @TC-010
 Scenario: Seleccionar una marca
    When El usuario selecciona una marca   
    Then Los productos mostrados deben pertenecer a la marca seleccionada
     
@TC-011
 Scenario: Seleccionar dos  marcas
    When El usuario selecciona dos marcas en el filtro de marca
    Then Los productos mostrados deben pertenecer a alguna de las marcas seleccionadas
    
@TC-012
Scenario: Deseleccionar una marca
  When El usuario selecciona la marca ADIDAS
  Then El usuario le aparecen productos de Tenis ADIDAS
  When El usuario vuelve a dar Click en la Marca ADIDAS
  Then La marca ADIDAS no debe de estar seleccionada 