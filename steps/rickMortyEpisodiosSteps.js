const { rickMortyEpisodiosPage } = inject();

Given(/^el mock de episodios está activo con "(.+)" y "(.+)"$/,(nombre1, nombre2) => {rickMortyEpisodiosPage.mockEpisodios(nombre1,nombre2);});

When(/^el usuario consulta la API de episodios$/, () => {rickMortyEpisodiosPage.consultarAPIEpisodios();});

Then(/^ve el episodio "(.+)" en la respuesta$/, (nombre) => {rickMortyEpisodiosPage.verEpisodio(nombre);});

Then(/^no ve el episodio real "(.+)"$/, (nombre) => {rickMortyEpisodiosPage.noVerEpisodio(nombre);});

Given(/^el mock de episodios devuelve un error 503$/, () => {rickMortyEpisodiosPage.mockError503();});

Given(/^el mock intercepta la respuesta real y renombra al primer episodio como "(.+)"$/,(nuevoNombre) => {rickMortyEpisodiosPage.mockModificarReal(nuevoNombre);});

Given(/^el mock del episodio con ID (\d+) devuelve "(.+)", fecha "(.+)" y código "(.+)"$/,(id, nombre, airDate, codigo) => {rickMortyEpisodiosPage.mockEpisodioPorId(parseInt(id),nombre,airDate,codigo);});

When(/^el usuario consulta el personaje con ID (\d+)$/, (id) => {rickMortyEpisodiosPage.consultarPersonajePorId(parseInt(id));});

When(/^el usuario consulta el episodio con ID (\d+)$/, (id) => {rickMortyEpisodiosPage.consultarEpisodioPorId(parseInt(id));});

