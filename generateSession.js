const { chromium } = require('playwright');

(async () => {
    // Abre el navegador visible (headless: false)
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navegando a Liverpool...');
    await page.goto('https://www.liverpool.com.mx/tienda/home');

    console.log('Por favor, inicia sesión e ingresa el código de verificación SMS manualmente en el navegador...');

    // Espera hasta 3 minutos a que el login y el SMS se completen y aparezca el saludo
    await page.waitForSelector('h2.text-heading-2xl', { timeout: 180000 });
    await page.waitForTimeout(5000);
    // Guarda las cookies y el localStorage actualizados
    await context.storageState({ path: './storageState.json' });
    console.log('¡Sesión guardada con éxito en storageState.json!');

    await browser.close();
})();