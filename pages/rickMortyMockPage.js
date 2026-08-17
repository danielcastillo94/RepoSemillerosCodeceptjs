const { I } = inject();

class RickMortyMockPage {

    urls = {
        home:         'https://rickandmortyapi.com/',
        apiPersonajes:'https://rickandmortyapi.com/api/character',
        apiPersonaje1:'https://rickandmortyapi.com/api/character/1',
    };

    fields = {
        h1: 'h1',
    };

    // ─── EJEMPLO 1: Mock de personajes completo ───────────────────────────────
    // Intercepta /api/character y devuelve personajes inventados.
    // El servidor real NUNCA recibe la petición.
    mockPersonajes(nombre1, nombre2) {
        I.usePlaywrightTo('mockear lista de personajes', async ({ page }) => {
            await page.route('**/api/character', route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        info: { count: 2, pages: 1, next: null, prev: null },
                        results: [
                            {
                                id: 1000,
                                name: nombre1,
                                status: 'Alive',
                                species: 'Human',
                                type: 'Test Semillero',
                                gender: 'Male',
                                origin:   { name: 'Semilleros HITSS', url: '' },
                                location: { name: 'Semilleros HITSS', url: '' },
                                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                                episode: [],
                                url: '',
                                created: '2026-08-17',
                            },
                            {
                                id: 1001,
                                name: nombre2,
                                status: 'Alive',
                                species: 'Human',
                                type: 'Automatizador',
                                gender: 'Male',
                                origin:   { name: 'Dimension Playwright', url: '' },
                                location: { name: 'Dimension Playwright', url: '' },
                                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                                episode: [],
                                url: '',
                                created: '2026-08-17',
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
    mockError500() {
        I.usePlaywrightTo('simular error 500', async ({ page }) => {
            await page.route('**/api/character', route => {
                route.fulfill({
                    status: 500,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        error: 'Error del servidor simulado',
                        code: 500,
                        mensaje: 'Este error fue creado con un mock para pruebas',
                    }),
                });
            });
        });
    }

    // ─── EJEMPLO 3: Mock de título vía DOM (inyección) ────────────────────────
    // Navega a la página real y luego modifica el DOM directamente con evaluate().
    // Útil para probar componentes de UI en estados específicos sin tocar el backend.
    visitarHome() {
        I.amOnPage(this.urls.home);
    }

    inyectarTitulo(nuevoTitulo) {
        I.usePlaywrightTo('inyectar título en DOM', async ({ page }) => {
            await page.evaluate((titulo) => {
                // Cambia el título del tab del navegador
                document.title = titulo;
                // Cambia el H1 visible en la página
                const h1 = document.querySelector('h1');
                if (h1) h1.textContent = titulo;
            }, nuevoTitulo);
        });
    }

    // ─── EJEMPLO 4: Mock de personaje específico por ID ───────────────────────
    // Intercepta solo el endpoint de un personaje concreto: /api/character/1
    // Los demás endpoints NO son interceptados.
    mockPersonajePorId(id, nombre, especie) {
        I.usePlaywrightTo(`mockear personaje ID ${id}`, async ({ page }) => {
            await page.route(`**/api/character/${id}`, route => {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        id: id,
                        name: nombre,
                        status: 'Alive',
                        species: especie,
                        type: 'Mockeado',
                        gender: 'Unknown',
                        origin:   { name: 'Semilleros HITSS', url: '' },
                        location: { name: 'Semilleros HITSS', url: '' },
                        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                        episode: [],
                        url: `https://rickandmortyapi.com/api/character/${id}`,
                        created: '2026-08-17',
                    }),
                });
            });
        });
    }

    // ─── EJEMPLO 5: Interceptar respuesta REAL y modificarla ──────────────────
    // Llama al servidor REAL, recibe la respuesta, modifica un campo y la reenvía.
    // Esto permite cambiar solo un dato sin fabricar toda la respuesta.
    mockModificarReal(nuevoNombre) {
        I.usePlaywrightTo('interceptar y modificar respuesta real', async ({ page }) => {
            await page.route('**/api/character', async route => {
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
            });
        });
    }

    // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
    consultarAPIPersonajes() {
        I.amOnPage(this.urls.apiPersonajes);
    }

    consultarPersonajePorId(id) {
        I.amOnPage(`https://rickandmortyapi.com/api/character/${id}`);
    }

    // ─── VERIFICACIONES ────────────────────────────────────────────────────────
    verPersonaje(nombre) {
        I.see(nombre);
    }

    noVerPersonaje(nombre) {
        I.dontSee(nombre);
    }

    verMensaje(texto) {
        I.see(texto);
    }

    verTituloTab(texto) {
        I.seeInTitle(texto);
    }

    verEncabezado(texto) {
        I.see(texto, this.fields.h1);
    }
}

module.exports = new RickMortyMockPage();
