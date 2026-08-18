const rickMortyEpisodiosPage = require('../pages/rickMortyEpisodiosPage');

Given('activo un mock de episodios con datos inventados', () => {
    rickMortyEpisodiosPage.mockEpisodios(
        'Episodio Semillero Alpha',
        'Episodio Semillero Beta'
    );
});

Given('activo un mock de error 503 para episodios', () => {
    rickMortyEpisodiosPage.mockError503();
});

Given('intercepto la respuesta real de episodios', () => {
    rickMortyEpisodiosPage.mockModificarRespuestaReal(
        'Episodio de Alberto'
    );
});

Given('activo un mock para el episodio 3', () => {
    rickMortyEpisodiosPage.mockEpisodio3();
});

When('navego al endpoint de episodios', () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

When('navego al endpoint del personaje 3', () => {
    rickMortyEpisodiosPage.consultarPersonaje3();
});

When('navego al endpoint del episodio 3', () => {
    rickMortyEpisodiosPage.consultarEpisodio3();
});

Then('debo ver {string}', (texto) => {
    rickMortyEpisodiosPage.verEpisodio(texto);
});

Then('no debo ver {string}', (texto) => {
    rickMortyEpisodiosPage.noVerEpisodio(texto);
});