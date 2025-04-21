const youtubeMainPage = require('../pages/youtubeMainPage');

Given("abro la página de YouTube", async () => {
    await youtubeMainPage.goToHome();
});

Given("realicé una búsqueda de videos", async () => {
    await youtubeMainPage.searchVideo();
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

