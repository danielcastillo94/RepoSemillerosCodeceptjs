const { I } = inject();
const youtubeMainPage = require('../pages/youtubeMainPage.js');

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
    }
  });