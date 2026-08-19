const { I } = inject();

class RickMortyEpisodiosPage {
    urls = {
        home: '',
        apiepisodios: 'https://rickandmortyapi.com/api/episode',
        apiepisodio1: 'https://rickandmortyapi.com/api/episode/1',
    }
    
    mockearEpisodios(episodio1, episodio2) {
    I.usePlaywrightTo('mokear lista de episodios', async ({ page }) => {
        await page.route('https://rickandmortyapi.com/api/episode', route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    info: { count: 2, pages: 1, next: null, prev: null },
                    results: [
                        {
                            id: 1001,
                            name: episodio1,
                            air_date: "December 2, 2013",
                            episode: "S01E041",
                            characters: [
                                "https://rickandmortyapi.com/api/character/1",
                                "https://rickandmortyapi.com/api/character/2"
                            ],
                            url: "https://rickandmortyapi.com/api/episode/1",
                            created: "2017-11-10T12:56:33.798Z"
                        },
                        {
                            id: 1002,
                            name: episodio2,
                            air_date: "December 9, 2013",
                            episode: "S01E024",
                            characters: [
                                "https://rickandmortyapi.com/api/character/1",
                                "https://rickandmortyapi.com/api/character/2"
                            ],
                            url: "https://rickandmortyapi.com/api/episode/2",
                            created: "2017-11-10T12:56:33.916Z"
                        }
                    ]
                })
            });
        });
    });
}

    mockError503() {
        I.usePlaywrightTo('simular error 503', async ({ page }) => {
            await page.route('https://rickandmortyapi.com/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Error del servidor simulado',
                        code: 503,
                        mensaje: 'Servicio de episodios no disponible',
                    }),
                });
            });
        });
    }

    mockModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('https://rickandmortyapi.com/api/episode', async route => {
                const response = await route.fetch();
                const json     = await response.json();

                // 2. Modifica solo el nombre del primer personaje
                if (json.results && json.results.length > 0) {
                    json.results[0].name = nuevoNombre;
                }

                // 3. Reenvía la respuesta modificada al navegador
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(json),
                });
            });
        });
    }
    consultarAPIEpisodio() {
        I.amOnPage(this.urls.apiepisodios);
    }
    // ─── VERIFICACIONES ────────────────────────────────────────────────────────
    verEpisodio(episodio) {
        I.see(episodio);
    }

    noVerEpisodio(episodio) {
        I.dontSee(episodio);
    }

    verMensaje(texto) {
        I.see(texto);
    }

}

module.exports = new RickMortyEpisodiosPage();