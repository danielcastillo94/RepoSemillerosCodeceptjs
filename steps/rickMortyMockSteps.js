const { rickMortyMockPage } = inject();

// ─── EJEMPLO 1: Mock de personajes ────────────────────────────────────────────
Given(/^el mock de personajes está activo con "(.+)" y "(.+)"$/, (nombre1, nombre2) => {
    rickMortyMockPage.mockPersonajes(nombre1, nombre2);
});

When(/^el usuario consulta la API de personajes$/, () => {
    rickMortyMockPage.consultarAPIPersonajes();
});

Then(/^ve al personaje "(.+)" en la respuesta$/, (nombre) => {
    rickMortyMockPage.verPersonaje(nombre);
});

Then(/^no ve al personaje real "(.+)"$/, (nombre) => {
    rickMortyMockPage.noVerPersonaje(nombre);
});

// ─── EJEMPLO 2: Mock de error 500 ─────────────────────────────────────────────
Given(/^el mock de personajes devuelve un error 500$/, () => {
    rickMortyMockPage.mockError500();
});

Then(/^la respuesta contiene el mensaje "(.+)"$/, (mensaje) => {
    rickMortyMockPage.verMensaje(mensaje);
});

// ─── EJEMPLO 3: Mock de título vía DOM ────────────────────────────────────────
Given(/^el usuario visita el home de Rick and Morty$/, () => {
    rickMortyMockPage.visitarHome();
});

When(/^se inyecta el título "(.+)" en la página$/, (titulo) => {
    rickMortyMockPage.inyectarTitulo(titulo);
});

Then(/^el título del tab del navegador muestra "(.+)"$/, (texto) => {
    rickMortyMockPage.verTituloTab(texto);
});

Then(/^el encabezado principal muestra "(.+)"$/, (texto) => {
    rickMortyMockPage.verEncabezado(texto);
});

// ─── EJEMPLO 4: Mock de personaje por ID ──────────────────────────────────────
Given(/^el mock del personaje con ID (\d+) devuelve "(.+)" de especie "(.+)"$/, (id, nombre, especie) => {
    rickMortyMockPage.mockPersonajePorId(parseInt(id), nombre, especie);
});

When(/^el usuario consulta el personaje con ID (\d+)$/, (id) => {
    rickMortyMockPage.consultarPersonajePorId(parseInt(id));
});

Then(/^ve el nombre "(.+)" en la respuesta$/, (nombre) => {
    rickMortyMockPage.verPersonaje(nombre);
});

Then(/^ve la especie "(.+)" en la respuesta$/, (especie) => {
    rickMortyMockPage.verMensaje(especie);
});

// ─── EJEMPLO 5: Interceptar y modificar respuesta real ────────────────────────
Given(/^el mock intercepta la respuesta real y renombra al primer personaje como "(.+)"$/, (nuevoNombre) => {
    rickMortyMockPage.mockModificarReal(nuevoNombre);
});
