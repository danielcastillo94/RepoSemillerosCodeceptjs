const { rickMortyEpisodiosPage } = inject();

// 
Given(/^el mock de episodios está activo con "(.+)" y "(.+)"$/, (episodio1, episodio2) => {
    rickMortyEpisodiosPage.mockEpisodios(episodio1, episodio2);
});

When(/^el usuario consulta la API de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodio();
});

Then(/^ve el episodio "(.+)" en la respuesta$/, (episodio) => {
    rickMortyEpisodiosPage.verEpisodio(episodio);
});

Then(/^no ve el episodio real "(.+)"$/, (episodio) => {
    rickMortyEpisodiosPage.noVerEpisodio(episodio);
});

// ─── EJEMPLO 2: Mock de error 500 ─────────────────────────────────────────────
Given(/^el mock de episodios devuelve un error 503$/, () => {
    rickMortyEpisodiosPage.mockError503();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    rickMortyEpisodiosPage.verMensaje(mensaje);
});

// ─── EJEMPLO 5: Interceptar y modificar respuesta real ────────────────────────
Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});
