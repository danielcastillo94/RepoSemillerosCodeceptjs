const {I} = inject();

class ReviewsPage {
    url = {
        urlplayeraelejida: 'https://www.liverpool.com.mx/tienda/pdp/playera-levi-s-cuello-redondo-para-hombre/1041644110',
    };
    
    locator = {
        enlaceproducto: '//a[@data-testid="1041644110-card-card-link"]',
        comenatarios: '//span[contains(text(),"Opiniones del artículo")]',
        btnmascoment: '//button[@data-testid="more-comments-btn"]',
        btnordenar: '//div[@class="w-full lg:w-[38%] xl:w-[30%]"]',
        contentlist: '//div[@class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper css-d1xm6m"]',
        elementlist: '//li[@data-value="highestRating"]',
        img: '//img[@data-testid="pdp-1041644110-gallery__gallery-0__image__image"]',
        numeroimg: '//span[@data-testid="pdp-1041644110-gallery-details__counter"]',
        btnlupa: '//button[@data-testid="pdp-1041644110-gallery-details__zoom-in-btn"]',
        btncerrarimg: '//button[@data-testid="pdp-1041644110-gallery-details__close-btn-mobile"]',
        img3: '//button[@aria-label="Playera cuello redondo para hombre 3"]',
    };

    //TC026--------------------
    reseñas(){
        I.scrollTo(this.locator.btnmascoment);
        I.click(this.locator.btnmascoment);
        I.scrollTo(this.locator.btnmascoment);
    }

    //TC027--------------------
    ordenaropinion(){
        I.scrollTo(this.locator.comenatarios);
        I.click(this.locator.btnordenar)
        I.waitForElement(this.locator.elementlist, 10);
        I.click(this.locator.elementlist)
    }

    //TC028--------------------
    imagenreview(){
        I.click(this.locator.img);
        I.waitForVisible(this.locator.numeroimg,
                        this.locator.btnlupa,
                        this.locator.btncerrarimg, 5
        );
    }
    review(){
        I.waitForElement(this.locator.img, 5); //tiempo de espera para cargar las imagenes
        I.click(this.locator.img3);
    }
}

module.exports = new ReviewsPage();
