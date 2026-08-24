
  class FilterPage {

  async filterByPriceRange(I, min, max) {

    await I.usePlaywrightTo(
      `filtrar productos de ${min} a ${max}`,
      async ({ page }) => {

        console.log('\n========================================');
        console.log('FILTRANDO POR RANGO DE PRECIO');
        console.log('========================================');

        const minPrice = Number(
          String(min).replace(/[$,]/g, '')
        );

        const maxPrice = Number(
          String(max).replace(/[$,]/g, '')
        );

        console.log(
          `Rango solicitado: $${minPrice} - $${maxPrice}`
        );

        if (!page.url().includes('s=')) {
          throw new Error(
            `No estamos en resultados: ${page.url()}`
          );
        }

        /*
         * ==============================================
         * INPUT MÍNIMO
         * ==============================================
         */

        const minInput = page.locator(
          '[data-testid="at-text-min-input"]'
        );

        await minInput.waitFor({
          state: 'visible',
          timeout: 15000
        });

        /*
         * ==============================================
         * INPUT MÁXIMO
         * ==============================================
         */

        const maxInput = page.locator(
          '[data-testid="at-text-max-input"]'
        );

        await maxInput.waitFor({
          state: 'visible',
          timeout: 15000
        });

        console.log('✓ Input mínimo encontrado');
        console.log('✓ Input máximo encontrado');

        /*
         * ==============================================
         * ESCRIBIR RANGO
         * ==============================================
         */

        await minInput.fill(
          String(minPrice)
        );

        await maxInput.fill(
          String(maxPrice)
        );

        console.log(
          'Mínimo escrito:',
          await minInput.inputValue()
        );

        console.log(
          'Máximo escrito:',
          await maxInput.inputValue()
        );

        /*
         * ==============================================
         * BUSCAR BOTÓN PARA APLICAR
         * ==============================================
         */

        const applyButton = page
          .getByRole('button', {
            name: /aplicar/i
          })
          .first();

        const applyCount =
          await applyButton.count();

        console.log(
          'Botones Aplicar encontrados:',
          applyCount
        );

        if (applyCount === 0) {

          /*
           * Si no existe botón Aplicar,
           * intentamos Enter desde el máximo.
           */

          console.log(
            '⚠ No se encontró botón Aplicar'
          );

          console.log(
            'Intentando aplicar con Enter...'
          );

          await maxInput.press('Enter');

        } else {

          await applyButton.waitFor({
            state: 'visible',
            timeout: 10000
          });

          await applyButton.click();

          console.log(
            '✓ Botón Aplicar presionado'
          );
        }

        /*
         * ==============================================
         * ESPERAR ACTUALIZACIÓN
         * ==============================================
         */

        await page.waitForTimeout(5000);

        console.log(
          'URL después del filtro:',
          page.url()
        );

        /*
         * ==============================================
         * VALIDAR QUE EL FILTRO REALMENTE SE APLICÓ
         * ==============================================
         */

        const currentMin =
          await minInput.inputValue().catch(() => '');

        const currentMax =
          await maxInput.inputValue().catch(() => '');

        console.log(
          'Mínimo actual:',
          currentMin
        );

        console.log(
          'Máximo actual:',
          currentMax
        );

        if (
          currentMin !== String(minPrice) ||
          currentMax !== String(maxPrice)
        ) {

          throw new Error(
            `El filtro no quedó aplicado correctamente. ` +
            `Esperado: $${minPrice} - $${maxPrice}. ` +
            `Actual: ${currentMin} - ${currentMax}`
          );

        }

        console.log(
          `✓ Filtro aplicado correctamente: ` +
          `$${minPrice} - $${maxPrice}`
        );

        console.log(
          '========================================\n'
        );
      }
    );
  }
}

module.exports = new FilterPage();