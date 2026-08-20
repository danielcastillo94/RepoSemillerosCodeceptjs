const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Ve a la página e inicia sesión manualmente o con credenciales
    await page.goto('https://www.liverpool.com.mx/tienda/home');
    console.log('Por favor inicia sesión manualmente en la ventana del navegador...');

    // 2. Espera a que el saludo de usuario esté presente
    await page.waitForSelector('//span[contains(text(),"Hola,")]', { timeout: 60000 });

    // 3. Guarda el estado actualizado
    await context.storageState({ path: './storageState.json' });
    console.log('¡storageState.json guardado con éxito!');

    await browser.close();
})();
