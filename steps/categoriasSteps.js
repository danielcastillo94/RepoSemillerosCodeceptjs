const { CategoryPage, MenuPage, I } = inject();

// BACKGROUND --------------------------------------------------------------------------------------------------
   Given( /^El usuario se encuentra en la página principal de Liverpool$/, () => { 
       MenuPage.pagina(); } 
    );

// TC-004 --------------------------------------------------------------------------------------------------
   When( /^Da click en el componente de la página principal que dice Categorias$/, () => { 
        MenuPage.abrirMenuCategorias();} 
    );
   Then( /^Se despliega el menú de categorías$/, () => { 
    MenuPage.validarMenuCategoriasVisible(); } 
   );
   When( /^El usuario selecciona una categoría principal$/, () => { 
    MenuPage.seleccionarCategoriaPrincipal(); } 
    );
   Then( /^Se muestran las subcategorías disponibles$/, () => { 
    MenuPage.validarSubcategorias(); } 
   );

// TC-005 --------------------------------------------------------------------------------------------------
    When( /^El usuario selecciona una categoría principal$/, () => {
        MenuPage.abrirMenuCategorias();
        MenuPage.seleccionarCategoriaPrincipal();
    });
    When(/^El usuario selecciona una subcategoría$/, () => {
        MenuPage.seleccionarSubcategoria();
    });
    Then(/^El usuario es dirigido a la página de la subcategoría$/, () => {
        CategoryPage.validarPaginaCategoria();
    });

// TC-006 --------------------------------------------------------------------------------------------------
    When(/^El usuario selecciona una categoría principal$/, () => {
        MenuPage.abrirMenuCategorias();
        MenuPage.seleccionarCategoriaPrincipal();
    });
    When(/^El usuario selecciona una subcategoría$/,() =>{
        MenuPage.seleccionarSubcategoria();
    });
    Then (/^El usuario es dirigido a la página de la subcategoría, mostrando productos correspondientes a la categoría seleccionadagina de la subcategoría, mostrando productos correspondientes a la categoría seleccionada$/, () => {
        CategoryPage.validarProductos();
    });