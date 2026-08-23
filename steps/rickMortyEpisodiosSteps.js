const { rickMortyEpisodiosPage, rickMortyMockPage } = inject();

// ESCENARIO A
Given(/^el mock de episodios está activo con "(.+)" y "(.+)"$/, (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodios(nombre1, nombre2);
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

// ESCENARIO B
Given(/^el mock de episodios devuelve un error 503$/, () => {
    rickMortyEpisodiosPage.mockError503();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    rickMortyEpisodiosPage.verMensaje(mensaje);
});

// ESCENARIO C
Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});

// ESCENARIO D
Given(/^el mock del episodio con ID (\d+) devuelve "(.+)" con fecha "(.+)" y código "(.+)"$/, (id, nombre, fecha, codigo) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(
        parseInt(id),
        nombre,
        fecha,
        codigo
    );
});

When(/^el usuario consulta el episodio con ID (\d+)$/, (id) => {
    rickMortyEpisodiosPage.consultarEpisodioPorId(parseInt(id));
});

Then(/^ve la fecha "(.+)" en la respuesta$/, (fecha) => {
    rickMortyEpisodiosPage.verFecha(fecha);
});

Then(/^ve el código de episodio "(.+)" en la respuesta$/, (codigo) => {
    rickMortyEpisodiosPage.verCodigoEpisodio(codigo);
});
