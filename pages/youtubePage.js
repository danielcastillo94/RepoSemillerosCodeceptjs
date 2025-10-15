const { I } = inject();

class youtubePage {
  fields = {
    searchBar: '[name="search_query"]',
  };

  login() {
    I.amOnPage("https://www.youtube.com/");
  }

  Buscarenyoutube() {
    I.fillField(this.fields.searchBar, "Gherkin");
    I.pressKey("Enter");
  }

  Verresultados() {
    I.waitForElement('//yt-formatted-string[text()="QUÉ ES GHERKIN"]', 30);
    I.seeElement('//yt-formatted-string[text()="QUÉ ES GHERKIN"]');
  }
}

module.exports = new youtubePage();
