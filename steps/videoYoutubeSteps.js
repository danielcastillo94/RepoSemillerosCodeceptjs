const { I } = inject();
const youtubeMainPage = require('../pages/youtubeVideoMainPage.js');

Given("abro la página de YouTube", async () => {
  await youtubeMainPage.goToHome();
});

When("busco el video {string}", async (texto) => {
  await youtubeMainPage.buscarVideo(texto);
});

When("entro al primer video de los resultados", async () => {
    await youtubeMainPage.seleccionarPrimerVideo();
  });
  
Then("debería ver el título {string}", async (tituloEsperado) => {
  await youtubeMainPage.verificarTituloVideo(tituloEsperado);
});

Then("deberían mostrarse al menos 5 videos recomendados en la barra lateral", async () => {
  await youtubeMainPage.verificarVideosRecomendados();
});
