@JesusCFiltrarTalla
Feature: Filtros por por Talla/Medida
  Background: Regresando al caso inicial
        Given El usuario se encuentra en la página principal de Liverpool
        
@TC-013
Scenario: Filtrar por talla
    Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
    When El usuario aplica el filtro de talla Mediana   
    Then El usuario puede ver que que se aplico correctamente el filtro

@TC-014
Scenario: Filtrar por Color
    Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
    When El usuario aplica el filtro de Color Rosa
    Then Se muestran los productos que son de color rosa

@TC-015
Scenario: Combinar filtros talla + color
    Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
    When El usuario aplica la combinación de filtros de talla M y color Rosa
    Then Se ve el filtrado seleccionado correctamente