const { chromium } = require('playwright');

(async () => {

    console.log('Abriendo perfil...');

    const context = await chromium.launchPersistentContext(
        './liverpool-profile',
        {
            headless: false,
            locale: 'es-MX'
        }
    );

    console.log('Perfil abierto.');

    const pages = context.pages();
    const page = pages[0] || await context.newPage();

    console.log('Navegando a Liverpool...');

    await page.goto('https://www.liverpool.com.mx/tienda/home', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    console.log('Liverpool cargó.');

    await page.waitForTimeout(5000);

    console.log('URL:', page.url());
    console.log('Título:', await page.title());

    const usuario = page.locator(
        '//span[contains(text(),"Leonel Perez")] | //span[contains(text(),"Hola,")]'
    );

    console.log(
        '¿Usuario visible?:',
        await usuario.isVisible().catch(() => false)
    );

    console.log('Prueba terminada.');

    await context.close();

    console.log('Navegador cerrado.');

})();