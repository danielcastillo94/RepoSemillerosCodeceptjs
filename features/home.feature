@TC001 @home_page @Xochitl 

Feature: Validar la carga del portal y sus elementos principales del Home

Scenario: Validar el Logotipo , menú principal y el banner inicial se carguen correctamente
Given el usuario accede a la página principa de Telcel
When el home termina de cargar 
Then el logotipo de Telcel es visible
And el menú principal es visible y se puede navegar
And el banner es visible y funcional


  
