@JesusCFiltrarTalla
Feature: Filtros por por Talla/Medida
  Background: Regresando al caso inicial
        Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
        
@TC-013
Scenario: Filtrar por talla
    When El usuario aplica el filtro de talla Mediana   
    Then El usuario puede ver que que se aplico correctamente el filtro

@TC-014
Scenario: Filtrar por Color
    When El usuario aplica el filtro de Color Rosa
    Then Se muestran los productos que son de color rosa

@TC-015
Scenario: Combinar filtros talla + color
    When El usuario aplica la combinación de filtros de talla M y color Azul
    Then Se ve el filtrado seleccionado correctamente