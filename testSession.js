const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext({
        storageState: './storageState.json'
    });

    const page = await context.newPage();

    // Cookies ANTES de entrar a Liverpool
    const cookiesBefore = await context.cookies();

    console.log('Cookies antes de navegar:', cookiesBefore.length);

    console.log('Cargando Liverpool...');

    await page.goto('https://www.liverpool.com.mx/tienda/home');

    await page.waitForTimeout(5000);

    // Cookies DESPUÉS
    const cookiesAfter = await context.cookies();

    console.log('Cookies después de navegar:', cookiesAfter.length);

    const nombresImportantes = [
        'SessionId',
        'auth0',
        'auth0_compat',
        'lastLogin'
    ];

    for (const nombre of nombresImportantes) {

        const before = cookiesBefore.find(c => c.name === nombre);
        const after = cookiesAfter.find(c => c.name === nombre);

        console.log(`\nCookie: ${nombre}`);

        console.log(
            'Antes:',
            before ? 'EXISTE' : 'NO EXISTE'
        );

        console.log(
            'Después:',
            after ? 'EXISTE' : 'NO EXISTE'
        );

        if (before && after) {
            console.log(
                '¿Cambió?:',
                before.value !== after.value
            );
        }
    }

    console.log('\nURL:', page.url());
    console.log('Título:', await page.title());

    const usuario = page.locator(
        '//span[contains(text(),"Leonel Perez")] | //span[contains(text(),"Hola,")]'
    );

    console.log(
        '¿Usuario visible?:',
        await usuario.isVisible().catch(() => false)
    );

    await page.waitForTimeout(10000);

    await browser.close();

})();