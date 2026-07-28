Feature: Localización de artículos por medio de la barra de búsqueda en el aplicativo de PlayStation

    Scenario: Búsqueda exitosa que retorne resultados
        Given El usuario abre el aplicativo de 'https://www.playstation.com/es-mx/'
        And Observa la barra de búsqueda en la parte superior derecha de la página
        When El usuario hace clic en la barra de búsqueda y escribe algún videojuego en el campo de búsqueda
        And El usuario presiona la tecla 'Enter' o hace clic en el botón de búsqueda
        Then El aplicativo debe mostrar los resultados de búsqueda relacionados con el videojuego ingresado
        And El usuario debe visualizar una lista de resultados que contenga información relevante sobre los videojuegos encontrados, 
        incluyendo títulos, descripciones y enlaces a las páginas de los productos

    Scenario: Búsqueda sin resultados
        Given El usuario abre el aplicativo de 'https://www.playstation.com/es-mx/'
        And Observa la barra de búsqueda en la parte superior derecha de la página
        When El usuario hace clic en la barra de búsqueda sin escribir ningún videojuego en el campo de búsqueda
        And El usuario presiona la tecla 'Enter' o hace clic en el botón de búsqueda
        Then El aplicativo no debe realizar ninguna acción o búsqueda