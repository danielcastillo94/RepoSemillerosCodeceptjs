/**
 * @file Representa el Page Object para la página de Telcel, encapsulando selectores y métodos
 * para interactuar y validar elementos
 * @author Marco Soto
 * @version 1.0
 */

const { I } = inject();
const timer = 5; // Tiempo de espera por defecto en segundos.
let _productName = ""; // Variable privada para almacenar el nombre del producto entre pasos.

class marcosotoPage {
    /**
     * @property {Object} selectors - Contiene todos los selectores CSS y XPath utilizados en la página.
     */
    selectors = {
        // Selectores generales
        CookiesBanner: '[class="telcel-banner-aviso-cookies"]',
        CookiesAcceptButton: '[id="acepto-cookies"]',
        SearchBar: 'input[id="buscador-menu-input"]',
        Logo: '[class="navbar-brand gluo-logo-telcel1"]',
        MainMenu: '[id="telcel-menu-principal-boton"]',
        RegionMenu: '(//img[@alt="icono de ubicacion"])[1]',
        MainMenuOpened: '//nav[@class="menu-principal active-menu"]',
        MainBanner: '//div[@class="bannerprincipal parbase aem-GridColumn aem-GridColumn--default--12"]',
        
        // Elementos del menú
        MenuItem: '//li[@class="menu-item hover-menu1"]',
        MenuItemGeneral: '//li[@class="menu-item"]',
        MenuDevices: '//a[text()="Dispositivos Conectados y Seguridad"]',
        MenuEntertainment: '//a[text()="Entretenimiento"]',
        MenuExperiences: '//a[text()="Experiencias"]',
        MenuHelp: '//a[text()="Ayuda"]',
        MenuESIM: '//a[text()="eSIM"]',
        MenuPlanes: '//a[text()="Plan de renta"]',
        MenuCoverage: '//a[text()="Red de mayor cobertura"]',
        MenuContact: '//a[text()="Contáctanos"]',
        MenuFAQ: '//a[text()="Preguntas frecuentes"]',
        
        // Selectores para planes
        PlanesNav: '//nav[@data-path="/content/telcel/planes-renta"]',
        CarruselContainer: '[class="free-content-swipper--container carruselLibre-planes-renta"]',
        PlanCard: '(//div[@class="telcel-destacado-descriptivo---contenido1  "])[1]',
        CompareButton: '//a[@data-nombre="Telcel Ultra 5" and text()="Comparar"]',
        PlanTitle: '//p[text()="Telcel Ultra 5"]',
        SolapasContainer: '[id="contenedor-interno-solapas"]',
        
        // Selectores de búsqueda de productos
        ProductCard: '(//div[@class="v-card v-theme--light bg-white v-card--density-default v-card--variant-elevated card card-device"])[1]',
        ProductSearchResults: '//div[@class="v-card v-theme--light bg-white v-card--density-default v-card--variant-elevated card card-device"]',
        
        // Selectores de página de detalles del producto
        ProductDetailsPage: '//cx-page-layout[@class="ng-star-inserted ProductDetailsPageTemplate"]',
        ProductTitle: '//h1',
        ProductTitleContains: (productName) => `//h1[contains(text(),"${productName}")]`,
        ProductPrice: '//div[@class="cx-product-price-plan"]',
        ProductDescription: '//span[text()="Características"]',
        ProductImage: '//div[@class="picsum-img-wrapper ng-star-inserted"]',

        // Selectores para cobertura
        CoverageLink: '//a[contains(text(),"Tecnología 5G Regiones 1 a 9")]',
        CoverageMapIframe: 'iframe[src="https://lbsva.telcel.com/mapas/coberturas/cdmx"]',
        MapContainer: '//div[@class="map-container"]',
        
        // Selectores de contacto
        ContactTextarea: '//textarea[@name="Consulta"]',
        ContactSubmitButton: '//a[@id="form-btn"]',
        EmailContactLink: '//a[text()="Correo Electrónico"]',
        
        // Selectores de FAQ
        FAQLeftMenu: '//div[@class="sc-browse-left-col sc-left-navigation"]',
        FAQResultList: '//div[@class="sc-result-list-container"]',
        
        // Selectores de móvil
        MobilePersonas: '//a[@href="/personas"]',
        MobileEmpresas: '(//a[@href="/empresas"])[1]',
        MobileClaroShop: '//a[@data-menusup="Claro shop"]',
        MobileTravelMexico: '//a[@data-menusup="Travel to México"]',
        TopNavMobileOpen: '[class="top-nav open-menu"]',
        
        // Selectores de términos y footer
        TermsTitle: '//h1[text()="Términos y condiciones"]',
        TermsAccordion: '//div[@class="panel-group glosario js-accordion-panels js-cq-accordion"]',
        FooterContainer: '//div[@id="telcel-footer-contenedor"]',
        FooterFragment: '//div[@class="experiencefragment_1338355395 experiencefragment"]',
        TermsLink: '//a[@href="/terminos-y-condiciones"]',
        
        // Selectores de redes sociales
        SocialMediaX: '//img[@alt="x twitter"]',
        SocialMediaFacebook: '//img[@alt="facebook"]',
        SocialMediaYoutube: '//img[@alt="youtube"]',
        SocialMediaHolaTelcel: '//img[@alt="hola telcel"]',
    };

