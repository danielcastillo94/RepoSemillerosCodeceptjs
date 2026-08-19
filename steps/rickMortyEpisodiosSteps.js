const { RickMortyEpisodiosPage } = inject();

// 
Given(/^el mock de episodios está activo con "(.+)" y "(.+)"$/, (episodio1, episodio2) => {
    RickMortyEpisodiosPage.mockearEpisodios(episodio1, episodio2);
});

When(/^el usuario consulta la API de episodios$/, () => {
    RickMortyEpisodiosPage.consultarAPIEpisodio();
});

Then(/^ve el episodio "(.+)" en la respuesta$/, (episodio) => {
    RickMortyEpisodiosPage.verEpisodio(episodio);
});

Then(/^no ve el episodio real "(.+)"$/, (episodio) => {
    RickMortyEpisodiosPage.noVerEpisodio(episodio);
});

// ─── EJEMPLO 2: Mock de error 503 ─────────────────────────────────────────────
Given(/^el mock de episodios devuelve un error 503$/, () => {
    RickMortyEpisodiosPage.mockError503();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    RickMortyEpisodiosPage.verMensaje(mensaje);
});

// ─── EJEMPLO 5: Interceptar y modificar respuesta real ────────────────────────
Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/, (nuevoNombre) => {
    RickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});
