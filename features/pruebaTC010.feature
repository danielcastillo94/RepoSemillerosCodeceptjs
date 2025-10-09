# EJERCICIO 4 - ANA PAOLA REBOLLOSO SAUCEDO

Feature: Validar footer de Telcel

Scenario: Verificar enlaces de redes sociales y accesos rápidos en el pie de página

Given el usuario está en la página principal
When se desplaza al final del sitio
Then los enlaces de redes sociales son visibles y apuntan a la URL correcta
And los accesos rápidos son visibles y apuntan a la URL correcta
