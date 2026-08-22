const { I } = inject();

class filterPage  {
    urls = {
        categoria: 'https://www.liverpool.com.mx/tienda/camisas/catst23578552'
    };

    fields = {
        cajaFiltros: '//button[@data-testid="dropdown-sorting-button"]',
        txtDestacado: '//li[@role="option" and text()="Destacados"]',
        txtMenorPrecio: '//li[@role="option" and text()="Menor precio"]',
        precioBajo: '//*[@id="plp-page-card-product-list"]/a[2]//span[contains(@class, "text-price-primary")]/span[1]',
        indices: '//*[@id="main-content"]/section/div[contains(@class, "container") and contains(@class, "xl:grid-cols-[320px_1fr]")]/section[contains(@class, "w-full")]/div[contains(@class, "py-5")]/div/div[contains(@class, "justify-center")]/nav/div[contains(@class, "gap-x-1")]'
    };

    categoria() {
        I.amOnPage(this.urls.categoria)
    }

    filtrado() {
        I.click(this.fields.cajaFiltros);
        I.waitForVisible(this.fields.txtDestacado,5);
        I.click(this.fields.txtMenorPrecio)

    }

    validarFiltro() {
        I.scrollTo(this.fields.indices);

    }


}

module.exports = new filterPage();