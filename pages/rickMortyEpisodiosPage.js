const { I } = inject();

class RickMortyEpisodiosPage {

    urls = {
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
        apiEpisodio3: 'https://rickandmortyapi.com/api/episode/3',
        apiPersonaje3: 'https://rickandmortyapi.com/api/character/3',
    };

    // ─── ESCENARIO A: Mock completo de episodios ──────────────────────────────
    // Intercepta la lista completa de episodios y devuelve dos episodios falsos.
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
                                created: '2026-08-19'
                            },
                            {
                                id: 1001,
                                name: nombre2,
                                air_date: 'Semilleros 2026',
                                episode: 'S99E02',
                                characters: [],
                                url: '',
                                created: '2026-08-19'
                            }
                        ]
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO B: Error 503 ────────────────────────────────────────────────
    // Intercepta la API y devuelve un error de servicio no disponible.
    mockError503() {
        I.usePlaywrightTo('simular error 503', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Servicio de episodios no disponible'
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO C: Modificar respuesta real ────────────────────────────────
    // Obtiene la respuesta real del servidor y modifica únicamente el nombre
    // del primer episodio antes de reenviarla al navegador.
    mockModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('**/api/episode', async route => {

                const response = await route.fetch();
                const json = await response.json();

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

    // ─── ESCENARIO D: Mock episodio específico por ID ─────────────────────────
    // Intercepta únicamente /api/episode/3.
    mockEpisodioPorId() {
        I.usePlaywrightTo('mockear episodio ID 3', async ({ page }) => {
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
                        created: '2026-08-19'
                    }),
                });
            });
        });
    }

    // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
    consultarEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    consultarEpisodio3() {
        I.amOnPage(this.urls.apiEpisodio3);
    }

    consultarPersonaje3() {
        I.amOnPage(this.urls.apiPersonaje3);
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

verAirDate(fecha) {
    I.see(fecha);
}

verCodigoEpisodio(codigo) {
    I.see(codigo);
}

verPersonajeReal() {
    I.see('Summer Smith');
    this.consultarEpisodio3();
}
}

module.exports = new RickMortyEpisodiosPage();