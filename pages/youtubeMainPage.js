const {I} = inject();
const { expect } = require("chai");

class YoutubeMainPage {
    constructor() {
        this.fields = {
          searchBar: '//input[@name="search_query"]',
          searchButton: "//yt-searchbox//button",
          filterButton: "#filter-button",
          hoyFilter: '//yt-formatted-string[text()="Hoy"]',
          uploadDates: '//div[@id="metadata-line"]//span[2]',
        };
    }

    async goToHome(){
        await I.amOnPage("/");
        I.wait(2);
    }
   
    verificarLogo() {
      I.seeElement('a#logo'); // más preciso
    }
  
    verificarCampoBusqueda() {
      I.seeElement('input#search'); // ya es correcto
    }
  
    verificarBotonIniciarSesion() {
      I.seeElement('ytd-button-renderer#sign-in-button, tp-yt-paper-button[aria-label="Iniciar sesión"]');
    }
  
    verificarMiniaturas() {
      I.seeNumberOfElements('ytd-rich-grid-media', 10);
    }  
    async searchVideo(){
        await I.waitForElement(this.fields.searchBar, 5);
        await I.fillField(this.fields.searchBar, title);
        await I.pressKey("Enter");
        await I.wait(2);
        console.log("Buscando frase:" + title);
    }

    async selectFilters(){
        await I.waitForElement(this.fields.filterButton, 5);
        await I.click(this.fields.filterButton);
    }

    async selectHoyFilter(){
        await I.waitForElement(this.fields.hoyFilter, 5);
        await I.click(this.fields.hoyFilter);
        await I.wait(2);
        console.log("Filtro de búsqueda aplicado.");
    }

    async validarVideosRecientes(){
        await I.waitForElement(this.fields.uploadDates, 5);
        const uploadDates = await I.grabTextFromAll(this.fields.uploadDates);
        const recentDatePattern = /hace \d+ horas/;
        const lastDayPattern = /hace 1 día/;

       console.log("Fechas de publicación de los videos:", uploadDates);

       const areEveryRecent = uploadDates.every(
         (date) => recentDatePattern.test(date) || lastDayPattern.test(date)
       );
       expect(areEveryRecent, "No todos los videos son recientes").to.be.true;
       console.log("Todos los videos son recientes");
    }
}

module.exports = new YoutubeMainPage();