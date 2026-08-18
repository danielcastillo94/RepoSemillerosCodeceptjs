

const { rickMortyEpisodiosPage } = inject();

Given(/^el mock de episodios está activo$/, () => {

    rickMortyEpisodiosPage.mockEpisodios();

});

When(/^el usuario consulta la API de episodios$/, () => {

    rickMortyEpisodiosPage.consultarAPIEpisodios();

});

Then(/^ve el episodio "(.+)" en la respuesta$/, (nombre) => {

    rickMortyEpisodiosPage.verEpisodio(nombre);

});

Then(/^no ve el episodio real "(.+)"$/, (nombre) => {

    rickMortyEpisodiosPage.noVerEpisodio(nombre);

});
Given(/^el mock de episodios devuelve un error 503$/, () => {

    rickMortyEpisodiosPage.mockError503();

});
Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {

    rickMortyEpisodiosPage.verMensaje(mensaje);

});
// ─── ESCENARIO C: Modificar respuesta real ───────────────────────────────────

Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/, (nuevoNombre) => {

    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);

});
// ─── ESCENARIO D: Mock de episodio específico ────────────────────────────────

Given(/^el mock del episodio con ID 3 está activo$/, () => {

    rickMortyEpisodiosPage.mockEpisodioPorId3();

});

When(/^el usuario consulta el personaje con ID 3$/, () => {

    rickMortyEpisodiosPage.consultarPersonaje3();

});

When(/^el usuario consulta el episodio con ID 3$/, () => {

    rickMortyEpisodiosPage.consultarEpisodio3();

});

Then(/^ve el nombre del episodio "(.+)"$/, (nombre) => {

    rickMortyEpisodiosPage.verEpisodio(nombre);

});

Then(/^ve la fecha "(.+)"$/, (fecha) => {

    rickMortyEpisodiosPage.verMensaje(fecha);

});

Then(/^ve el código de episodio "(.+)"$/, (codigo) => {

    rickMortyEpisodiosPage.verMensaje(codigo);

});