const { Builder } = require('selenium-webdriver');
const HomePage = require('../pages/homePage');

(async function validateHomeModule() {
    const driver = await new Builder().forBrowser('chrome').build();
    const homePage = new HomePage(driver);

    try {
        // Acceder al portal Telcel
        await driver.get('https://www.telcel.com'); // Cambia a la URL real

        // Validar el logotipo
        const isLogoVisible = await homePage.isLogoVisible();
        console.assert(isLogoVisible, 'El logotipo no es visible.');

        // Validar el menú principal
        const isMenuVisible = await homePage.isMenuVisible();
        console.assert(isMenuVisible, 'El menú no es visible.');

        // Validar el banner inicial
        const isBannerVisible = await homePage.isBannerVisible();
        console.assert(isBannerVisible, 'El banner no está presente.');

        console.log('Todas las validaciones del módulo de inicio se completaron con éxito.');
    } catch (error) {
        console.error('Se produjo un error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
})();