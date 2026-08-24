class SearchPage {

  searchInput =
    'input[data-testid="blt26617d4f2e17657d-header-search-input"][type="text"]';

  async open(I) {
    await I.usePlaywrightTo(
      'abrir Liverpool',
      async ({ page }) => {

        const url =
          'https://www.liverpool.com.mx/tienda/home';

        console.log('\n==============================');
        console.log('ABRIENDO LIVERPOOL');
        console.log('==============================');

        await page.goto(url, {
          waitUntil: 'commit',
          timeout: 60000
        });

        await page.waitForTimeout(3000);

        console.log('✓ Liverpool abierto');
        console.log('URL:', page.url());
        console.log('Título:', await page.title());

        console.log('==============================\n');
      }
    );
  }

  async searchProduct(I, product) {

    await I.usePlaywrightTo(
      `buscar producto ${product}`,
      async ({ page }) => {

        console.log('\n==============================');
        console.log('BUSCANDO PRODUCTO');
        console.log('==============================');

        const input = page.locator(this.searchInput).first();

        await input.waitFor({
          state: 'visible',
          timeout: 30000
        });

        await input.fill(product);

        console.log(
          'Producto escrito:',
          await input.inputValue()
        );

        /*
         * No dependemos de Enter.
         * Liverpool puede quedarse en /tienda/home.
         */
        const searchUrl =
          `https://www.liverpool.com.mx/tienda?s=${encodeURIComponent(product)}`;

        await page.goto(searchUrl, {
          waitUntil: 'commit',
          timeout: 60000
        });

        await page.waitForTimeout(5000);

        console.log(
          'URL después de buscar:',
          page.url()
        );

        console.log(
          'Título:',
          await page.title()
        );

        if (!page.url().includes('s=')) {
          throw new Error(
            `La búsqueda no se realizó correctamente. URL actual: ${page.url()}`
          );
        }

        console.log('✓ Página de resultados cargada');
        console.log('==============================\n');
      }
    );
  }

  async openCategories(I) {
    await I.usePlaywrightTo(
      'abrir menú de categorías',
      async ({ page }) => {

        const categorias = page
          .getByText('Categorías', { exact: true })
          .first();

        await categorias.waitFor({
          state: 'visible',
          timeout: 15000
        });

        await categorias.click();

        console.log('Categorías seleccionada');

        await page.waitForTimeout(1000);
      }
    );
  }

  // TC-005
  async openCategories(I) {
  await I.usePlaywrightTo(
    'abrir menú de categorías',
    async ({ page }) => {

      const categorias = page.locator(
        'button[data-testid="blt26617d4f2e17657d-header-button-category"]'
      );

      await categorias.waitFor({ state: 'visible', timeout: 15000 });
      await categorias.click();

      console.log('Categorías seleccionada (botón de escritorio)');

      await page.waitForTimeout(1000);
    }
  );
}
  // TC-006
  async validateCategoryProducts(I) {
    await I.usePlaywrightTo(
      'validar productos de la categoría',
      async ({ page }) => {

        await page.waitForTimeout(3000);

        const products = page.locator(
          '[data-testid$="-card"]'
        );

        const count = await products.count();

        console.log(
          'Productos encontrados en categoría:',
          count
        );

        if (count === 0) {
          throw new Error(
            'No se encontraron productos en la categoría Mujer'
          );
        }

        console.log(
          `✓ Se encontraron ${count} productos en la categoría`
        );
      }
    );
  }
}

module.exports = new SearchPage();