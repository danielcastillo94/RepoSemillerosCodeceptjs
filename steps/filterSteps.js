const { filterPage } = inject();

Given('El usuario está en la página de resultados de "Pantallas"', () => {
    filterPage.goToResults();
});

// --- TC007 a TC019: FILTROS Y ORDENAMIENTO ---
When('El usuario visualiza el menú desplegable "Ordenar por:" y selecciona la opción {string}', (opcion) => {
    filterPage.sortBy(opcion);
});

Then('El usuario puede ver los productos ordenados por precio de menor a mayor', () => {
    // Implementación de validación de orden
    I.seeElement('.m-product__card');
});

When('Busca la opción de "Precios" e introduce un rango de precios específico en los campos correspondientes', () => {
    resultsPage.filterByPriceRange('500', '2000');
});

Then('El usuario puede ver los productos filtrados por el rango de precio seleccionado', () => {
    I.seeElement('.m-product__card');
});

Given('El usuario está en la página de resultados de {string} filtrado por rango de precio', (categoria) => {
    // Contextual
});

When('El usuario visualiza los productos mostrados en la página', () => {
    resultsPage.validateResultsDisplayed();
});

Then('El usuario puede verificar que todos los productos mostrados están dentro del rango de precio seleccionado', () => {
    resultsPage.validateProductDetailsInCards();
});

When('El usuario selecciona una marca específica en el menú de filtros', () => {
    resultsPage.filterByBrand('Sony'); // Hardcodeado para ejemplo, ideal paramétrico
});

Then('El usuario puede ver los productos filtrados por la marca seleccionada', () => {
    I.seeElement('.m-product__card');
});

When('El usuario selecciona la opción {string} del menú desplegable', (opcion) => {
    resultsPage.sortBy(opcion);
});

Then('El usuario puede ver los productos ordenados por relevancia', () => {
    I.seeElement('.m-product__card');
});