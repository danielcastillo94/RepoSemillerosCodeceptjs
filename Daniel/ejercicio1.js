// ejercicio 1
Feature('YouTube search');

Scenario('search something on YouTube', async ({ I }) => {
  I.amOnPage('/');
  I.fillField('[placeholder="Buscar"]', "playwritght tutorial");
  I.click('[aria-label="Search"]');

  I.wait(5);
 I.see("Playwright");
});

Feature('Reproducir un tutorial de CodeceptJS');

Scenario('search something on YouTube', async ({ I }) => {

  I.amOnPage('https://www.youtube.com/results?search_query=codeceptjs+tutorial');

  
  I.waitForElement('ytd-video-renderer', 20);

  
  I.Click('ytd-video-renderer >> nth=0');

 
  I.waitForElement('video', 20);

  I.wait(10); 
});
// ejercicio 2



