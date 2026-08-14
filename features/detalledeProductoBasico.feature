@JesusCDetalleProducto
Feature: Detalle productos
  Background: Regresando al caso inicial
        Given El usuario se encuentra en la página principal de Liverpool
        
 
 @TC-020
 Scenario: Abrir detalle de producto
     Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
     When El usuario selecciona el primer producto HOLLISTER
     Then El usuario debe visualizar el producto 
