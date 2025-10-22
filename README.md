Nombre: Casos de prueba Telcel - Daniela Salgado

1.-El workflow se activa cuando ocurre alguno de estos eventos:
-Se hace push a la rama Daniela Salgado
-Se crea un Pull Request hacia la rama Daniela Salgado

2.-Configura el permiso para publicar en GitHub Pages

3.-Se configura el entorno de la siguiente manera:
-Sistema operativo: 'ubuntu-latest', crea una maquina virtual con el sistema operativo Ubuntu en su ultima versión
-Versión de Node.js: 20.18.0
-Navegador: instala con Playwright el navegador Chromium

4.-STEPS
-Clona el respositorio
-Configura Node.js con la versión especificada
-Instala las librerias necesarias con: 'npm install'
-Instala el navegador 'Chromium' con: 'npx playwright install chromium'
-Ejecuta los tests definidos en archivos .feature usando CodeceptJS con: 'npx codeceptjs run --features'.

-Genera el reporte visual Allure desde los resultados de prueba con: 'npx allure generate output/allure-results --clean -o allure-report || echo "No Allure results found"'.

-Guarda logs, capturas de pantalla y reporte Allure generados.
-Publica los resultados del reporte Allure en GitHub Pages

¿QUÉ APRENDÍ?
Al trabajar en este proyecto, aprendí a configurar el entorno de mis pruebas usando un pipeline, lo que me permitió automatizar su ejecución a través de GitHub Actions. Gracias a esto, pude ver cómo las pruebas se ejecutaban solas cada vez que había cambios en el código, sin tener que correrlas manualmente.
Además, entendí que este tipo de prácticas son muy similares a las que se utilizan en entornos de trabajo reales, donde la automatización, la organización y la trazabilidad son clave para mantener proyectos eficientes y colaborativos


