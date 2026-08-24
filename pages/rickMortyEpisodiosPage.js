const { I } = inject();

class RickMortyEpisodiosPage {

    urls = {
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
    };

    // ─── ESCENARIO A: Mock de episodios completo ──────────────────────────────
    // Intercepta /api/episode y devuelve dos episodios
    mockEpisodios() {
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
                                name: 'Episodio Semillero Alpha',
                                air_date: 'Semilleros 2026',
                                episode: 'S99E01',
                                characters: [],
                                url: '',
                                created: '2026-08-17'
                            },
                            {
                                id: 1001,
                                name: 'Episodio Semillero Beta',
                                air_date: 'Semilleros 2026',
                                episode: 'S99E02',
                                characters: [],
                                url: '',
                                created: '2026-08-17'
                            }
                        ]
                    })
                });
            });
        });
    }
    // ─── ESCENARIO B: Mock de error 503 
    // Intercepta /api/episode
    //  y devuelve un error 503.
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
    // ─── ESCENARIO C: Interceptar y modificar respuesta real ────────────────────
mockModificarReal(nuevoNombre) {
    I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
        await page.route('**/api/episode', async route => {

            // 1. Obtener la respuesta REAL del servidor
            const response = await route.fetch();

            // 2. Convertir la respuesta a JSON
            const json = await response.json();

            // 3. Modificar el nombre del primer episodio
            if (json.results && json.results.length > 0) {
                json.results[0].name = nuevoNombre;
            }

            // 4. Enviar la respuesta modificada al navegador
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(json)
            });
        });
    });
}
// ─── ESCENARIO D: Mock de episodio específico por ID ─────────────────────────
mockEpisodioPorId3() {
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
                    created: '2026-08-17'
                })
            });
        });
    });
}
    // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    
    }
    consultarPersonaje3() {
    I.amOnPage('https://rickandmortyapi.com/api/character/3');
    }

    consultarEpisodio3() {
    I.amOnPage('https://rickandmortyapi.com/api/episode/3');
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
}

module.exports = new RickMortyEpisodiosPage();