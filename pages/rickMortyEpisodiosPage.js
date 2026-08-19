const { I } = inject();

class RickMortyEpisodiosPage {
  constructor() {
    this.url = {
      episodes: "**/api/episode",
      episodeSingle: "**/api/episode/3",
      characterSingle: "**/api/character/3",
      episodesBaseUrl: "https://rickandmortyapi.com/api/episode",
      episodeSingleUrl: "https://rickandmortyapi.com/api/episode/3",
      characterSingleUrl: "https://rickandmortyapi.com/api/character/3",
    };
  }

  // Escenario A: Mockear lista de episodios
  mockEpisodios(nombre1, nombre2) {
    I.usePlaywrightTo("mockear lista de episodios", async ({ page }) => {
      await page.route(this.url.episodes, (route) => {
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            info: { count: 2, pages: 1, next: null, prev: null },
            results: [
              {
                id: 1,
                name: nombre1,
                air_date: "December 2, 2026",
                episode: "S01E01",
                characters: [],
                url: "https://rickandmortyapi.com/api/episode/1",
                created: "2026-08-19",
              },
              {
                id: 2,
                name: nombre2,
                air_date: "December 9, 2026",
                episode: "S01E02",
                characters: [],
                url: "https://rickandmortyapi.com/api/episode/2",
                created: "2026-08-19",
              },
            ],
          }),
        });
      });
    });
  }

  // Escenario B: Mockear error 503
  mockError503(mensaje) {
    I.usePlaywrightTo("mockear error 503", async ({ page }) => {
      await page.route(this.url.episodes, (route) => {
        route.fulfill({
          status: 503,
          contentType: "application/json",
          body: JSON.stringify({ error: mensaje }),
        });
      });
    });
  }

  // Escenario C: Interceptar y modificar respuesta real
  mockModificarReal(nuevoNombre) {
    I.usePlaywrightTo(
      "interceptar y modificar respuesta real",
      async ({ page }) => {
        await page.route("**/api/episode**", async (route) => {
          const response = await route.fetch();
          const json = await response.json();

          if (json.results && json.results.length > 0) {
            json.results[0].name = nuevoNombre;
          } else if (json.name) {
            json.name = nuevoNombre;
          }

          await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(json),
          });
        });
      },
    );
  }
  // Escenario D: Mockear episodio específico por ID
  mockEpisodioPorId(name, airDate, episode) {
    I.usePlaywrightTo("mockear episodio por ID 3", async ({ page }) => {
      await page.route(this.url.episodeSingle, (route) => {
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            id: 3,
            name: name,
            air_date: airDate,
            episode: episode,
            characters: [],
            url: "https://rickandmortyapi.com/api/episode/3",
            created: "2026-08-19",
          }),
        });
      });
    });
  }

  navegarEnAPIEpisodios() {
    I.amOnPage(this.url.episodesBaseUrl);
  }

  navegarEnAPIEpisodiosId(id) {
    I.amOnPage(`https://rickandmortyapi.com/api/episode/${id}`);
  }

  navegarEnAPIPersonajesId(id) {
    I.amOnPage(`https://rickandmortyapi.com/api/character/${id}`);
  }

  verTextoEnRespuesta(texto) {
    I.see(texto);
  }

  noVerTextoEnRespuesta(texto) {
    I.dontSee(texto);
  }
}

module.exports = new RickMortyEpisodiosPage();
