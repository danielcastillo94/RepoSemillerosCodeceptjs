// steps/homeSteps.js
import homePage from '../pages/homePage';

Given('que ingreso a la página de inicio', () => {
    homePage.visitHomePage();
});

Then('el logotipo debe ser visible', () => {
    homePage.validateLogoVisible();
});

Then('el menú principal debe ser visible', () => {
    homePage.validateMenuVisible();
});

Then('el banner inicial debe ser visible', () => {
    homePage.validateBannerVisible();
});