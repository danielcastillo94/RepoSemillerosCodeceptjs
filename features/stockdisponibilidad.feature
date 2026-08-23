@JesusCStockDisponibilidad
Feature: Ordenamiento de Resultados 
    Background:
        # Given El usuario se encuentra en la página principal de Liverpool
        Given El Usurario se encuentra en la página de la Playera manga corta cuello redondo para mujer
    
   @TC-023
    Scenario:  Validar stock disponible
        # Given El Usurario se encuentra en la página de la Playera manga corta cuello redondo para mujer
        When El usario da click en un Tamaño en este caso XCH Y da click en Ver disponibilidad en tienda
        Then El usuario puede seleccionar Puebla y visualizar la disponibilidad 
        # When El usuario da Clic en Puebla 
        # Then Se muestran la disponibilidad