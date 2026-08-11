const { I } = inject();
class CategoryPage {

    
        fields = { 
            campoCategoria: '//h1[text()="Tenis Casuales"]', 
            productos: '//h3[@class="text-body-base font-body-base line-clamp-2" and text()="Tenis para mujer"]' 
        }; 


        validarPaginaCategoria() { 
            I.waitForElement( this.fields.campoCategoria, 10 ); 
            I.seeElement( this.fields.campoCategoria ); 
            I.click( this.fields.campoCategoria );
        }

        validarProductos() { 
            I.waitForElement( this.fields.productos, 10 ); 
            I.seeElement( this.fields.productos );
        }
}
module.exports = new CategoryPage();