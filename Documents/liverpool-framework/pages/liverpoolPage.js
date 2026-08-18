const { I } = inject();

class liverpoolPage {
    urls = {
        urlliverpool: 'https://www.liverpool.com.mx/tienda/home'
    };

    fields = {
        searchBar:'input[type="text"][placeholder="Buscar por producto, categoría y más..."]',
        results: '//*[@id="main-content"]/section/div[3]/section[2]/div[2]/p]',
        errormessage: '//*[//*[@id="main-content"]/section/section/h2]',
        btnCategories: 'button[data-testid="blt26617d4f2e17657d-header-button-category"]',
        categories: '//img[@alt="liverpool-primary"]',
        categoryVideogames:'span[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]',
        subcategoryVideogames: 'a[data-testid="blt2ce3bcb9c5aca813-filter-level-nav-slot"]',
        btnConsoles:'img[data-testid="Consolas Xbox-image"]',
        productsConsoles: page.locator('p', { hasText: 'artículos' }),
        btnXboxConsoles:'img[data-testid="1100132300-image-slider-image-0"]',
        xboxSeries:'img[data-testid="1100132300-image-slider-image-0"]',
         

    };

//GIVEN --------------------------------------------------------------
open() {
    I.amOnPage(this.urls.urlliverpool);
}

//TC001 --------------------------------------------------------------
buscarProducto() {
    I.fillField(this.fields.searchBar, 'atv');
    I.pressKey('Enter');
}

//TC002 --------------------------------------------------------------
buscarProductoInexistente() {
    I.fillField(this.fields.searchBar, 'juegosfera');
    I.pressKey('Enter');
}

//TC003 --------------------------------------------------------------
validacionBusqueda() {
    I.fillField(this.fields.searchBar, 'xbox');
    I.pressKey('Enter');
}

//TC004 --------------------------------------------------------------
abrirCategorias() {
    I.click(this.fields.btnCategorias);
    I.waitForElement(this.fields.Categorias, 10);
    I.see(this.fields.Categorias);
}

//TC005 --------------------------------------------------------------
navegacionSubcategorias(){
    this.abrirCategorias();
    
}





}
module.exports = new liverpoolPage();