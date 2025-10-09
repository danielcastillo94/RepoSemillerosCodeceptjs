// steps/cobertura_steps.js
// Steps para el feature Cobertura usando Cucumber + Playwright

const { Given, When, Then, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const CoberturaPage = require('../pages/cobertura_page');

let coberturaPage;

// Step inicial: abrir el home de Telcel
Given(
  'abro la página principal de Telcel',
  { timeout: 60000 },
  async function () {
    // Abrir navegador y crear nueva página
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();

    // Inicializar Page Object para la sección Cobertura
    coberturaPage = new CoberturaPage(this.page);

    // Navegar al home oficial de Telcel
    await this.page.goto('https://www.telcel.com/');
  }
);

// Step: navegar a la sección Cobertura usando el buscador
When(
  'navego a la sección "Cobertura" usando el buscador',
  { timeout: 60000 },
  async function () {
    // Usar el método del Page Object para buscar Cobertura
    await coberturaPage.buscarCobertura();
  }
);

// Step: validar que el mapa interactivo sea visible
Then(
  'debería ver que el mapa interactivo está visible',
  { timeout: 60000 },
  async function () {
    const mapaVisible = await coberturaPage.verificarMapaVisible();
    expect(mapaVisible).toBe(true);
  }
);

// Step: validar que el título de la sección sea visible
Then(
  'debería ver que el título de la sección se muestra correctamente',
  { timeout: 60000 },
  async function () {
    const tituloVisible = await coberturaPage.verificarTituloVisible();
    expect(tituloVisible).toBe(true);
  }
);

// Hook After para cerrar el navegador siempre, incluso si falla algún step
After(
    { timeout: 10000 },
    
    async function () {

// Espera opcional para observar la página antes de cerrar
  await this.page.waitForTimeout(5000); // 5000ms = 5 segundos

  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});



