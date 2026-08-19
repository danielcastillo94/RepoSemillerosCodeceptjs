const { rickMortyEpisodiosPage } = inject();

// ─── ESCENARIO 1: Mock de episodios ────────────────────────────────────────────
Given(/^el mock de episodios está activo con "(.+)" y "(.+)"$/, (titulo1, titulo2) => {
    rickMortyEpisodiosPage.mockEpisodios(titulo1, titulo2);
});

When(/^el usuario consulta la API de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

Then(/^ve el episodio "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verEpisodio(nombre);
});

Then(/^no ve el episodio real "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.noVerEpisodio(nombre);
});

// ─── ESCENARIO 2: Mock de error 503 ─────────────────────────────────────────────
Given(/^el mock de episodios devuelve un error 503$/, () => {
    rickMortyEpisodiosPage.mockError503();
});

When(/^el usuario consulta la API de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    rickMortyEpisodiosPage.verMensaje(mensaje);
});

// ─── ESCENARIO 3: Interceptar y modificar respuesta real ────────────────────────
Given(/^el mock intercepta la respuesta real y renombra el primer episodio como "(.+)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});

When(/^el usuario consulta la API de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

Then(/^ve el nombre "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verEpisodio(nombre);
});

// ─── ESCENARIO 4: Mock de episodio por ID ──────────────────────────────────────
Given(/^el mock del episodio con ID (\d+) es interceptado y devuelve datos de nombre: "(.+)", air_date: "(.+)" y código de episodio "(.+)" personalizados$/, (id, nombre, fechaTransmision, numEpisodio) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(parseInt(id), nombre, fechaTransmision, numEpisodio);
});

When(/^el usuario consulta el personaje con ID (\d+) con datos reales$/, (id) => {
    rickMortyEpisodiosPage.consultarPersonajePorId(parseInt(id));
});

When(/^el usuario consulta el episodio con ID (\d+)$/, (id) => {
    rickMortyEpisodiosPage.consultarEpisodioPorId(parseInt(id));
});

Then(/^ve el nombre del episodio "(.+)" en la respuesta$/, (nombre) => {
    rickMortyEpisodiosPage.verEpisodio(nombre);
});

Then(/^ve el air_date "(.+)" en la respuesta$/, (fecha) => {
    rickMortyEpisodiosPage.verFecha(fecha);
});

Then(/^ve código de episodio "(.+)" en la respuesta$/, (mensaje) => {
    rickMortyEpisodiosPage.verMensaje(mensaje);
});