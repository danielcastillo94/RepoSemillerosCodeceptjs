const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navegando a Liverpool...');

    await page.goto('https://www.liverpool.com.mx/tienda/home');

    console.log('Por favor inicia sesión manualmente en la ventana del navegador...');
    console.log('Tienes hasta 5 minutos para completar el login y el SMS.');

    await page.waitForSelector(
        '//span[contains(text(),"Leonel Perez")] | //span[contains(text(),"Hola,")]',
        {
            timeout: 300000
        }
    );

    console.log('¡Login detectado!');

    await page.waitForTimeout(5000);

    await context.storageState({
        path: './storageState.json',
        indexedDB: true
    });

    console.log('¡Sesión guardada con éxito en storageState.json!');

    await browser.close();

})();