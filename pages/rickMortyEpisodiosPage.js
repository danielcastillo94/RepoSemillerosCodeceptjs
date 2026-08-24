const { I } = inject();

class RickMortyEpisodiosPage {
    urls = {
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
    };

    // --- ESCENARIO A ---
    mockEpisodios(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            { id: 1, name: nombre1, air_date: 'December 2, 2013', episode: 'S01E01' },
                            { id: 2, name: nombre2, air_date: 'December 9, 2013', episode: 'S01E02' }
                        ]
                    })
                });
            });
        });
    }

    // --- ESCENARIO B ---
    mockError503() {
        I.usePlaywrightTo('simular error 503', async ({ page }) => {
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

    // --- ESCENARIO C ---
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
                    body: JSON.stringify(json)
                });
            });
        });
    }

    // --- ESCENARIO D ---
    mockEpisodioPorId(id, nombre, airDate, codigo) {
        I.usePlaywrightTo(`mockear episodio ID ${id}`, async ({ page }) => {
            await page.route(`**/api/episode/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: id,
                        name: nombre,
                        air_date: airDate,
                        episode: codigo
                    })
                });
            });
        });
    }

    // --- NAVEGACIÓN Y VALIDACIONES ---
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    consultarEndpoint(url) {
        I.amOnPage(url);
    }

    verTexto(texto) {
        I.see(texto);
    }

    noVerTexto(texto) {
        I.dontSee(texto);
    }
}

module.exports = new RickMortyEpisodiosPage();