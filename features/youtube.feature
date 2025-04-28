
Feature: Validación del botón "Explorar" y navegación en YouTube

Scenario: Validar atributos data-title en íconos de la sección Explorar
  Given estoy en la página principal de YouTube
  When hago clic en el botón "Explorar" en la barra de navegación
  Then algunos íconos en la sección Explorar deben tener atributos data-title