const { I } = inject();

class RickMortyEpPage {
    urls = {
        home: 'https://rickandmortyapi.com/',
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
        apiPersonaje3: 'https://rickandmortyapi.com/api/character/3',
        apiEpisodio3: 'https://rickandmortyapi.com/api/episode/3'
    };

    // ─── ESCENARIO 1: Mock de episodios completo ───────────────────────────────
    mockEpisodios(titulo1, titulo2) {
        I.usePlaywrightTo('mockear lista de episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            {
                                "id": 101,
                                "name": titulo1,
                                "air_date": "December 2, 2013",
                                "episode": "S01E01",
                                "characters": [],
                                "url": "",
                                "created": "2026-08-18"
                            },
                            {
                                "id": 102,
                                "name": titulo2,
                                "air_date": "December 9, 2013",
                                "episode": "S01E02",
                                "characters": [],
                                "url": "",
                                "created": "2026-08-18"
                            },
                        ],
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO 2: Mock de error 503 ─────────────────────────────────────────
    mockError503() {
        I.usePlaywrightTo('simular error 503', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Servicio de episodios no disponible',
                        code: 503,
                        mensaje: 'Este error fue creado con un mock para pruebas',
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO 3: Interceptar respuesta REAL y modificarla ──────────────────
    mockModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('**/api/episode', async route => {
                // 1. Deja pasar la petición al servidor real y espera la respuesta
                const response = await route.fetch();
                const json     = await response.json();

                if (json.results && json.results.length > 0) {
                    json.results[0].name = nuevoNombre;
                }

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(json),
                });
            });
        });
    }

    // ─── ESCENARIO 4: Mock de episodio específico por ID ───────────────────────
    mockEpisodioPorId(id, nombre, fechaTransmision, numEpisodio) {
        I.usePlaywrightTo(`mockear episodio ID ${id}`, async ({ page }) => {
            await page.route(`**/api/episode/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 1, pages: 1, next: null, prev: null },
                        results: [
                            {
                                "id": id,
                                "name": nombre,
                                "air_date": fechaTransmision,
                                "episode": numEpisodio,
                                "characters": [],
                                "url": "",
                                "created": "2026-08-18"
                            }
                        ]
                    }),
                });
            });
        })
    }

    // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    consultarPersonajePorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/character/${id}`);
    }

    consultarEpisodioPorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/episode/${id}`);
    }

    // ─── VERIFICACIONES ────────────────────────────────────────────────────────
    verEpisodio(nombre) {
        I.see(nombre);
    }
    
    noVerEpisodio(nombre) {
        I.dontSee(nombre);
    }
    
    verMensaje(texto) {
        I.see(texto);
    }

    verFecha(fecha) {
        I.see(fecha);
    }

}

module.exports = new RickMortyEpPage();