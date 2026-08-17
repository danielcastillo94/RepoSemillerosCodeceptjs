@order
Feature: Ordenamiento de Resultados
Background: inicio de orden
    Given El usuario inicio sesion
    When El usuario se encuenta buscando un producto
@TC016
Scenario: Ordenar por relevancia
    When El usuario ordena los producto por relevancia
@TC017
Scenario: Ordenar por precio (menor a mayor)
    When El usuario ordena los producto de menor a mayor precio
@TC018
Scenario: Ordenar por precio (mayor a menor)
    When El usuario ordena los producto de mayor a menor precio
@TC019
Scenario: Ordenar por más nuevo
    When El usuario ordena los producto de acuerdo a la novedad