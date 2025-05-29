const { I } = inject();
const { URL_YOUTUBE, MOCK_YOUTUBE } = require("./mockedData/youtubeIsrael.ts");

let mockAplicado = false;

Before(() => {
  mockAplicado = false;
});

Given("Estoy en youtube", () => {
  I.amOnPage("/");
});

When("Hago una búsqueda de {string}", (texto) => {
  I.waitForElement('//input[@name="search_query"]', 5);
  I.fillField('//input[@name="search_query"]', texto);
  I.pressKey("Enter");

  if (!mockAplicado) {
    mockAplicado = true;
    I.mockRoute(URL_YOUTUBE, (route) => {
      return route.fulfill({
        status: 200,
        json: MOCK_YOUTUBE,
      });
    });
  }
  I.wait(2);
});

When("Hago otra búsqueda de {string}", (texto) => {
  I.fillField('//input[@name="search_query"]', texto);
  I.pressKey("Enter");
  I.wait(2);
});

Then("visualizo videos de Musica", () => {
  I.see("Xavi, Manuel Turizo - En Privado (Official Video)");
  I.see("Grupo Marca Registrada x Víctor Valverde - El Mayor de los Ranas [En Vivo]");
});
