@JesusCDetalleProducto
Feature: Detalle productos
  Background: Regresando al caso inicial
        Given El usuario se encuentra en la página principal de Liverpool
        
 
 @TC-020
 Scenario: Abrir detalle de producto
     Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
     When El usuario selecciona el primer producto HOLLISTER
     Then El usuario debe visualizar el producto 
 @TC-021
 Scenario: Validar nombre, precio y descripción del producto
     Given El Usurario se encuentra en la página de Subcategorias de playeras de mujer
     When  El usuario selecciona el primer producto HOLLISTER
     Then El usuario debe visualizar el nombre del producto, precio y descripcion del producto

 @TC-022
Scenario: Ver galería de imágenes del producto
    Given El usuario se encuentra en la página de la playera hollister tipo polo
    When El usuario selecciona la primera imagen 
    Then El usuario debe visualizar la galería de imágenes del producto