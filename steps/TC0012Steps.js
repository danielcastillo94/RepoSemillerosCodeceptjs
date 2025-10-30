const { I } = inject();

Given('que abro la pagina principal de Telcel', async () => {
  await I.amOnPage('https://www.telcel.com/', { waitUntil: 'domcontentloaded', timeout: 120000 });
});

When('navego al enlace de Términos y condiciones desde el footer', async () => {
  // Scroll hasta el footer
  await I.scrollTo('#telcel-footer-copyright');

  // Espera a que el enlace sea visible
  await I.waitForVisible('a[data-nombreboton="Términos y condiciones"]', 30);

  // Click en el enlace usando script (evita problemas de Playwright)
  await I.executeScript(() => {
    document.querySelector('a[data-nombreboton="Términos y condiciones"]').click();
  });

  // Espera a que cargue el título de la página
  await I.waitForVisible('h1', 60);
});

Then('deberia ver el titulo de la pagina {string} visible', async (titulo) => {
  await I.see(titulo, 'h1');
});

Then('deberia ver el texto principal de los terminos cargado', async () => {
  // Selector correcto para el texto principal de los términos
  await I.seeElement('.text-black');
});
