const { I } = inject();

class TC005Page {
    fields = {
        searchBar: 'input[id="buscador-menu-input"]',
        Product: '(//div[@class="v-card v-theme--light bg-white v-card--density-default v-card--variant-elevated card card-device"])[1]', // Selector para el primer producto en los resultados
        productDetailsPage: '//cx-page-layout[@class="ng-star-inserted ProductDetailsPageTemplate"]', // Selector para el título del producto en la página de detalles
        ProductName: '//h1', // Selector para el nombre del producto
        ProductPrice: '//div[@class="cx-product-price-plan"]', // Selector para el precio del producto (ajustar según el HTML real)
        ProductDescription: '//span[text()="Características"]', // Selector para la descripción del producto (ajustar según el HTML real)
        ProductImage: '(//cx-media[@class="img-item is-initialized"])[1]' // Selector para la imagen del producto (ajustar según el HTML real)
    };

    async goToHomePage() {
        //Página de inicio de Telcel
        I.amOnPage("https://www.telcel.com/"); 

        // Esperar a que la página cargue completamente
        I.waitForElement(this.fields.searchBar, 10);

        // Verificar que estamos en la página correcta
        I.seeInTitle('Telcel'); 
    }

    async searchProduct(productName) {
        // Ingresar el nombre del producto en la barra de búsqueda
        I.fillField(this.fields.searchBar, productName);
        I.pressKey('Enter');

        // Esperar a que los resultados de búsqueda carguen
        I.waitForElement(this.fields.Product, 10);
    }

    async selectProduct() {
        // Seleccionar el primer producto de los resultados
        I.click(this.fields.Product);

        // Esperar a que la página de detalles del producto cargue
        I.waitForElement('h1', 10); // Asumiendo que el nombre del producto está en un <h1>
    }

    async verifyProductDetailPage() {
        // Verificar que estamos en la página de detalles del producto
        I.seeElement(this.fields.productDetailsPage);
    }

    async verifyProductDetails() {
        // Verificar que el nombre sea visible y capturarlo
        I.waitForElement(this.fields.ProductName, 10);
        // Nombre del producto guardado en una variable
        const productName = await I.grabTextFrom(this.fields.ProductName);
        console.log('Nombre del producto: ' + productName);
        
        // Precio del producto
        I.waitForElement(this.fields.ProductPrice, 10);
        // Precio del producto guardado en una variable
        const productPrice = await I.grabTextFrom(this.fields.ProductPrice);
        console.log('Precio del producto: ' + productPrice);
        
        // Descripción
        I.waitForElement(this.fields.ProductDescription, 10);
        console.log('Sección de características: VISIBLE');
        
        // Imagen
        I.waitForElement(this.fields.ProductImage, 10);
        console.log('Imagen del producto: VISIBLE');
    }
}

module.exports = new TC005Page();