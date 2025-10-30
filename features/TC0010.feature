@TC0010
Feature: Validar enlaces del footer
  Como usuario del portal Telcel
  Quiero desplazarme al pie de página
  Para validar que los enlaces de redes sociales y accesos estén visibles y funcionen correctamente

  Validar enlaces de redes sociales en el footer
  Verificar visibilidad de los enlaces del footer
  Scenario: Verificar visibilidad de los iconos de redes sociales en el footer
    Given que abro la pagina principal de Telcel
    When me desplazo al footer del sitio
    Then deberia ver el enlace de Twitter visible
    And deberia ver el enlace de Facebook visible
    And deberia ver el enlace de YouTube visible
    And deberia ver el enlace de Hola Telcel visible
