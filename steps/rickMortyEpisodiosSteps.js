const { rickMortyEpisodiosPage } = inject();

// Escenario A
Given(
  /^el mock de episodios está activo con los episodios "(.+)" y "(.+)"$/,
  (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodios(nombre1, nombre2);
  },
);

When(/^el usuario navega en la API de episodios$/, () => {
  rickMortyEpisodiosPage.navegarEnAPIEpisodios();
});

Then(/^ve el episodio "(.+)" en la respuesta$/, (nombre) => {
  rickMortyEpisodiosPage.verTextoEnRespuesta(nombre);
});

Then(/^no ve el episodio real "(.+)" en la respuesta$/, (nombre) => {
  rickMortyEpisodiosPage.noVerTextoEnRespuesta(nombre);
});

// Escenario B
Given(
  /^el mock de episodios devuelve un error 503 con el mensaje "(.+)"$/,
  (mensaje) => {
    rickMortyEpisodiosPage.mockError503(mensaje);
  },
);

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
  rickMortyEpisodiosPage.verTextoEnRespuesta(mensaje);
});

// Escenario C
Given(
  /^la respuesta real de la API es interceptada y el primer episodio es renombrado como "(.+)"$/,
  (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
  },
);

When(/^el usuario navega en la API de episodios con el id=(\d+)$/, (id) => {
  rickMortyEpisodiosPage.navegarEnAPIEpisodiosId(id);
});

Then(/^ve el nombre "(.+)" en la respuesta$/, (nombre) => {
  rickMortyEpisodiosPage.verTextoEnRespuesta(nombre);
});

// Escenario D
Given(
  /^el mock del episodio con ID 3 en la API devuelve el nombre "(.+)", air_date "(.+)" y episode "(.+)"$/,
  (name, airDate, episode) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(name, airDate, episode);
  },
);

When(/^el usuario navega en API de personajes con el id=(\d+)$/, (id) => {
  rickMortyEpisodiosPage.navegarEnAPIPersonajesId(id);
});

Then(/^ve el air_date "(.+)" en la respuesta$/, (airDate) => {
  rickMortyEpisodiosPage.verTextoEnRespuesta(airDate);
});

Then(/^ve el código de episodio "(.+)" en la respuesta$/, (episode) => {
  rickMortyEpisodiosPage.verTextoEnRespuesta(episode);
});
