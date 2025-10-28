const { I } = inject();
class TC002planes_page {

    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Movil: locate('a').withAttr({ 'data-menuprin': 'Movil' }),
        SubRenta: locate('a').withAttr({ 'data-evento': 'clicGeneralMenu', 'data-submenu': 'Plan de renta' }),
        Planes: locate('span[itemprop="name"]').withText('Plan de Renta Telcel')

    };


   visitPage() {
       I.amOnPage('/')
      
    }


    async MenuPrincipal() {

         if (I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      I.click('//a[@id="acepto-cookies"]');
    }
        await I.moveCursorTo('#telcel-menu-principal-boton');
        await I.wait(3);

        //esprar que sea visible el elemento Movil 
        await I.waitForVisible(this.fields.Movil, 10);
        await I.seeElement(this.fields.Movil);
        await I.moveCursorTo(this.fields.Movil,);
        I.wait(3);


    }
    async SubmenuPlanes() {

        //esperar a ser visible plan renta
        await I.waitForVisible(this.fields.SubRenta, 10);
        await I.seeElement(this.fields.SubRenta);
        await I.moveCursorTo(this.fields.SubRenta, 5);
        I.wait(3);
    }
    async Validar() {

        I.click(this.fields.SubRenta);
        //verificar que se visualice la seccion planes
        await I.waitForElement(this.fields.Planes, 10);
        await I.seeElement(this.fields.Planes, 5);
        I.wait(5);


    }
}

module.exports = new TC002planes_page();

