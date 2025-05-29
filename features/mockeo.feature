Feature: Mockeo youtube

@mock
  Scenario: Mockeo resultados youtube
    Given Estoy en youtube
    When Hago una busqueda con mockeo
    Then visualizo videos de codeceptjs