#Se encapsularon los metodos dentro del archivo Lvht_Mobil_page.js
Feature: Comprobar los elementos en vista movil

Given El usuario se encuentra en la pagina principal de Telcel en modo vista movil
@regression @vista-movil
Scenario: Verificar comportamiento del menu en vista movil

    When El usuario hace click en "Menu"
    #And El usuario hace click en  "Movil"
    #Then El usuario deberia ver los textos "Entretenimiento" y "Ayuda"
