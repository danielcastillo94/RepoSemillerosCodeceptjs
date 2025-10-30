const { I } = inject();

class home_page {
    elements = {
        logotipoImg: 'img[data-menusup="Logo"]',
        logotipoLink: 'a.navbar-brand.gluo-logo-telcel',
        menuPrincipal: 'a#telcel-menu-principal-boton',
        bannerInicial: 'div.bannerprincipal',
        slides: 'div.bannerprincipal .swiper-slide',
        nextBtn: '.swiper-button-next',
        prevBtn: '.swiper-button-prev',
        pagination: '.swiper-pagination-bullet'
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
    }

    esperarCarga() {
        I.waitForElement(this.elements.logotipoImg, 10);
        I.waitForElement(this.elements.menuPrincipal, 5);
        I.waitForElement(this.elements.bannerInicial, 5);
    }

    // Se valida que el logotipo este correcto
    verificarLogotipo(logotipo) {
        I.seeElement(this.elements.logotipoImg);                                                        // Logo visible
        I.seeElement(`${this.elements.logotipoImg}[src="${logotipo.src}"][alt="${logotipo.alt}"]`);     //Verifica la imagen y el texto alternativo
        I.seeElement(`${this.elements.logotipoLink}[href="${logotipo.href}"]`);                         // Verifica el Link al dar clic al logo
    }

    // En esta parte se valida que el menú principal de la página sea visible
    verificarMenuPrincipal() {
        I.seeElement(this.elements.menuPrincipal);  
    }

    // Se valida el Banner y los elementos que lo componen
    verificarBannerInicial(){
        I.seeElement(this.elements.bannerInicial);  

        // Controles de navegación visibles
        I.seeElement(this.elements.nextBtn);
        I.seeElement(this.elements.prevBtn);
        I.seeElement(this.elements.pagination);

        // Contar slides
        I.grabNumberOfVisibleElements({ xpath: `${this.elements.bannerInicial}//div[contains(@class,'swiper-slide')]` }).then(numSlides => {
            for (let i = 1; i <= numSlides; i++) {
                const slideXPath = `(${this.elements.bannerInicial}//div[contains(@class,'swiper-slide')])[${i}]`;
                I.seeElement({ xpath: `${slideXPath}//a[@href]` });
                I.seeElement({ xpath: `${slideXPath}//div[contains(@class,'isDesktopBannerPrincipal')]//img[contains(@src,'-bne')]` });
                I.seeElement({ xpath: `${slideXPath}//div[contains(@class,'isMobileBannerPrincipal')]//img[contains(@src,'-bnm')]` });
            }
        });
    }
}

module.exports = new home_page();