    // ==================== MÉTODOS GENERALES ====================
    
    /**
     * Navega a la página principal de Telcel y verifica que cargue correctamente.
     */
    goToHomePage() {
        I.amOnPage("https://www.telcel.com/");
        I.waitForElement(this.selectors.SearchBar, timer);
        I.seeInTitle('Telcel');
    }

    /**
     * Acepta el banner de cookies si está presente.
     * @async
     */
    async acceptCookies() {
        I.waitForElement(this.selectors.CookiesBanner, timer);
        I.click(this.selectors.CookiesAcceptButton);
        await I.dontSeeElement(this.selectors.CookiesBanner, timer);
    }

    /**
     * Realiza una búsqueda de producto en la barra de búsqueda principal.
     * @param {string} productName - El nombre del producto a buscar.
     */
    searchProduct(productName) {
        //Se asigna a una variable global para uso en otros selectores 
        _productName = productName;
        I.fillField(this.selectors.SearchBar, productName);
        I.pressKey('Enter');
        I.waitForElement(this.selectors.ProductCard, timer);
    }

    // ==================== MÉTODOS DE VALIDACIÓN ====================

    /**
     * Dirige a la función de verificación de elementos correcta según la página especificada.
     * @async
     * @param {string} page - El nombre de la página a verificar (ej. "main", "Planes").
     */
    async verifyPageElements(page) {
        //Se optó por hacer uso de funciones para mejor lectura y mantenibilidad
        switch (page) {
            case "main":
                await this._verifyMainPage();
                break;
            case "main menu":
                await this._verifyMainMenu();
                break;
            case "Planes":
                await this._verifyPlanesPage();
                break;
            case "product detail":
                await this._verifyProductDetailPage();
                break;
            case "Cobertura":
                await this._verifyCoverturePage();
                break;
            case "Contacto":
                await this._verifyContactPage();
                break;
            case "Preguntas Frecuentes":
                await this._verifyFAQPage();
                break;
            case "movil menu":
                await this._verifyMobileMenu();
                break;
            case "Terminos y Condiciones":
                await this._verifyTermsPage();
                break;
            default:
                throw new Error(`Página desconocida: ${page}`);
        }
    }

    /**
     * Verifican la presencia de elementos en las páginas
     * Se incluyen todos los metodos _verify*()
     * @async
     * @private
     */
    async _verifyMainPage() {
        await I.seeElement(this.selectors.SearchBar);
        await I.seeElement(this.selectors.Logo);
        await I.seeElement(this.selectors.MainMenu);
        await I.seeElement(this.selectors.MainBanner);
    }

    async _verifyMainMenu() {
        await I.seeElement(this.selectors.MenuItem);
        await I.seeElement(this.selectors.MenuDevices);
        await I.seeElement(this.selectors.MenuEntertainment);
        await I.seeElement(this.selectors.MenuExperiences);
        await I.seeElement(this.selectors.MenuHelp);
        await I.seeElement(this.selectors.MenuESIM);
    }

    async _verifyPlanesPage() {
        await I.seeElement(this.selectors.PlanesNav, timer);
    }

    async _verifyProductDetailPage() {
        await I.seeElement(this.selectors.ProductDetailsPage);
    }

    async _verifyCoverturePage() {
        I.scrollTo(this.selectors.CoverageLink);
        await I.waitForElement(this.selectors.CoverageMapIframe, 10);
        await I.waitForElement('//iframe[@id="iframe-recarga3"]',10);
        I.switchTo(this.selectors.CoverageMapIframe);
        //Se usa timer, aunque el await ya espera a el selector, no espera a ver el mapa y falla
        await I.waitForElement(this.selectors.MapContainer, timer);
        await I.seeElement(this.selectors.MapContainer, timer);
        I.switchTo(); // Regresa al contexto principal de la página.
    }

