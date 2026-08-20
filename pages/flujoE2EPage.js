const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class flujoE2EPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        bolsa:'//span[normalize-space()="shopping_bag"]',
        // Busqueda
        resultadoBusqueda: '[data-testid="plp-page-heading-title-title"]',
        mensajeSinResultados: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
        //Categorias
        submenuCategorias: '[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]',
        opcionProductoVideojuegos: '//h3[normalize-space()="Juegos XBOX"]',
        videojuegos:'//span[@data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label" and normalize-space()="Videojuegos"]',
        //Filtros
        botonOrdenar: '[data-testid="dropdown-sorting-button"]',
        opcionMenorPrecio: '//li[@role="option"][normalize-space(.)="Menor precio"]',
        opcionDestacados: '//li[@role="option" and normalize-space(.)="Destacados"]',
        opcionMayorPrecio: '//li[@role="option" and normalize-space(.)="Mayor precio"]',
        opcionNovedades: '//li[@role="option" and normalize-space(.)="Novedades"]',
        preciosProductos: '[data-testid$="-price"]',
        textoOrdenMenorPrecio: '[data-testid="dropdown-sorting-button"] span.whitespace-nowrap',
        tituloPrecios: '[data-testid="at-text-min-input"]',
        precioMinimo: '[data-testid="at-text-min-input"]',
        precioMaximo: '[data-testid="at-text-max-input"]',
        botonFiltrarPrecio: '[data-testid="chevron-right-icon-btn"]',
        marcas: '//span[normalize-space(.)="Marcas"]',
        mostrarMas:'[data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group-show-all-items-btn"]',
        talla: '//span[normalize-space(.)="Talla"]',
        color: '//span[normalize-space(.)="Color"]',
        //Producto
        productoResultado: '[data-testid$="-image-slider-image-1"]',
        tituloProducto: 'h1.text-body-2xl',
        precioProducto: '[data-testid$="-configurator-price"]',
        caracteristicasProducto: '[data-testid="ml-list-item-specs"]',
        codigoProducto: 'p.text-body-sm.text-low-emphasis',
        galeriaProducto: '[data-testid$="-gallery__gallery-0__image"]',
        // Login
        correoElectronico:'#username',
        contrasena:'#password',
        botonIniciarSesion:'//button[@data-action-button-primary="true" and normalize-space()="Iniciar sesión"]',
        crearCuenta:'//a[normalize-space()="Crear cuenta"]',
        // Registro
        botonCrearCuenta:'//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]'
    };

    //Metodos Flujo E2E

}

module.exports = new flujoE2EPage();