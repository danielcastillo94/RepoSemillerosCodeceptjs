const { I } = inject();

class MenuPage {
    fields = {
      //Campo de Categoria
      botonCategorias: '//button[@data-testid="blt26617d4f2e17657d-header-button-category"]',
      //Menu principal de categoria
      menuCategorias: '//img[@alt="liverpool-primary"]',
      // Categoría principal
      categoriaPrincipal: '//a[.//span[contains(text(), "Mujer")]]',
      // Contenedor de subcategorías
      subcategorias: '//h1[@class="line-clamp-2 font-semibold text-body-base"]',
      // Subcategoría
      subcategoria: '//span[text()="Tenis Casuales"]'
    };
    //GIVEN-PRIMCIPAL---------------------------------------------------------------------------------------------------------------
    pagina(){
        //Pagina de inicio de Telcel
        I.amOnPage('/');
       
    }

    abrirMenuCategorias() { 
        I.waitForElement( this.fields.botonCategorias, 10 ); 
        I.click( this.fields.botonCategorias ); 
    }

    validarMenuCategoriasVisible() { 
        I.waitForElement( this.fields.menuCategorias, 10 ); 
        I.seeElement( this.fields.menuCategorias ); 
    }

  // ============================================================
  // TC-004
  // Seleccionar categoría principal
  // ============================================================

  seleccionarCategoriaPrincipal() {
    I.waitForElement(this.fields.categoriaPrincipal, 10);
    I.moveCursorTo(this.fields.categoriaPrincipal, 10);
  }
  // ============================================================
  // TC-004
  // Validar subcategorías
  // ============================================================
  validarSubcategorias() {
    I.waitForElement(this.fields.subcategorias,10);
    I.seeElement(this.fields.subcategorias);
  }
  // ============================================================
  // TC-005
  // Seleccionar subcategoría
  // ============================================================

  seleccionarSubcategoria() {
    I.waitForElement(this.fields.subcategoria,10);
    I.click(this.fields.subcategoria);
  }

}

module.exports = new MenuPage();