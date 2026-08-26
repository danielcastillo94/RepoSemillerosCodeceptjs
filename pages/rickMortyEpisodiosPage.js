const { I } = inject();

module.exports = {

    fields: {
        listaEpisodios: '**/api/episode',
        episodioTres: '**/api/episode/3',
        urlListaEpisodios: 'https://rickandmortyapi.com/api/episode',
        urlEpisodioTres: 'https://rickandmortyapi.com/api/episode/3',
        urlPersonajeTres: 'https://rickandmortyapi.com/api/character/3'
    },

    prepararNavegador() {
        I.amOnPage('about:blank');
    },

    mockEpisodiosBasicos(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de episodios', async ({ page }) => {
            await page.route(this.fields.listaEpisodios, (route) => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            {
                                id: 9001,
                                name: nombre1,
                                air_date: 'Semilleros 2026',
                                episode: 'S99E01',
                                characters: [],
                                url: '',
                                created: new Date().toISOString()
                            },
                            {
                                id: 9002,
                                name: nombre2,
                                air_date: 'Semilleros 2026',
                                episode: 'S99E02',
                                characters: [],
                                url: '',
                                created: new Date().toISOString()
                            }
                        ]
                    })
                });
            });
        });
    },

    mockError503(mensaje) {
        I.usePlaywrightTo('mockear error 503 en episodios', async ({ page }) => {
            await page.route(this.fields.listaEpisodios, (route) => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({ error: mensaje })
                });
            });
        });
    },

    interceptarYModificarPrimerEpisodio(nombreNuevo) {
        I.usePlaywrightTo('interceptar y modificar el primer episodio', async ({ page }) => {
            await page.route(this.fields.listaEpisodios, async (route) => {
                const response = await route.fetch();
                const json = await response.json();
                json.results[0].name = nombreNuevo;
                await route.fulfill({
                    response,
                    body: JSON.stringify(json)
                });
            });
        });
    },

    mockEpisodioPorId(nombre, airDate, codigoEpisodio) {
        I.usePlaywrightTo('mockear episodio por ID', async ({ page }) => {
            await page.route(this.fields.episodioTres, (route) => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: 3,
                        name: nombre,
                        air_date: airDate,
                        episode: codigoEpisodio,
                        characters: [],
                        url: this.fields.urlEpisodioTres,
                        created: new Date().toISOString()
                    })
                });
            });
        });
    },

    navegarAListaEpisodios() {
        I.amOnPage(this.fields.urlListaEpisodios);
        I.wait(1);
    },

    navegarAEpisodioTres() {
        I.amOnPage(this.fields.urlEpisodioTres);
        I.wait(1);
    },

    navegarAPersonajeTres() {
        I.amOnPage(this.fields.urlPersonajeTres);
        I.wait(1);
    },

    validarTextoEnRespuesta(texto) {
        I.see(texto);
    },

    validarTextoNoEnRespuesta(texto) {
        I.dontSee(texto);
    },

    validarPersonajeNoInterceptado() {
        I.see('species');
    }
}