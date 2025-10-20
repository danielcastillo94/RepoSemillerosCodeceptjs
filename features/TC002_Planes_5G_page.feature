Feature: Validar el mapa interactivo

@mapa-interactivo
Scenario: Navegacion hasta el mapa interactivo

Given El usuario se encuentra en la seccion "Conoce el mundo 5G"
    When El usuario se desplaza hasta el banner de cobertura 5g
    #And El usuario hace click en el boton "ver cobertura"
    #Then El usuario deberia ver el mapa interactivo