Feature:Validar visualización del detalle de un producto
@TC005 @regression
Scenario: Detalle del equipo
Given el usuario esta en la pagina de resultados de la busqueda
When el usuario selecciona algun equipo
Then el usuario puede ver la imagen, especificaciones y precio del equipo
