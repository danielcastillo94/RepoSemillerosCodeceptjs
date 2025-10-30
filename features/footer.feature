@TC0010 @Xochitl
Feature: Validar footer de Telcel

Scenario: Verificar el pie de página y sus enlaces de redes sociales 
    Given el usuario está dentro de la página principal
    When se desplaza al final del sitio
    Then los enlaces de redes sociales son visibles y apuntan a la URL correcta
    And los accesos rápidos son visibles y apuntan a la URL correcta