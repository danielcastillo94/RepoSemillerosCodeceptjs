const { I } = inject();

Given("abro la página de YouTube", () => {
  I.abrirYoutube();
});

When("busco el video {string}", (texto) => {
  I.buscarVideo(texto);
});

When("entro al primer video de los resultados", () => {
  I.entrarAlPrimerVideo();
});

Then("debería ver el título {string}", async (tituloEsperado) => {
  await I.validarTituloEsperado(tituloEsperado);
});

Then("deberían mostrarse al menos 5 videos recomendados en la barra lateral", async () => {
  await I.validarVideosRecomendados();
});
