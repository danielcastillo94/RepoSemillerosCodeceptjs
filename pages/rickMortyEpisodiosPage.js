const { I } = inject();
class rickMortyEpisodiosPage {
    urls = {
        home: 'https://rickandmortyapi.com/',
        apiPersonajes: 'https://rickandmortyapi.com/api/character',
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
        apiEpisodio3: 'https://rickandmortyapi.com/api/episode/3',
        apiPersonaje3: 'https://rickandmortyapi.com/api/character/3',
    };
    fields = {
        h1: 'h1',
    };

    //Ejercicio1.
    mockEpisodios(Episodio1, Episodio2) {
        I.usePlaywrightTo('mockear lista de personajes', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            {
                                id: 1000,
                                name: Episodio1,
                                status: 'Alive',
                                species: 'Human',
                                type: 'Test Semillero',
                                gender: 'Male',
                                origin: { name: 'Semilleros HITSS', url: '' },
                                location: { name: 'Semilleros HITSS', url: '' },
                                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                                episode: ["https://rickandmortyapi.com/api/character/1",
                                    "https://rickandmortyapi.com/api/character/2"],
                                url: "https://rickandmortyapi.com/api/episode/1",
                                created: '2026-08-17',
                            },
                            {
                                id: 1001,
                                name: Episodio2,
                                status: 'Alive',
                                species: 'Human',
                                type: 'Automatizador',
                                gender: 'Male',
                                origin: { name: 'Dimension Playwright', url: '' },
                                location: { name: 'Dimension Playwright', url: '' },
                                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                                episode: ["https://rickandmortyapi.com/api/character/1",
                                    "https://rickandmortyapi.com/api/character/2"],
                                url: "https://rickandmortyapi.com/api/episode/2",
                                created: '2026-08-17',
                            },
                        ],
                    }),
                });
            });
        });
    }

    //Escenario B.
    mockEpisodiosError503(mensajeError) {
        I.usePlaywrightTo('mockear error 503 en episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: mensajeError
                    })
                });
            });
        });
    }
    //Escenario C.
    modificarPrimerEpisodio(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('**/api/episode', async route => {
                // 1. Obtener la respuesta real del servidor
                const response = await route.fetch();
                // 2. Leer el JSON original
                const json = await response.json();

                // 3. Modificar el campo name del primer episodio
                if (json.results && json.results.length > 0) {
                    json.results[0].name = nuevoNombre;
                }

                // 4. Reenviar la respuesta modificada
                await route.fulfill({
                    response,
                    contentType: 'application/json',
                    body: JSON.stringify(json),
                });
            });
        });
    }

    //Escenario D.
    mockEpisodioPorId(id, name, airDate, episodeCode) {
        I.usePlaywrightTo(`mockear episodio por ID ${id}`, async ({ page }) => {
            await page.route(`**/api/episode/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: Number(id),
                        name: name,
                        air_date: airDate,
                        episode: episodeCode,
                        characters: [],
                        url: `https://rickandmortyapi.com/api/episode/${id}`,
                        created: '2026-08-17T00:00:00.000Z'
                    })
                });
            });
        });
    }
}
module.exports = new rickMortyEpisodiosPage();