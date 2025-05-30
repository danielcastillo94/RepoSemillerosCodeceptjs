
const { container } = require('codeceptjs');

Feature('Mock persistente en búsqueda de YouTube');

let cachedResponse = null;

Scenario('Interceptar y reutilizar resultados de búsqueda en YouTube', async ({ I }) => {
  const { page } = container.helpers('Playwright');

  await page.route('**/youtubei/v1/search**', async (route, request) => {
    if (cachedResponse) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(cachedResponse),
      });
    }

    const response = await route.fetch();
    const body = await response.json();
    cachedResponse = body; 
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(body),
    });
  });

 
  await I.amOnPage('https://www.youtube.com/');
  I.waitForElement({ xpath: '//*[@id="center"]/yt-searchbox/div[1]/form/input' }, 10);
  I.fillField({ xpath: '//*[@id="center"]/yt-searchbox/div[1]/form/input' }, 'daft punk');
  I.pressKey('Enter');
  I.wait(5);
  I.say('✅ Primera búsqueda realizada ok');

  I.fillField({ xpath: '//*[@id="center"]/yt-searchbox/div[1]/form/input' }, 'rusia');
  I.pressKey('Enter');
  I.wait(5);
  I.say('✅ Segunda búsqueda con mismo mock (contenido cacheado)');
});
