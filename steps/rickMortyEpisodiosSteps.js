const rickMortyEpisodiosPage = require('../pages/rickMortyEpisodiosPage');

Given(/^que el usuario va a consultar la API de episodios de Rick and Morty$/, () => {
    rickMortyEpisodiosPage.prepararNavegador();
});

Given(/^se activa un mock que devuelve los episodios "([^"]*)" y "([^"]*)" en "\/api\/episode"$/, (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodiosBasicos(nombre1, nombre2);
});

Given(/^se activa un mock que devuelve un error 503 en "\/api\/episode" con el mensaje "([^"]*)"$/, (mensaje) => {
    rickMortyEpisodiosPage.mockError503(mensaje);
});

Given(/^se intercepta la respuesta real de "\/api\/episode" para modificar el nombre del primer episodio por "([^"]*)"$/, (nombreNuevo) => {
    rickMortyEpisodiosPage.interceptarYModificarPrimerEpisodio(nombreNuevo);
});

Given(/^se activa un mock para el episodio con ID "([^"]*)" con nombre "([^"]*)", fecha "([^"]*)" y código "([^"]*)"$/, (id, nombre, fecha, codigo) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(nombre, fecha, codigo);
});

When(/^el usuario navega a la API de episodios$/, () => {
    rickMortyEpisodiosPage.navegarAListaEpisodios();
});

When(/^el usuario navega al detalle del personaje con ID "([^"]*)"$/, (id) => {
    rickMortyEpisodiosPage.navegarAPersonajeTres();
});

When(/^el usuario navega al detalle del episodio con ID "([^"]*)"$/, (id) => {
    rickMortyEpisodiosPage.navegarAEpisodioTres();
});

Then(/^se muestra en la respuesta el episodio "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.validarTextoEnRespuesta(texto);
});

Then(/^no se muestra en la respuesta el episodio "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.validarTextoNoEnRespuesta(texto);
});

Then(/^se muestra en la respuesta el mensaje "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.validarTextoEnRespuesta(texto);
});

Then(/^se muestra en la respuesta la fecha "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.validarTextoEnRespuesta(texto);
});

Then(/^se muestra en la respuesta el código de episodio "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.validarTextoEnRespuesta(texto);
});

Then(/^la respuesta del personaje no está interceptada$/, () => {
    rickMortyEpisodiosPage.validarPersonajeNoInterceptado();
});