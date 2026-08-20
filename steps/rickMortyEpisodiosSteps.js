
const {  rickMortyEpisodiosPage } = inject();

// ─── EJEMPLO 1: Mock de episodios ────────────────────────────────────────────
Given(/^el mock de espisodios está activo con "(.+)" y "(.+)"$/, (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodio(nombre1, nombre2);
});

When(/^el usuario consulta la API de epsiodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

Then(/^ve el espisodio "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verEpisodio(nombre);
});

Then(/^no ve el espisode real "(.+)"$/, (nombre) => {
    rickMortyEpisodiosPage.noVerEpisodio(nombre);
});

// ─── EJEMPLO 2: Mock de error 503 ─────────────────────────────────────────────
Given(/^el mock de episode devuelve un error 503$/, () => {
    rickMortyEpisodiosPage.mockEpisodioError500();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    rickMortyEpisodiosPage.verMensajeEpisodio(mensaje);
});

// ─── EJEMPLO 3: Interceptar y modificar respuesta real del nombre del Episodio────────────────────────
Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockEpisodioModificarReal(nuevoNombre);
});
// ─── EJEMPLO 4: Mock de espisodio por ID ──────────────────────────────────────
Given(/^el mock del espisodio con ID (\d+) devuelve "(.+)" con fecha "(.+)" y espisodio "(.+)"$/, (id, nombre, fecha, espisodio) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(parseInt(id), nombre, fecha, espisodio);
});

When(/^el usuario consulta el episodio con ID (\d+)$/, (id) => {
    rickMortyEpisodiosPage.consultarEpisodioPorId(parseInt(id));
});

Then(/^ve el nombre "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verEpisodio(nombre);
});

Then(/^ve la fecha "(.+)" en la respuesta$/, (fecha) => {
    rickMortyEpisodiosPage.verFecha(fecha);
});
Then(/^ve el espísodio "(.+)" en la respuesta$/, (espisodio) => {
    rickMortyEpisodiosPage.verEpisodio(espisodio);
});

