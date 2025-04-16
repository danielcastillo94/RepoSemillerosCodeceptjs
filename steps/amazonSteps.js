const { I } = inject();

// ESCENARIO 1: Login
// Given('estoy en la página de inicio de Amazon', () => {
//   I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
//   I.waitForElement('#nav-link-accountList', 10);
// });

// When('doy clic en el botón de iniciar sesión', () => {
//   I.click('#nav-link-accountList');
// });

// When('ingreso mi usuario y contraseña de Amazon', () => {
//   I.waitForElement('input[name="email"]', 5);
//   I.fillField('input[name="email"]', 'jose_macias12@outlook.com');
//   I.click('Continuar');

//   I.waitForElement('//input[@type="password" and not(contains(@class, "hide"))]', 10);
//   I.fillField('//input[@type="password" and not(contains(@class, "hide"))]', 'abcdsad12131!');
//   I.click('Iniciar sesión');

//   I.waitForElement('a[href="/ref=ap_frn_logo"]', 10);
//   I.click('a[href="/ref=ap_frn_logo"]');
// });



// // ESCENARIO 2: Buscar y ordenar producto de mayor a menor
// Given('estoy en la página principal de Amazon', () => {
//   I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
//   I.waitForElement('#twotabsearchtextbox', 10);
// });

// When('busco el producto {string}', (producto) => {
//   I.fillField('#twotabsearchtextbox', producto);
//   I.click('#nav-search-submit-button');
// });

// When('aplico el filtro de precio de mayor a menor', () => {
//   I.waitForElement('#s-result-sort-select', 10);
//   I.selectOption('#s-result-sort-select', 'price-desc-rank');
//   I.wait(3);
// });

// When('selecciono el primer producto de la lista', () => {
//   I.waitForElement('(//div[@data-component-type="s-search-result"]//a)[1]', 10);
//   I.click('(//div[@data-component-type="s-search-result"]//a)[1]');
// });

// Then('debería ver el nombre y el precio del producto', () => {
//   I.waitForElement('#productTitle', 10);
//   I.seeElement('#productTitle');
//   I.seeElement('span.a-price .a-offscreen');
// });


// // ESCENARIO 3: Agregar producto al carrito
// Given('estoy en la página de resultados de búsqueda de {string}', (producto) => {
//   I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
//   I.waitForElement('#twotabsearchtextbox', 10);
//   I.fillField('#twotabsearchtextbox', producto);
//   I.click('#nav-search-submit-button');
// });

// When('selecciono el primer producto disponible', () => {
//   I.waitForElement('(//div[@data-component-type="s-search-result"]//a)[1]', 10);
//   I.click('(//div[@data-component-type="s-search-result"]//a)[1]');
// });

// When('doy clic en "Agregar al carrito"', () => {
//   I.waitForElement('#add-to-cart-button', 10);
//   I.click('#add-to-cart-button');
// });

// Then('debería ver el mensaje "Se agregó al carrito"', () => {
//   I.waitForElement('#nav-cart', 10);
//   I.click('#nav-cart');
//   I.waitForElement('span.sc-price', 10);
//   I.seeElement('span.sc-price');
// });


// ESCENARIO 4: Acceder al carrito de compras
When('doy clic en el ícono del carrito', () => {
  I.waitForElement('#nav-cart', 10);
  I.click('#nav-cart');
});

Then('debería ver el título del carrito de compras', () => {
  I.waitForElement('#sc-active-cart', 10);
  I.seeElement('#sc-active-cart');
});

// ESCENARIO 5: Aplicar filtro de precio más bajo
When('selecciono el filtro de ordenamiento por precio más bajo', () => {
  I.waitForElement('#s-result-sort-select', 10);
  I.selectOption('#s-result-sort-select', 'price-asc-rank');
  I.wait(3);
});

Then('debería ver productos ordenados por precio', () => {
  I.waitForElement('(//div[@data-component-type="s-search-result"])[1]', 10);
  I.seeElement('(//div[@data-component-type="s-search-result"])[1]');
});
