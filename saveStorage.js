// saveStorage.js
const { chromium } = require('playwright');

(async () => {
    // Abre el navegador Chromium para hacer el login
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navegando a Liverpool... Inicia sesión y valida el código 2FA de tu celular.');
    await page.goto('https://www.liverpool.com.mx/tienda/home');

    // Pausa el navegador para que hagas el Login y metas el código 2FA manualmente
    await page.pause();

    // Una vez iniciada la sesión, guarda las cookies en la carpeta output
    await context.storageState({ path: './output/storageState.json' });
    console.log('¡Sesión guardada en ./output/storageState.json!');

    await browser.close();
})();