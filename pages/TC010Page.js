const { I } = inject();

class TC010Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        footer: 'div#telcel-footer-contenedor',
        accesos: 'div.telcel-footer-bloque-2 ul li a',
        redes: 'ul.contenido-redes-sociales li a'
    }

    urls = {
        telcel: 'https://www.telcel.com/'
    }

    linkRedes = {
        twitter: 'https://twitter.com/telcel',
        facebook: 'https://web.facebook.com/Telcel?_rdc=1&_rdr',
        youtube: 'https://www.youtube.com/user/Telceloficial',
        holatelcel : 'https://holatelcel.com/'

    }

    paginaprincipal(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    seccionFooter(){
        I.scrollTo(this.elementos.footer);
    }

    async datosAccesos(accesosLinks){
        const accesoN = await I.grabTextFromAll(this.elementos.accesos);
        const accesoL = await I.grabAttributeFromAll(this.elementos.accesos,'href');
        
        accesosLinks.forEach((link, i) => {
            if(link.nombreboton === accesoN[i] && link.url === accesoL[i]){
                I.say(`Acceso ${accesoN[i]}: Enlaces correctos`);
            }else{
                I.say(`Acceso ${accesoN[i]}: Error`);
            }
        });
    }

    async datosRedes(redesLinks){
        const redN = await I.grabAttributeFromAll(this.elementos.redes, 'data-nombreboton');
        const redL = await I.grabAttributeFromAll(this.elementos.redes,'href');
        
        redesLinks.forEach((link, i) => {
        const nombreCoincide = link.nombreboton === redN[i];
        const urlCoincide = link.url === redL[i];

        if(link.nombreboton === redN[i] && link.url === redL[i]){
            I.say(`Red ${redN[i]}: Enlaces correctos`);
        }else{
            I.say(`Red ${redN[i]}: Error`);
        }
        });
    }
}

module.exports = new TC010Page();