    async _verifyContactPage() {
        await I.seeElement(this.selectors.ContactTextarea, timer);
        await I.seeElement(this.selectors.ContactSubmitButton, timer);
    }

    async _verifyFAQPage() {
        await I.waitForElement(this.selectors.FAQLeftMenu, timer);
        await I.seeElement(this.selectors.FAQLeftMenu);
        await I.seeElement(this.selectors.FAQResultList);
    }

    async _verifyMobileMenu() {
        await I.seeElement(this.selectors.MobilePersonas);
        await I.seeElement(this.selectors.MobileEmpresas);
        await I.seeElement(this.selectors.MobileClaroShop);
        await I.seeElement(this.selectors.MobileTravelMexico);
    }

    async _verifyTermsPage() {
        await I.seeElement(this.selectors.TermsTitle);
        await I.seeElement(this.selectors.TermsAccordion);
    }

    // ==================== MÉTODOS DE NAVEGACIÓN ====================

    /**
     * Navega a una sección específica a través del menú principal.
     * @async
     * @param {string} menuOption - La opción del menú a la que se desea navegar (ej. "Planes").
     */
    async navigateToMenuOption(menuOption) {
        //Se optó por hacer uso de funciones para mejor lectura y mantenibilidad
        switch (menuOption) {
            case "Planes":
                await this._navigateToPlanesMenu();
                break;
            case "Cobertura":
                await this._navigateToCoberturaMenu();
                break;
            case "Contacto":
                await this._navigateToContactMenu();
                break;
            case "Preguntas Frecuentes":
                await this._navigateToFAQMenu();
                break;
            default:
                throw new Error(`Opción de menú desconocida: ${menuOption}`);
        }
    }

    /**
     *  Navega a las secciones
     *  Se incluyen todas las secciones para navegación
     *  _navigateTo*()
     * @async
     * @private
     */
    async _navigateToPlanesMenu() {
        I.moveCursorTo(this.selectors.MenuItem);
        await I.click(this.selectors.MenuPlanes);
    }

    async _navigateToCoberturaMenu() {
        I.moveCursorTo(this.selectors.MenuItem);
        await I.click(this.selectors.MenuCoverage);
        await I.waitForElement(this.selectors.SolapasContainer, timer);
    }

    async _navigateToContactMenu() {
        I.moveCursorTo(`${this.selectors.MenuItemGeneral}[4]`);
        await I.click(this.selectors.MenuContact);
    }

    async _navigateToFAQMenu() {
        I.moveCursorTo(`${this.selectors.MenuItemGeneral}[4]`);
        await I.click(this.selectors.MenuFAQ);
    }

    /**
     * Abre un menú específico en la página.
     * @async
     * @param {string} menu - El tipo de menú a abrir (ej. "main", "Region", "movil").
     */
    async openMenu(menu) {
        //Se optó por hacer uso de funciones para mejor lectura y mantenibilidad
        switch (menu) {
            case "main":
                await this._openMainMenu();
                break;
            case "Region":
                await this._openRegionMenu();
                break;
            case "movil":
                await this._openMobileMenu();
                break;
            default:
                throw new Error(`Opción de menú desconocida: ${menu}`);
        }
    }

    /**
     *  Abre el menú de navegación (hover).
     *  Aunque es similar a navigateToMenuOption(), este ayuda a validar
     *  y en los reportes de gerking tiene mas sentido
     * @async
     * @private
     */
    async _openMainMenu() {
        I.moveCursorTo(this.selectors.MainMenu);
        await I.waitForElement(this.selectors.MainMenuOpened, timer);
    }

    async _openRegionMenu() {
        await I.click(this.selectors.RegionMenu);
        await I.waitForElement('//a[@data-submenu="Aguascalientes"]', timer);
    }

    async _openMobileMenu() {
        await I.click(this.selectors.MainMenu);
        await I.waitForElement(this.selectors.TopNavMobileOpen, timer);
    }

    // ==================== MÉTODOS TC003 ====================
    
    /**
     * Navega a la página de detalles del plan "Telcel Ultra".
     * @async
     */
    async goToPlanTelcelUltra() {
        await I.waitForElement(this.selectors.CarruselContainer, timer);
        await I.click(this.selectors.PlanCard);
        await I.waitInUrl('/telcel-ultra', timer);
    }

    /**
     * Valida que el botón de "Comparar" sea visible en la página del plan.
     * @async
     */
    async validateComprarButton() {
        I.scrollTo(this.selectors.PlanTitle);
        await I.seeElement(this.selectors.CompareButton);
    }

    // ==================== MÉTODOS TC004 ====================
    
