const { I } = inject();

class RickMortyEpisodiosPage {

    urls = {
        apiEpisodios: 'https://rickandmortyapi.com/api/episode',
    };

    // Métodos

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
                        prev: null,
                    },

                    results: [
                        {
                            id: 1000,
                            name: nombre1,
                            air_date: 'Semilleros 2026',
                            episode: 'S99E01',
                            characters: [],
                            url: '',
                            created: '2026-08-18',
                        },
                        {
                            id: 1001,
                            name: nombre2,
                            air_date: 'Semilleros 2026',
                            episode: 'S99E02',
                            characters: [],
                            url: '',
                            created: '2026-08-18',
                        },
                    ],
                }),
            });
        });
    });
    }

    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    verEpisodio(nombre) {
        I.see(nombre);
    }

    noVerEpisodio(nombre) {
        I.dontSee(nombre);
    }

    mockError503(){
    I.usePlaywrightTo('simular error 503 en episodios', async ({ page }) => {
        await page.route('**/api/episode', route => {
            route.fulfill({
                status: 503,
                contentType: 'application/json',
                body: JSON.stringify({
                    error: 'Servicio de episodios no disponible',
                }),
            });
        });
    });
    }

    verMensaje(texto){
        I.see(texto);
    }


    mockModificarReal(nuevoNombre) {
    I.usePlaywrightTo(
        'interceptar y modificar respuesta real',
        async ({ page }) => {

            await page.route(
                '**/api/episode',
                async route => {

                    // 1. Obtener respuesta REAL
                    const response = await route.fetch();

                    // 2. Convertir respuesta a JSON
                    const json = await response.json();

                    // 3. Modificar el primer episodio
                    if (json.results && json.results.length > 0) {
                        json.results[0].name = nuevoNombre;
                    }

                    // 4. Enviar respuesta modificada
                    await route.fulfill({
                        status: 200,
                        contentType: 'application/json',
                        body: JSON.stringify(json),
                    });

                }
            );

        }
    );
    }

    mockEpisodioPorId(id, nombre, airDate, codigo) {

    I.usePlaywrightTo(
        `mockear episodio ID ${id}`,
        async ({ page }) => {

            await page.route(
                `**/api/episode/${id}`,
                route => {

                    route.fulfill({
                        status: 200,
                        contentType: 'application/json',

                        body: JSON.stringify({
                            id: id,
                            name: nombre,
                            air_date: airDate,
                            episode: codigo,
                            characters: [],
                            url: `https://rickandmortyapi.com/api/episode/${id}`,
                            created: '2026-08-18',
                        }),
                    });
                }
            );
        }
    );
    }

    consultarPersonajePorId(id) {
    I.amOnPage(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    }

    consultarEpisodioPorId(id) {
    I.amOnPage(
        `https://rickandmortyapi.com/api/episode/${id}`
    );
    }

}

module.exports = new RickMortyEpisodiosPage();