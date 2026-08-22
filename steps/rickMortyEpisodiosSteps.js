const { I, rickMortyEpisodiosPage } = inject();

Given(
    'que mockeo los episodios {string} y {string}',
    (nombre1, nombre2) => {
        rickMortyEpisodiosPage.mockEpisodios(nombre1, nombre2);
    }
);

Given(
    'que mockeo un error 503 en la API de episodios',
    () => {
        rickMortyEpisodiosPage.mockError503();
    }
);

Given(
    'que intercepto y modifico la respuesta real de episodios con {string}',
    (nombre) => {
        rickMortyEpisodiosPage.mockModificarReal(nombre);
    }
);

Given(
    'que mockeo el episodio con ID 3',
    () => {
        rickMortyEpisodiosPage.mockEpisodioPorId();
    }
);

When(
    'consulto la API de episodios',
    () => {
        rickMortyEpisodiosPage.consultarEpisodios();
    }
);

When(
    'consulto el personaje con ID 3',
    () => {
        rickMortyEpisodiosPage.consultarPersonaje3();
    }
);

When(
    'consulto el personaje con ID 3 y después consulto el episodio con ID 3',
    () => {
        rickMortyEpisodiosPage.consultarPersonaje3();
        rickMortyEpisodiosPage.consultarEpisodio3();
    }
);

Then(
    'debo ver el episodio {string}',
    (nombre) => {
        rickMortyEpisodiosPage.verEpisodio(nombre);
    }
);

Then(
    'no debo ver el episodio {string}',
    (nombre) => {
        rickMortyEpisodiosPage.noVerEpisodio(nombre);
    }
);

Then(
    'debo ver el mensaje {string}',
    (mensaje) => {
        rickMortyEpisodiosPage.verMensaje(mensaje);
    }
);

Then(
    'debo ver la fecha {string}',
    (fecha) => {
        rickMortyEpisodiosPage.verAirDate(fecha);
    }
);

Then(
    'debo ver el código de episodio {string}',
    (codigo) => {
        rickMortyEpisodiosPage.verCodigoEpisodio(codigo);
    }
);

Then(
    'debo ver el personaje real',
    () => {
        rickMortyEpisodiosPage.verPersonajeReal();
    }
);