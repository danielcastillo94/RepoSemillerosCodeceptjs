class ResultsPage {

  async waitForResults(I) {
    await I.usePlaywrightTo(
      'inspeccionar resultados de búsqueda',
      async ({ page }) => {

       const productCards = page.locator(
  '[data-testid$="-card"]'
);

await productCards.first().waitFor({
  state: 'visible',
  timeout: 30000
});

await page.waitForTimeout(3000);


        console.log('\n');
        console.log('========================================');
        console.log('INSPECCIÓN DE PRODUCTOS');
        console.log('========================================');

        const elements = await page.locator('body *').evaluateAll(elements => {
          return elements
            .filter(el => {
              const text = el.innerText?.trim() || '';

              return (
                text.includes('$') &&
                text.length > 0 &&
                text.length < 400
              );
            })
            .slice(0, 40)
            .map(el => ({
              tag: el.tagName,
              class: typeof el.className === 'string'
                ? el.className
                : '',
              testid: el.getAttribute('data-testid'),
              text: el.innerText?.trim()
            }));
        });

        console.log(JSON.stringify(elements, null, 2));

        console.log('========================================');
        console.log('FIN INSPECCIÓN');
        console.log('========================================');
      }
    );
  }

  async validateNoResults(I) {
    await I.usePlaywrightTo(
      'validar que no hay resultados',
      async ({ page }) => {

        await page.waitForTimeout(2000);

        const bodyText = await page.locator('body').innerText();

        console.log(
          'Texto de la página:',
          bodyText.substring(0, 2000)
        );

        const noResults =
          bodyText.toLowerCase().includes('no encontramos') ||
          bodyText.toLowerCase().includes('no hay resultados') ||
          bodyText.toLowerCase().includes('sin resultados');

        if (!noResults) {
          throw new Error(
            'No se encontró el mensaje esperado de que no hay resultados'
          );
        }

        console.log('✓ Mensaje de no resultados encontrado');
      }
    );
  }

  async validateProduct(I, product) {
    await I.usePlaywrightTo(
      `validar productos relacionados con ${product}`,
      async ({ page }) => {

        await page.waitForTimeout(2000);

        const bodyText = await page.locator('body').innerText();

        console.log(`Buscando el producto: ${product}`);

        const productFound = bodyText
          .toLowerCase()
          .includes(product.toLowerCase());

        if (!productFound) {
          throw new Error(
            `No se encontraron productos relacionados con "${product}"`
          );
        }

        console.log(
          `✓ Productos relacionados con "${product}" encontrados`
        );
      }
    );
  }

  async validatePricesLowToHigh(I) {
    await I.usePlaywrightTo(
      'validar productos de menor a mayor',
      async ({ page }) => {

        const priceElements = page.locator(
          '[data-testid$="-price"]'
        );

        await priceElements.first().waitFor({
          state: 'visible',
          timeout: 15000
        });

        const prices = await priceElements.evaluateAll(elements => {
          return elements
            .map(el => el.innerText.trim())
            .map(text => {

              const match = text.match(/\$([\d,]+)/);

              if (!match) {
                return null;
              }

              return Number(
                match[1].replace(/,/g, '')
              );
            })
            .filter(price => price !== null);
        });

        console.log('Precios encontrados:', prices);

        if (prices.length < 2) {
          throw new Error(
            'No se encontraron suficientes precios para validar el orden'
          );
        }

        for (let i = 0; i < prices.length - 1; i++) {

          if (prices[i] > prices[i + 1]) {
            throw new Error(
              `Los precios NO están ordenados de menor a mayor: ` +
              `${prices[i]} > ${prices[i + 1]}`
            );
          }
        }

        console.log(
          '✓ Los productos están ordenados de menor a mayor'
        );
      }
    );
  }
   // TC-008 / TC-009
async validateProductsInPriceRange(I, min, max) {

  await I.usePlaywrightTo(
    `validar productos dentro del rango ${min} a ${max}`,
    async ({ page }) => {

      const minPrice = Number(
        String(min).replace(/[$,]/g, '')
      );

      const maxPrice = Number(
        String(max).replace(/[$,]/g, '')
      );

      console.log('\n========================================');
      console.log('VALIDANDO RANGO DE PRECIOS');
      console.log('========================================');
      console.log(`Rango esperado: $${minPrice} - $${maxPrice}`);
      console.log('URL:', page.url());

      const priceElements = page.locator(
        '[data-testid$="-price"]'
      );

      await priceElements.first().waitFor({
        state: 'visible',
        timeout: 15000
      });

      const count = await priceElements.count();

      console.log(
        'Elementos de precio encontrados:',
        count
      );

      if (count === 0) {
        throw new Error(
          'No se encontraron precios de productos para validar'
        );
      }

      const prices = await priceElements.evaluateAll(
        elements => {

          return elements
            .map(el => el.innerText?.trim() || '')
            .map(text => {

              const cleanText = text
                .replace(/\s/g, '')
                .replace(/\$/g, '');

              const match = cleanText.match(/[\d,.]+/);

              if (!match) {
                return null;
              }

              let value = match[0];

              /*
               * Liverpool entrega en el DOM valores como:
               *
               * $87920  -> $879.20
               * $79700  -> $797.00
               * $109900 -> $1,099.00
               */

              if (
                !value.includes('.') &&
                !value.includes(',')
              ) {
                if (value.length > 2) {
                  value =
                    value.slice(0, -2) +
                    '.' +
                    value.slice(-2);
                }
              }

              value = value.replace(/,/g, '');

              return Number(value);
            })
            .filter(price => price !== null);
        }
      );

      console.log(
        'Precios encontrados:',
        prices
      );

      if (prices.length === 0) {
        throw new Error(
          'No se pudieron obtener precios numéricos de los productos'
        );
      }

      const invalidPrices = prices.filter(
        price =>
          price < minPrice ||
          price > maxPrice
      );

      if (invalidPrices.length > 0) {

        throw new Error(
          `Se encontraron productos fuera del rango ` +
          `$${minPrice} - $${maxPrice}. ` +
          `Precios fuera de rango: ${invalidPrices.join(', ')}`
        );
      }

      console.log(
        `✓ Todos los ${prices.length} productos ` +
        `están dentro del rango $${minPrice} - $${maxPrice}`
      );

      console.log('========================================');
      console.log('VALIDACIÓN TERMINADA');
      console.log('========================================\n');
    }
  );
}

  
}

module.exports = new ResultsPage();
