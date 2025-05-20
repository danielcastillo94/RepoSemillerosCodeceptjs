const { I } = inject();

class YoutubeMainPage {
  constructor() {
    console.log("✅ youtubeMainPage.js CARGADO");

    this.fields = {
      logo: 'a#logo',
      searchBar: '//input[@name="search_query"]',
      loginButton: "//a[@aria-label='Acceder']",
      miniatures: "//ytd-thumbnail[@class='style-scope ytd-video-renderer']"
    };

    console.log("🎯 CAMPOS DEFINIDOS:", this.fields);
  }

  goToHome() {
    I.amOnPage('/');
    I.wait(3);
  }
}

module.exports = new YoutubeMainPage();
