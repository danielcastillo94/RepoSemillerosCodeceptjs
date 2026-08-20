const { I } = inject();

class RickMortyEpisodios {

    urls = {
        home:         'https://rickandmortyapi.com/',
        apiEpisodios:'https://rickandmortyapi.com/api/episode',
        apiEpisodios1:'https://rickandmortyapi.com/api/episode/3',
    };

     // ─── EJEMPLO 1: Mock de personajes completo ───────────────────────────────
    // Intercepta /api/character y devuelve episodios inventados.
    // El servidor real NUNCA recibe la petición.
    mockEpisodio(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de Episodios', async ({ page }) => {
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
                                air_date: "Junio 2, 2024",
                                episode: "Prueba Espisodio 1",
                                characters: [] ,
                                url: '',
                                created: '18/08/2026' 
                            },
                            {
                                id: 1001,
                                name: nombre2,
                                air_date: "Octubre 2, 2026",
                                episode: "Prueba Espisodio 2",
                                characters: [] ,
                                url: '',
                                created: '01/08/2026' 
                            },
                        ],
                    }),
                });
            });
        });
    }

     // ─── EJEMPLO 2: Mock de error 500 ─────────────────────────────────────────
    // Intercepta /api/character y devuelve un error 500.
    // Útil para probar cómo reacciona el sistema ante fallos del servidor.
    mockEpisodioError500() {
        I.usePlaywrightTo('simular error 500 en Episodio', async ({ page }) => {
            await page.route('**/api/episode', route => {
                route.fulfill({
                    status: 500,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Servicio de episodios no disponible',
                        code: 500,
                        mensaje: 'Este error fue creado con un mock para pruebas en Episodios',
                    }),
                });
            });
        });
    }

       // ─── EJEMPLO 3: Interceptar y modificar la respuesta real del nombre del episodio ──────────────────
    // Llama al servidor REAL, recibe la respuesta, modifica un campo y la reenvía.
    // Esto permite cambiar solo un dato sin fabricar toda la respuesta.
    mockEpisodioModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real del nombre del espisodio', async ({ page }) => {
            await page.route('**/api/episode', async route => {
                // 1. Deja pasar la petición al servidor real y espera la respuesta
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
                I.wait(10)
            });
        });
    }
    // ─── EJEMPLO 4: Mock de Espisodio específico por ID ───────────────────────
    // Intercepta solo el endpoint de un Episosdio concreto: /api/character/3
    // Los demás endpoints NO son interceptados.
    mockEpisodioPorId(id, nombre, fecha, espisodio ) {
        I.usePlaywrightTo(`mockear Episosdio ID ${id}`, async ({ page }) => {
            await page.route(`**/api/episode/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                                id: id,
                                name: nombre,
                                air_date: fecha,
                                episode: espisodio,
                                characters: [] ,
                                url: '',
                                created: '18/08/2026',
                    }),
                });
            });
        });
    }


     // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
    consultarAPIEpisodios() {
        I.amOnPage(this.urls.apiEpisodios);
    }
    consultarEpisodioPorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/episode/${id}`);
    }

    // ─── VERIFICACIONES ────────────────────────────────────────────────────────
    verEpisodio(nombre) {
        I.see(nombre);
        I.wait(10);
    }
    noVerEpisodio(nombre) {
        I.dontSee(nombre);
        I.wait(10);
        
    }
    verMensajeEpisodio(mensaje) {
        I.see(mensaje);
        I.wait(10)
    }
    verFecha(fecha) {
        I.see(fecha);
    }
}

module.exports = new RickMortyEpisodios();


