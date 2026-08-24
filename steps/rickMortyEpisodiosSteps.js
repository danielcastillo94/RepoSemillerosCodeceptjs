const rickMortyEpisodiosPage = require('../pages/rickMortyEpisodiosPage');

Given(/^el mock de episodios esta activo con "([^"]*)" y "([^"]*)"$/, (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodios(nombre1, nombre2);
});

When(/^el usuario consulta la API de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

Then(/^ve el episodio "([^"]*)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verTexto(nombre);
});

Then(/^no ve el episodio real "([^"]*)"$/, (nombre) => {
    rickMortyEpisodiosPage.noVerTexto(nombre);
});

Given(/^el mock de episodios devuelve un error 503$/, () => {
    rickMortyEpisodiosPage.mockError503();
});

Then(/^la respuesta contiene el mensaje "([^"]*)"$/, (mensaje) => {
    rickMortyEpisodiosPage.verTexto(mensaje);
});

Given(/^el mock intercepta la respuesta real y renombra el primer episodio como "([^"]*)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});

Given(/^el mock del episodio con ID (\d+) devuelve "([^"]*)", "([^"]*)" y "([^"]*)"$/, (id, nombre, airDate, codigo) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(parseInt(id), nombre, airDate, codigo);
});

When(/^el usuario consulta el personaje con ID (\d+) para validar que no es interceptado$/, (id) => {
    rickMortyEpisodiosPage.consultarEndpoint(`https://rickandmortyapi.com/api/character/${id}`);
});

When(/^el usuario consulta el episodio con ID (\d+)$/, (id) => {
    rickMortyEpisodiosPage.consultarEndpoint(`https://rickandmortyapi.com/api/episode/${id}`);
});