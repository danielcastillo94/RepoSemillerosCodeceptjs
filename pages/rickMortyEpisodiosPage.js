const { I } = inject();

class RickMortyEpisodiosPage {

    urls = {
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
        apiPersonaje3: 'https://rickandmortyapi.com/api/character/3',
        apiEpisodio3: 'https://rickandmortyapi.com/api/episode/3',
    };

    // Mock de lista completa de episodios
    mockEpisodios(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: {
                            count: 2,
                            pages: 1,
                            next: null,
                            prev: null
                        },
                        results: [
                            {
                                id: 1000,
                                name: nombre1,
                                air_date: 'Semilleros 2026',
                                episode: 'S99E01',
                                characters: [],
                                url: '',
                                created: '2026-08-18'
                            },
                            {
                                id: 1001,
                                name: nombre2,
                                air_date: 'Semilleros 2026',
                                episode: 'S99E02',
                                characters: [],
                                url: '',
                                created: '2026-08-18'
                            }
                        ]
                    })
                });
            });
        });
    }

    // Mock de error 503
    mockError503() {
        I.usePlaywrightTo('simular error 503 en episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Servicio de episodios no disponible'
                    })
                });
            });
        });
    }

    // Intercepta la respuesta real y modifica el primer episodio
    mockModificarRespuestaReal(nuevoNombre) {
        I.usePlaywrightTo('modificar respuesta real de episodios', async ({ page }) => {
            await page.route('**/api/episode', async route => {
                const response = await route.fetch();
                const json = await response.json();

                if (json.results && json.results.length > 0) {
                    json.results[0].name = nuevoNombre;
                }

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(json)
                });
            });
        });
    }

    // Mock únicamente del episodio con ID 3
    mockEpisodio3() {
        I.usePlaywrightTo('mockear episodio 3', async ({ page }) => {
            await page.route('**/api/episode/3', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: 3,
                        name: 'Prueba de Automatización',
                        air_date: 'Semilleros 2026',
                        episode: 'S99E99',
                        characters: [],
                        url: 'https://rickandmortyapi.com/api/episode/3',
                        created: '2026-08-18'
                    })
                });
            });
        });
    }

    // Navega a la lista completa de episodios
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    // Navega al personaje 3 real
    consultarPersonaje3() {
        I.amOnPage(this.urls.apiPersonaje3);
    }

    // Navega al episodio 3 mockeado
    consultarEpisodio3() {
        I.amOnPage(this.urls.apiEpisodio3);
    }

    // Verifica que un texto aparezca
    verEpisodio(nombre) {
        I.see(nombre);
    }

    // Verifica que un texto NO aparezca
    noVerEpisodio(nombre) {
        I.dontSee(nombre);
    }
}

module.exports = new RickMortyEpisodiosPage();