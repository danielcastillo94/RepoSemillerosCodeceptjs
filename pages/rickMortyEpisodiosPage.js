const { I } = inject();

class RickMortyEpisodiosPage {

    urls = {
        apiEpisodios:  'https://rickandmortyapi.com/api/episode',
        apiEpisodio3:  'https://rickandmortyapi.com/api/episode/3',
        apiPersonaje3: 'https://rickandmortyapi.com/api/character/3',
    };

    // ─── ESCENARIO A: Mock de la lista completa de episodios ──────────────────
    // Intercepta /api/episode y devuelve dos episodios inventados.
    // El patron NO lleva /3 ni nada al final, asi captura solo la coleccion.
    // El handler no necesita async: unicamente llama a fulfill, no espera nada.
    mockEpisodios(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de episodios', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            {
                                id: 1000,
                                name: nombre1,
                                air_date: 'Semilleros 2026',
                                episode: 'S01E01',
                                characters: [],
                                url: '',
                                created: '2026-08-23',
                            },
                            {
                                id: 1001,
                                name: nombre2,
                                air_date: 'Semilleros 2026',
                                episode: 'S01E02',
                                characters: [],
                                url: '',
                                created: '2026-08-23',
                            },
                        ],
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO B: Mock de error 503 ───────────────────────────────────────
    // El status 503 es lo que hace realista la simulacion de caida del servicio.
    // Es un escenario imposible de reproducir contra un servidor que funciona bien.
    mockError503(mensaje) {
        I.usePlaywrightTo('simular error 503', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 503,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: mensaje,
                        code: 503,
                        detalle: 'Este error fue creado con un mock para pruebas',
                    }),
                });
            });
        });
    }

    // ─── ESCENARIO C: Interceptar respuesta REAL y modificarla ────────────────
    // Llama al servidor REAL, recibe la respuesta, cambia un campo y la reenvia.
    // Aqui el handler SI debe ser async, porque usa await dos veces adentro.
    // Sin el async la funcion termina antes de resolver la promesa y el mock no se aplica.
    mockModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('**/api/episode', async route => {
                // 1. Deja pasar la peticion al servidor real y espera la respuesta
                const response = await route.fetch();
                const json     = await response.json();

                // 2. Modifica solo el nombre del primer episodio
                if (json.results && json.results.length > 0) {
                    json.results[0].name = nuevoNombre;
                }

                // 3. Reenvia la respuesta modificada al navegador
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(json),
                });
            });
        });
    }

    // ─── ESCENARIO D: Mock de un episodio especifico por ID ───────────────────
    // El patron es mas especifico, por eso /api/character/3 NO coincide
    // y esa peticion llega al servidor real sin ser interceptada.
    mockEpisodioPorId(id, nombre, fecha, codigo) {
        I.usePlaywrightTo(`mockear episodio ID ${id}`, async ({ page }) => {
            await page.route(`**/api/episode/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: id,
                        name: nombre,
                        air_date: fecha,
                        episode: codigo,
                        characters: [],
                        url: `https://rickandmortyapi.com/api/episode/${id}`,
                        created: '2026-08-23',
                    }),
                });
            });
        });
    }

    // ─── NAVEGACION ────────────────────────────────────────────────────────────
    // El mock siempre se registra ANTES de navegar: si la peticion ya salio,
    // no queda nada que interceptar.
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }

    consultarEpisodioPorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/episode/${id}`);
    }

    consultarPersonajePorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/character/${id}`);
    }

    // ─── VERIFICACIONES ────────────────────────────────────────────────────────
    verTexto(texto) {
        I.see(texto);
    }

    noVerTexto(texto) {
        I.dontSee(texto);
    }
}

module.exports = new RickMortyEpisodiosPage();
