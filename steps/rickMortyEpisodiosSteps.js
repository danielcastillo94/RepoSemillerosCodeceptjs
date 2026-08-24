const { rickMortyEpisodiosPage } = inject();

// GIVEN - se registran los mocks antes de cualquier navegacion ────────────────

Given(/^el servicio de episodios devuelve los episodios "([^"]*)" y "([^"]*)"$/, (nombre1, nombre2) => {
    rickMortyEpisodiosPage.mockEpisodios(nombre1, nombre2);
});

Given(/^el servicio de episodios falla con el mensaje "([^"]*)"$/, (mensaje) => {
    rickMortyEpisodiosPage.mockError503(mensaje);
});

Given(/^el primer episodio real se renombra como "([^"]*)"$/, (nuevoNombre) => {
    rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);
});

Given(/^el episodio con ID 3 devuelve "([^"]*)", "([^"]*)" y "([^"]*)"$/, (nombre, fecha, codigo) => {
    rickMortyEpisodiosPage.mockEpisodioPorId(3, nombre, fecha, codigo);
});

// WHEN - navegacion ───────────────────────────────────────────────────────────

When(/^el usuario consulta la lista de episodios$/, () => {
    rickMortyEpisodiosPage.consultarAPIEpisodios();
});

When(/^el usuario consulta el episodio con ID 3$/, () => {
    rickMortyEpisodiosPage.consultarEpisodioPorId(3);
});

When(/^el usuario consulta el personaje con ID 3$/, () => {
    rickMortyEpisodiosPage.consultarPersonajePorId(3);
});

// THEN - verificaciones parametrizadas, reutilizables por los cuatro escenarios ─

Then(/^el usuario ve el texto "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.verTexto(texto);
});

Then(/^el usuario no ve el texto "([^"]*)"$/, (texto) => {
    rickMortyEpisodiosPage.noVerTexto(texto);
});
