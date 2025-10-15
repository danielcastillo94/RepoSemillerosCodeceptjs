


//Scenario: Buscar un tutorial después de iniciar sesión
//Given que el usuario ya ha iniciado sesión en YouTube
//When escribe "Playwright tutorial" en la barra de búsqueda
//And da clic en el botón de buscar
//Then debe ver resultados relacionados con "Playwright"
const {USER_EMAIL, USER_PASSWORD} = require ("./credenciales.js");

Feature('YouTube search');
//Scenario: Login en YouTube
Scenario('Login en YouTube', async ({ I }) => {
  I.amOnPage('https://github.com');
//When hace clic en el botón "Iniciar sesión"
I.click('a[href="/login"]');
//And escribe su correo electrónico en el campo de email
//And hace clic en "Siguiente"
I.fillField('[name="login"]', USER_EMAIL);
//And escribe su contraseña en el campo de password
//And hace clic en "Siguiente"
I.fillField('[name="password"]', USER_PASSWORD);
//Then debe ver que aparece su avatar de usuario en la esquina superior derecha
I.click('//input[@type="submit"]');

// mi cuenta tiene la autenticacion con codigo y no puedo seguir :()
});
