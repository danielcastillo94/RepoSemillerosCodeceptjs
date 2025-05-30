const { I } = inject();
const { url, res, IMG } = require('../env.vars');
Given("navego al la página de youtube", async () => {
   I.amOnPage("https://www.youtube.com");
});

When("busco el video {string}", async (query) => {
  I.waitForElement("[name='search_query']", 10);
  I.usePuppeteerTo("mockear youtube navigation", async ({ page }) => {
    await page.setRequestInterception(true);

    page.on("request", (request) => {
      if (request.url().includes("search?prettyPrint=")) {
        console.log("Intercepting request to:", request.url());
        request.respond({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(res),
        });
      } else {
        request.continue();
      }
    });
  });

  I.fillField("[name='search_query']", query);
  I.pressKey("Enter");
});


Then(
  "valido que secambiaron las miniaturas de los videos",
  async () => {
    const locator = `//img[@src="${IMG}"]`;
    I.waitForElement(locator, 20);
    I.say("Validando que las miniaturas de los videos se han cambiado");
  }
);
