const {I} = inject();
require('dotenv').config();
class StockPage {
    locator = {
        inputtalla: '//label[@for="size-picker-G-undefined1041644110-1041644156"]',
        btndisponibilidadentienda: '//button[@class="flex w-fit underline text-label-md text-base font-bold gap-3 py-3"]',
        tituloseleccion: '//h3[contains(text(),"Selecciona un estado")]',
        btncerrarlistaesatado: '//button[@class="h-6 text-carbon-500"]',
        spanopcionlista: '//span[contains(text(),"MÉXICO")]',
        spanestadoseleccionado: '//span[@class="flex-1 text-start"]',
        spandisponible: '//span[@class="whitespace-nowrap"]',
        divstock: '//div[@class="flex flex-col px-4 pb-8 pt-2.5 h-full"]',

        btnrecogertienda: '//button[@data-testid="product-configurator-delivery-selection-card-Click & Collect"]',
        btnseleccionartienda: '//button[@data-testid="product-configurator-delivery-Click & Collect-option-subselection-button"]',
        contenteleccion: '//div[@data-testid="product-configurator-delivery__store-selector-test-id"]',
        inputcp: '//input[@data-testid="search-termn-input"]',
        btnbuscarcerca: '//button[@data-testid="trigger-search-button"]',
        tiendacerca: '//div[@class="rounded border border-solid border-carbon-100"]',
        codigoproducto: '//p[@class="text-body-sm text-low-emphasis"]',
    };

    //TC023--------------------------------
    selecciontalla(){
        I.click(this.locator.inputtalla);
    }
    seleccionregion(){
        I.click(this.locator.btndisponibilidadentienda);
        I.waitForVisible(this.locator.tituloseleccion,
                        this.locator.btncerrarlistaesatado, 5
        );
    }
    verstock(){
        I.click(this.locator.spanopcionlista);
        I.waitForVisible(this.locator.divstock, 
                        this.locator.spanestadoseleccionado,
                        this.locator.spandisponible,5
        );
    }

    //TC024--------------------------------
    recogertienda(){
        I.click(this.locator.btnrecogertienda);
        
    }
    seleccionartienda(){
        I.click(this.locator.btnseleccionartienda);
        I.waitForVisible(this.locator.contenteleccion);
    }
    cp(){
        I.fillField(this.locator.inputcp, process.env.CP);
        I.click(this.locator.btnbuscarcerca);
        
    }
    tiendascercanas(){
        I.waitForElement(this.locator.tiendacerca, 5);
        I.waitForVisible(this.locator.tiendacerca, 5);
    }
    
    //TC025--------------------------------
    codigoproducto(){
        I.waitForVisible(this.locator.codigoproducto);
    }
}

module.exports = new StockPage();