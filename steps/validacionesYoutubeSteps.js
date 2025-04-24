const { I } = inject();

const verificarResultado = require("../pages/verificarResultado.js");
const CanalPage = require("../pages/canalPage.js");
const youtubeMainPage = require('../pages/youtubeMainPage.js');
const searchPage = require("../pages/searchPage.js");

Then("Verifico que al menos un resultado contenga {string}", (phrase) => {
  verificarResultado.verificarVideoConTexto(phrase);
});

Then("Verifico que el primer resultado muestre una miniatura visible", () => {
  verificarResultado.verificarMiniatura();
});

Then("Verifico que el primer resultado muestre un título visible", () => {
  verificarResultado.verificarTitulo();
});

Then(
  "Verifico que el primer resultado contenga una duración en formato mm:ss",
  async () => {
    await verificarResultado.verificarDuracion();
  }
);

When("hago clic en el nombre del canal del primer resultado", () => {
  CanalPage.irAlCanalDelPrimerVideo();
});

When("voy a la seccion videos", () => {
  CanalPage.pestanaVideos();
});

Then("debería ver el nombre del canal", () => {
  CanalPage.validarNombreDelCanal();
});

Then("debería ver la pestaña de Videos", () => {
  CanalPage.validarPestanaVideos();
});

Then("debería ver al menos un video con miniatura y título", () => {
  CanalPage.validarVideosVisibles();
});


Given("abro la página de YouTube", async () => {
  await youtubeMainPage.goToHome();
});

Given("realizo una búsqueda con el texto {string}", async (phrase) => {
  await youtubeMainPage.searchVideo(phrase);
});
Then("abro los filtros de búsqueda", async () => {
  await youtubeMainPage.selectFilters();
});
Then("selecciono el filtro Hoy", async () => {
  await youtubeMainPage.selectHoyFilter();
});

Then("visualizo videos con fecha de publicación reciente", async () => {
  await youtubeMainPage.validarVideosRecientes();
});


Given("abro la página de YouTube", async () => {
  await youtubeMainPage.goToHome();
  I.wait(5); // ← espera de 5 segundos
});

Then("debería ver: {string}", async (elemento) => {
  
      if (elemento === 'Logo de YouTube') {
        await youtubeMainPage.verificarLogo();
      }else if(elemento === 'Campo de búsqueda') {
        await youtubeMainPage.verificarCampoBusqueda();
      }else if (elemento === 'Botón de Iniciar sesión') {
        await youtubeMainPage.verificarBotonIniciarSesion();
      }else if (elemento === 'Al menos 10 miniaturas de video') {
        await youtubeMainPage.verificarMiniaturas();
      }else{
        throw new Error(`Elemento no reconocido: ${elemento}`);
      }
    });

Then("verifico que el primer resultado contiene un campo con la duración",
  async () => {
    await searchPage.validateDurationSpan();
  }
);
Then("verifico que dicho campo está oculto", async () => {
  await searchPage.validateHiddenDuration();
});
Then("verifico que la duración tiene un formato válido", async () => {
  await searchPage.validateDurationFormat();
});
