const { I } = inject();
const busquedaVideo = require("../pages/busquedaVideo.js");
const verificarResultado = require("../pages/verificarResultado.js");
const CanalPage = require("../pages/canalPage.js");
const youtubeMainPage = require('../pages/youtubeMainPage.js');
const searchPage = require("../pages/searchPage.js");

Given("Estoy en la página principal de YouTube", () => {
  //YoutubeHomePage.home
  I.amOnPage("/");
  I.wait(2);
});

When(
  "Escribo Falling In Reverse y presiono Enter en la barra de búsqueda",
  () => {
    busquedaVideo.fillBar();
  }
);

Then("Verifico que al menos un resultado contenga Falling In Reverse", () => {
  verificarResultado.verificarVideoConTexto("Falling In Reverse");
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

Given("busco el video {string}", (video) => {
  CanalPage.buscarVideo(video);
});

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

Then("debería ver:", async (tabla) => {
    const filas = tabla.rows;
  
    for (let fila of filas) {
      const [elemento, estado] = fila.cells;
  
      if (elemento === 'Logo de YouTube' && estado === 'visible') {
        await youtubeMainPage.verificarLogo();
      }
  
      if (elemento === 'Campo de búsqueda' && estado === 'visible') {
        await youtubeMainPage.verificarCampoBusqueda();
      }
  
      if (elemento === 'Botón de "Iniciar sesión"' && estado === 'disponible') {
        await youtubeMainPage.verificarBotonIniciarSesion();
      }
  
      if (elemento === 'Al menos 10 miniaturas de video' && estado === 'visibles') {
        await youtubeMainPage.verificarMiniaturas();
      }

    Then("debería ver miniaturas con borde o sombra", async () => {
        await youtubeMainPage.verificarEstiloMiniaturas();
    });
    
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