    /**
     * Verifica que los resultados de la búsqueda de productos se muestren en la página.
     */
    verifySearchResults() {
        I.waitForElement(this.selectors.ProductSearchResults, timer);
        I.seeElement(this.selectors.ProductSearchResults);
    }

    // ==================== MÉTODOS TC005 ====================

    /**
     * Selecciona el primer producto de la lista de resultados.
     */
    selectProduct() {
        I.click(this.selectors.ProductCard);
        I.waitForElement(this.selectors.ProductTitle, timer);
    }

    /**
     * Verifica los detalles clave en la página del producto (título, precio, descripción, imagen).
     * @async
     */
    async verifyProductDetails() {
        I.waitForElement(this.selectors.ProductTitleContains(_productName), timer);
        await I.grabTextFrom(this.selectors.ProductTitleContains(_productName));
        I.seeElement(this.selectors.ProductTitleContains(_productName));
        
        I.waitForElement(this.selectors.ProductPrice, timer);
        await I.grabTextFrom(this.selectors.ProductPrice);
        I.seeElement(this.selectors.ProductPrice);
        
        I.waitForElement(this.selectors.ProductDescription, timer);
        I.seeElement(this.selectors.ProductDescription);

        await I.waitForElement(this.selectors.ProductImage, timer);
        I.seeElement(this.selectors.ProductImage);
    }

    // ==================== MÉTODOS TC006 ====================
    
    /**
     * Navega a la vista del mapa desde la página de planes.
     * @async
     */
    async goToMapView() {
        I.scrollTo(this.selectors.PlanCard);
        await I.click(this.selectors.PlanCard);
        await I.waitForElement(this.selectors.SolapasContainer, timer);
    }

    // ==================== MÉTODOS TC007 ====================
    
    /**
     * Navega al formulario de contacto por correo electrónico.
     * @async
     */
    async goToContactView() {
        await I.waitForElement(this.selectors.EmailContactLink, timer);
        I.click(this.selectors.EmailContactLink);
        await I.scrollTo(this.selectors.ContactTextarea);
    }

    // ==================== MÉTODOS TC009 ====================
    
    /**
     * Selecciona una región específica del menú de regiones.
     * @async
     * @param {string} region - El nombre de la región a seleccionar (ej. "Jalisco").
     */
    async selectRegion(region) {
        await I.click(`//a[@data-submenu="${region}"]`);
    }

    /**
     * Valida que el cambio de región se haya aplicado correctamente.
     * @async
     * @param {string} region - El nombre de la región que debería estar seleccionada.
     */
    async validateRegionChange(region) {
        await I.click(this.selectors.RegionMenu);
        await I.waitForElement(`//a[@data-submenu="${region}" and //li[contains(@class,"selected")]]`, timer);
        I.seeElement(`//a[@data-submenu="${region}" and //li[contains(@class,"selected")]]`);
    }

    // ==================== MÉTODOS TC010 ====================
    
    /**
     * Se desplaza hasta el footer de la página.
     * @async
     */
    async goToFooter() {
        I.scrollTo(this.selectors.FooterFragment);
        await I.waitForElement(this.selectors.FooterContainer);
    }

    /**
     * Valida y hace clic en un icono de red social en el footer.
     * @async
     * @param {string} socialMedia - El nombre de la red social (ej. "X", "Facebook").
     */
    async validateSocialMedia(socialMedia) {
        //Para no usar switch se declaran constante
        const socialMediaMap = {
            X: this.selectors.SocialMediaX,
            Facebook: this.selectors.SocialMediaFacebook,
            Youtube: this.selectors.SocialMediaYoutube,
            HolaTelcel: this.selectors.SocialMediaHolaTelcel,
        };
        //En caso de que no lo encuentre manda error
        const locator = socialMediaMap[socialMedia];
        if (!locator) {
            throw new Error(`No existe configuración para ${socialMedia}`);
        }
        //Como se hace en todos los casos, asi evitamos redundancia
        I.waitForElement(locator, 10);
        I.click(locator);
    }

    // ==================== MÉTODOS TC011 ====================
    
    /**
     * Cambia el tamaño de la ventana del navegador a una resolución de móvil.
     */
    movilView() {
        I.resizeWindow(375, 812);
    }

    // ==================== MÉTODOS TC012 ====================
    
    /**
     * Navega a la sección de Términos y Condiciones desde el footer.
     */
    legalDocs() {
        I.click(this.selectors.TermsLink);
        I.waitForElement(this.selectors.TermsTitle)
    }
}

// Exporta una instancia de la clase para ser utilizada en los archivos de prueba.
module.exports = new marcosotoPage();