const {I} = inject();

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

}

module.exports = new StockPage();