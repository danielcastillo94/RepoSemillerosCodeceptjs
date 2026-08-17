const { I, rickMortyEpisodiosPage } = inject();

// Given / Dado
Given('el mock de episodios devuelve {string} y {string}', (Episodio1, Episodio2) => {
    rickMortyEpisodiosPage.mockEpisodios(Episodio1, Episodio2);
});

// When / Cuando
When('el usuario consulta la API de episodios', () => {
    I.amOnPage(rickMortyEpisodiosPage.urls.apiEpisodios);
});

// Then / Entonces - Verificaciones
Then('la respuesta contiene {string}', (nombreEpisodio) => {
    I.see(nombreEpisodio);
});

Then('la respuesta no contiene {string}', (nombreEpisodio) => {
    I.dontSee(nombreEpisodio);
});

//Escenario B.
// Given / Dado
Given('el mock de episodios devuelve un error 503 con el mensaje {string}', (mensajeError) => {
    rickMortyEpisodiosPage.mockEpisodiosError503(mensajeError);
});

// When / Cuando
When('el usuario consulta la API de episodios', () => {
    I.amOnPage(rickMortyEpisodiosPage.urls.apiEpisodios);
});

// Then / Entonces
Then('la respuesta contiene {string}', (mensaje) => {
    I.see(mensaje);
});

//Escenario C.
// Given / Dado
Given('el sistema intercepta y modifica el primer episodio con el nombre {string}', (nuevoNombre) => {
    rickMortyEpisodiosPage.modificarPrimerEpisodio(nuevoNombre);
});

// When / Cuando
When('el usuario consulta la API de episodios', () => {
    I.amOnPage(rickMortyEpisodiosPage.urls.apiEpisodios);
});

// Then / Entonces
Then('la respuesta contiene {string}', (nombreModificado) => {
    I.see(nombreModificado);
});

//Escenario D.
// Given / Dado
Given('el mock para el episodio {int} devuelve el nombre {string}, air_date {string} y episode {string}', (id, name, airDate, episodeCode) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(id, name, airDate, episodeCode);
});

// When / Cuando
When('el usuario navega a la URL {string}', (url) => {
    I.amOnPage(url);
});

// Then & And / Entonces y Y
Then('la respuesta contiene {string}', (textoEsperado) => {
    I.see(textoEsperado);
});