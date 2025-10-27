Feature: Validar enlaces de redes sociales y accesos en el pie de página
    @Prueba10
    Scenario: Desplazarse al final del sitio y comprobar que los enlaces de redes sociales se dirigen correctamente
        Given el usuario accede al portal principal de Telcel
        When el usuario navega hacia "footer"
        Then  el usuario da click en los íconos de redes sociales para validar