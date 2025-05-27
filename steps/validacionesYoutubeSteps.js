const { I } = inject();

const verificarResultado = require("../pages/verificarResultado.js");
const CanalPage = require("../pages/canalPage.js");
const youtubeMainPage = require('../pages/youtubeMainPage.js');
const searchPage = require("../pages/searchPage.js");

// --- Otros steps que tenías (los puedes conservar si los usas) ---
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
  I.wait(5); // espera 5 segundos
});

// --- Aquí los steps que coinciden con tu feature EXACTAMENTE ---
Then('debería ver el logo de YouTube', () => {
  return youtubeMainPage.verificarLogo();
});

Then('debería ver el campo de búsqueda', () => {
  return youtubeMainPage.verificarCampoBusqueda();
});

Then('debería ver el botón de "Iniciar sesión"', () => {
  return youtubeMainPage.verificarBotonIniciarSesion();
});

Then('deberían mostrarse al menos 10 miniaturas de video', async () => {
  await youtubeMainPage.verificarMiniaturas();
});

// --- Más steps que tenías, por si los usas ---
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
