const { I } = inject();
const { container } = require('codeceptjs');
const helper = container.helpers('MiHelperYoutube');

const fields = {
  searchBar: '//input[@name="search_query"]',
  thumbnails: '//ytd-video-renderer//a[@id="thumbnail"]',
  videoTitle: 'ytd-watch-metadata h1 yt-formatted-string',
  sidebarRecommended: 'ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer',
};

Given("abro la página de YouTube", async () => {
  I.amOnPage('/');
  I.wait(3);
});

When("busco el video {string}", async (texto) => {
  I.waitForElement(fields.searchBar, 10);
  I.fillField(fields.searchBar, texto);
  I.pressKey('Enter');
  I.waitForElement(fields.thumbnails, 10);
});

When("entro al primer video de los resultados", async () => {
  I.waitForElement(fields.thumbnails, 10);
  I.click(fields.thumbnails);
  I.wait(5); 
});

Then("debería ver el título {string}", async (tituloEsperado) => {
  await helper.esperarYValidarTexto(fields.videoTitle, tituloEsperado);
});

Then("deberían mostrarse al menos 5 videos recomendados en la barra lateral", async () => {
  await helper.validarCantidadDeElementos(fields.sidebarRecommended, 5);
});
