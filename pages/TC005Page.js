const { I } = inject();
const timer = 5;
_productName = "";
class TC005Page {
    fields = {
        searchBar: 'input[id="buscador-menu-input"]',
        Product: '(//div[@class="v-card v-theme--light bg-white v-card--density-default v-card--variant-elevated card card-device"])[1]', // Selector para el primer producto en los resultados
        productDetailsPage: '//cx-page-layout[@class="ng-star-inserted ProductDetailsPageTemplate"]', // Selector para el título del producto en la página de detalles
        ProductPrice: '//div[@class="cx-product-price-plan"]', // Selector para el precio del producto (ajustar según el HTML real)
        ProductDescription: '//span[text()="Características"]', // Selector para la descripción del producto (ajustar según el HTML real)
        ProductImage: '(//cx-media[@class="img-item is-initialized"])[1]' // Selector para la imagen del producto (ajustar según el HTML real)
    };

    goToHomePage() {
        //Página de inicio de Telcel
        I.amOnPage("https://www.telcel.com/"); 

        // Esperar a que la página cargue completamente
        I.waitForElement(this.fields.searchBar, timer);

        // Verificar que estamos en la página correcta
        I.seeInTitle('Telcel'); 
    }

    searchProduct(productName) {
        _productName = productName; //la asignamos a variable global
        // Ingresar el nombre del producto en la barra de búsqueda
        I.fillField(this.fields.searchBar, productName);
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForElement(this.fields.Product, timer);
    }

    selectProduct() {
        // Seleccionar el primer producto de los resultados
        I.click(this.fields.Product);

        // Esperar a que la página de detalles del producto cargue
        I.waitForElement('h1', timer); // Asumiendo que el nombre del producto está en un <h1>
    }

    verifyProductDetailPage() {
        // Verificar que estamos en la página de detalles del producto
        I.seeElement(this.fields.productDetailsPage);
    }

    async verifyProductDetails() {
        // Verificar que el nombre sea visible y capturarlo
        I.waitForElement(`//h1[contains(text(),"${_productName}")]`, timer);
        // Nombre del producto guardado en una variable
        const productName = await I.grabTextFrom(`//h1[contains(text(),"${_productName}")]`);
        I.seeElement(`//h1[contains(text(),"${_productName}")]`);
        
        // Precio del producto
        I.waitForElement(this.fields.ProductPrice, timer);
        // Precio del producto guardado en una variable
        const productPrice = await I.grabTextFrom(this.fields.ProductPrice);
        I.seeElement(this.fields.ProductPrice);
        
        // Descripción
        I.waitForElement(this.fields.ProductDescription, timer);
        I.seeElement(this.fields.ProductDescription);
        
        // Imagen
        I.waitForElement(this.fields.ProductImage, timer);
        I.seeElement(this.fields.ProductImage);
    }
}

module.exports = new TC005Page();