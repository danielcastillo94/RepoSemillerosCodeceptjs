Feature('login');

Scenario('test something',  ({ I }) => {
    I.amOnPage("/")
    I.fillField('[aria-label="Buscar"]', "HOLA MUNDO");
    I.wait(3);
    I.pressKey("Enter");
    I.wait(5);

});



Feature('Buscar videos en YouTube');

Scenario('Buscar un tutorial de Playwright', async ({ I }) => {
  I.amOnPage('https://www.youtube.com');
  I.waitForElement('input[name="search_query"]', 10);
  I.fillField('input[name="search_query"]', 'Playwright tutorial');
  
  I.pressKey('Enter');
  
  I.waitForElement('ytd-video-renderer', 10);
  I.see('Playwright', 'ytd-video-renderer');
});






Feature('Reproducir un video en YouTube');

Scenario('Reproducir un tutorial de CodeceptJS', async ({ I }) => {
  I.amOnPage('https://www.youtube.com/results?search_query=codeceptjs+tutorial');  
  I.waitForElement('ytd-video-renderer', 15);
  I.click('ytd-video-renderer:nth-of-type(1)');
  I.wait(5);
  I.seeElement('.html5-video-player'); 
  I.wait(5);
});


