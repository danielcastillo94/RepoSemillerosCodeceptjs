const { I } = inject();
const { URL_YOUTUBE, MOCK_CRISTIANO } = require('../mockedData/cristiano.ts');

Given("Estoy en youtube", () => {
  I.amOnPage("/");
});

When("Hago una busqueda con mockeo de {string}", (terminoBusqueda) => {
  I.waitForElement('//input[@name="search_query"]', 5);
  I.mockRoute(URL_YOUTUBE, (route) => {
    return route.fulfill({
      status: 200,
      json: MOCK_CRISTIANO,
    });
  });

  I.fillField('//input[@name="search_query"]', terminoBusqueda);
  I.pressKey("Enter");
  I.wait(5); 
});

Then("visualizo videos de cristiano", () => {
  I.seeElement('//yt-formatted-string[contains(translate(text(), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "cristiano")]');
});
