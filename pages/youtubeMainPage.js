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
          loginButton: "//a[@aria-label='Acceder']",
          minitures: "//ytd-thumbnail[@class='style-scope ytd-video-renderer']",
        };
    }

    goToHome(){
        I.amOnPage("/");
        I.wait(2);
    }
   
    verificarLogo() {
      I.seeElement('a#logo'); // más preciso
    }
  
    verificarCampoBusqueda() {
     I.seeElement(this.fields.searchBar); // ya es correcto
    }
  
    verificarBotonIniciarSesion() {
      I.seeElement(this.fields.loginButton);
    }
  
    async verificarMiniaturas() {
      const count = await I.grabNumberOfVisibleElements(this.fields.minitures);

      expect(count).to.be.at.least(10, "No hay suficientes miniaturas de video visibles");

      I.say(`Hay ${count} miniaturas de video visibles.`);
    }  
    searchVideo(phrase){
        I.waitForElement(this.fields.searchBar, 5);
        I.fillField(this.fields.searchBar, phrase);
        I.pressKey("Enter");
        I.wait(2);
        I.say(`Buscando frase: ${phrase}`);
    }

    selectFilters(){
        I.waitForElement(this.fields.filterButton, 5);
        I.click(this.fields.filterButton);
    }

    selectHoyFilter(){
        I.waitForElement(this.fields.hoyFilter, 5);
        I.click(this.fields.hoyFilter);
        I.wait(2);
        I.say("Filtro de búsqueda aplicado.");
    }

    async validarVideosRecientes(){
        I.waitForElement(this.fields.uploadDates, 5);
        const uploadDates = await I.grabTextFromAll(this.fields.uploadDates);
        const recentDatePattern = /^(?:Transmitido )?hace \d+ horas?/;
        const lastDayPattern = /^(?:Transmitido )?hace 1 día/;

        I.say(`Fechas de publicación de los videos: ${uploadDates}`);
        const areEveryRecent = uploadDates.every(
         (date) => recentDatePattern.test(date) || lastDayPattern.test(date)
        );
        expect(areEveryRecent, "No todos los videos son recientes").to.be.true;
        I.say("Todos los videos son recientes");
    }
}

module.exports = new YoutubeMainPage();