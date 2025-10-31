const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    // 1. Entra al sitio web
    await page.goto('https://www.mercadolibre.com');
    await page.screenshot({ path: 'screenshots/step1.png' });

    // 2. Selecciona México como país
    const countrySelector = await page.locator('//a[@class="ml-site-link" and @id="MX" and @href="https://www.mercadolibre.com.mx#from=homecom"]'); // Selector simplificado para seleccionar 'MX'
    await countrySelector.click();
    await page.screenshot({ path: 'screenshots/step2.png' });

    // 3. Busca el término “playstation 5”
    const searchInput = await page.locator('//input[@placeholder="Buscar productos, marcas y más…"]');
    await searchInput.fill('playstation 5');
    await searchInput.press('Enter');
    await page.waitForTimeout(2000); // Esperar a que se carguen los resultados
    await page.screenshot({ path: 'screenshots/step3.png' });

    // 4. Filtra por condición “Nuevos”
    const newConditionFilter = await page.locator('//span[@class="ui-search-filter-name" and text()="Nuevo"]');
    await newConditionFilter.click();
    await page.screenshot({ path: 'screenshots/step4.png' });

    // 5. Filtra por ubicación “CDMX”
    const locationFilter = await page.locator('//span[@class="ui-search-filter-name" and text()="Local"]').first(); // Localizando CDMX
    await locationFilter.click();
    await page.screenshot({ path: 'screenshots/step5.png' });

    // 6. Ordena por “mayor a menor precio”
    const sortDropdown = await page.locator('//span[@class="andes-dropdown__display-values" and text()="Más relevantes"]'); // Localiza el span del dropdown
    await sortDropdown.click(); // Abre el dropdown
    await page.screenshot({ path: 'screenshots/step6.png' });

    // Seleccionar la opción "Precio: mayor a menor"
    await page.locator('//span[@class="andes-list__item-primary" and text()="Mayor precio"]');
    await sortDropdown.click(); // Haz clic en la opción
    await page.screenshot({ path: 'screenshots/step6_2.png' }); // Captura después de seleccionar

    // 7. Obtén el nombre y precio de los primeros 5 productos
    const products = await page.locator('//ol[@class="ui-search-layout ui-search-layout--stack"]').evaluateAll((elements) => {
        return elements.slice(0, 5).map(el => {
            const name = el.querySelector('h3[class="poly-component__title-wrapper"]').innerText;
            const price = el.querySelector('div[class="poly-component__price"]').innerText;
            return { name, price };
        });
    });

    // 8. Imprime estos productos en la consola
    console.log(products);

    // 9. Genera un reporte de la ejecución, incluyendo imágenes de cada paso
    // (Las imágenes ya se guardan en la carpeta 'screenshots')

    await browser.close();
})();