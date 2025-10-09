// pages/cobertura_page.js
class CoberturaPage {
  constructor(page) {
    this.page = page;

    // Selectores actualizados
    this.buscador = page.locator('#buscador-menu-input'); // Input del buscador principal
    this.resultadoPrimero = page.locator(
      'p.tc_card-basic-img--title',
      { hasText: 'Mapas de Cobertura Telcel' }
    ); // Primer resultado que aparece en la búsqueda

    // Solo el h1 con el texto exacto del título principal de la sección
    this.tituloCobertura = page.locator('h1', { hasText: 'Mapas de Cobertura' });

    // Solo el primer iframe cuyo src contenga "mapas/coberturas"
    this.mapaInteractivo = page.locator('iframe[src*="mapas/coberturas"]').first();
  }

  // Método para buscar la sección Cobertura usando el buscador con Enter
  async buscarCobertura() {
    // Escribir término en el input
    await this.buscador.fill('mapas de cobertura telcel');

    // Presionar Enter para realizar la búsqueda
    await this.buscador.press('Enter');

    // Esperar que aparezca el primer resultado visible y hacer click
    await this.resultadoPrimero.waitFor({ state: 'visible', timeout: 10000 });
    await this.resultadoPrimero.click();

    // Esperar a que el DOM esté cargado y agregar pequeña pausa extra
    // Esto evita timeout por scripts o iframes que siguen cargando
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000); // 2 segundos de espera adicional
  }

  // Validar que el título esté visible
  async verificarTituloVisible() {
    await this.tituloCobertura.waitFor({ state: 'visible', timeout: 10000 });
    return await this.tituloCobertura.isVisible();
  }

  // Validar que el mapa interactivo esté visible
  async verificarMapaVisible() {
    await this.mapaInteractivo.waitFor({ state: 'visible', timeout: 10000 });
    return await this.mapaInteractivo.isVisible();
  }
}

module.exports = CoberturaPage;
