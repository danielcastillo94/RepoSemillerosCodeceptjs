Feature: carro de compra

Scenario: el usuario agrega productos al carro

Given el usuario se encuentra en la pagina de detalles de un productos

When el usuario da click en el boton agregar al carro

And se agrega el <producto> al carro

And se incrementa <cantidad> en el carro

Then Se refleja <cantidad> del <producto> en el carro

Examples:
    | producto            | cantidad |
    | Salsa               | 2        |
    | Galletas saladas    | 5        |

