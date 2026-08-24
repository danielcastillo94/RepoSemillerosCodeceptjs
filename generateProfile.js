const { chromium } = require('playwright');

(async () => {

    const context = await chromium.launchPersistentContext(
        './liverpool-profile',
        {
            headless: false,
            locale: 'es-MX'
        }
    );

    const pages = context.pages();
    const page = pages.length > 0
        ? pages[0]
        : await context.newPage();

    await page.goto('https://www.liverpool.com.mx/tienda/home');

    console.log('Inicia sesión y completa el SMS.');
    console.log('Cuando ya veas tu nombre, presiona ENTER.');

    await new Promise(resolve => {
        process.stdin.resume();

        process.stdin.once('data', () => {
            process.stdin.pause();
            resolve();
        });
    });

    console.log('Guardando perfil...');

    await context.close();

    console.log('Perfil guardado.');

    process.exit(0);

})();