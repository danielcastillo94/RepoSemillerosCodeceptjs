const { buscarPage, resultsPage } = inject();

    Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
    buscarPage.pagina();
    });

//TC-001--------------------------------------------------------------------------------------------------------------------
    When('El usuario busca el producto {string}', (producto) => {
    buscarPage.buscarProducto(producto);
    });
    Then(/^El usuario visualiza los resultados de búsqueda$/, () => {
    resultsPage.validarResultados();
    });

//TC-002--------------------------------------------------------------------------------------------------------------------
    When('El usuario busca el producto inexistente {string}', (producto) => {
    buscarPage.busquedainexistente(producto);
    });
    Then(/^El usuario visualiza un mensaje indicando que no hay resultados$/, () => {
    resultsPage.validarNoHayResultados();
    });

//TC-003--------------------------------------------------------------------------------------------------------------------
    When('El usuario busca el producto de {string}', (producto) => {
    buscarPage.buscarProductoRelacionado(producto);
    })
    Then(/^El usuario visualiza productos relacionados con "zapatillas"$/, () => {
    resultsPage.validarResultadosMostrados();
    });