const { I } = inject();
// Paso 1: Abrir portal Telcel
Given('que el usuario abre el portal oficial de Telcel {string}', (url) => {
  I.amOnPage(url);
  I.waitForElement('#buscador-menu-input', 10);
});

// Paso 2: Buscar un término (por ejemplo, “iphone”)
When('ingresa un término de búsqueda {string}', (term) => {
  I.click('#buscador-menu-input');
  I.fillField('#buscador-menu-input', term);
  I.pressKey('Enter');
  I.waitForElement('section#equipos_section', 10);
});

// Paso 3: Validar que se muestran resultados relacionados
Then('debe ver resultados relacionados con {string}', (term) => {
  // Espera que aparezcan las cards de productos
  I.waitForElement('p.card-products--data_name', 10);
  // Verifica que al menos uno de los productos contenga la palabra buscada
  I.see(term, 'p.card-products--data_name');
  // Validar que la página del producto se cargó correctamente
  I.see(term);
  I.wait(2);
});