const { I } = inject();

class buscarPage {
    fields = {
      // Campo de búsqueda
      searchInput: 'input[type="text"][placeholder="Buscar por producto, categoría y más..."]',
    };
    //GIVEN-PRIMCIPAL---------------------------------------------------------------------------------------------------------------
    pagina(){
        //Pagina de inicio de Telcel
        I.amOnPage('/');
       
    }
    //@TC-001----------------------------------------------------------------------------------------------------------------------
    buscarProducto(producto) {
        I.fillField(this.fields.searchInput, producto);
        I.pressKey('Enter');
    }
     //@TC-002----------------------------------------------------------------------------------------------------------------------
    busquedainexistente(producto) {
        I.fillField(this.fields.searchInput, producto);
        I.pressKey('Enter');
    }
    //@TC-003----------------------------------------------------------------------------------------------------------------------
    buscarProductoRelacionado(producto) {
        I.fillField(this.fields.searchInput, producto);
        I.pressKey('Enter');
    }
}
module.exports = buscarPage;