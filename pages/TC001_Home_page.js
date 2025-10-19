const {I} = inject();

class home_page{

    elements={
        logo: 'img.js-responsive-image',
        menu: '//*[@id="pagina-contenido-d670c30d2d"]/div[1]/div/div/div[1]/header/div/div[2]/div',
        banner: '//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]',
        movil:'//*[@id="level-1"]/li[1]/a',
        ppr: '//*[@id="level-1"]/li[1]/div/div[1]/ul/li[3]/a'
    }

   goToTelcel() {
    I.amOnPage("/");
   }
   
   seeElementsLogo(){
    I.seeElement(this.elements.logo);
   }
   seeElementsMenu(){
    I.seeElement(this.elements.menu);
   }
   seeElementsBanner(){
    I.seeElement(this.elements.banner);
   }

   clickElementMenu(acces){
    const selector= `//a[@id="telcel-menu-principal-boton" and contains(text(), "${acces}")]`;
    I.moveCursorTo(selector);
   }
   seeElementsMenuMovil(){
    I.seeElement(this.elements.movil);
   }
   seeElementsMenuPPR(){
    I.seeElement(this.elements.ppr);
   }
}

   module.exports = new home_page();
