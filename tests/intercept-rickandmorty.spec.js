import { test } from '@playwright/test';

test('Interceptar Rick & Morty GraphQL y simular personajes falsos', async ({ page }) => {
  console.log('🎬 Iniciando demo interceptando GraphQL...');

  // 1️⃣ Interceptar la llamada POST al endpoint GraphQL
  await page.route('**/graphql', async (route, request) => {
    // Solo interceptar si el body contiene la query de personajes
    const postData = request.postData() || '';
    if (postData.includes('charactersByIds')) {
      console.log('🧠 Interceptada llamada a GraphQL con charactersByIds');

      // 2️⃣ Crear una respuesta mock basada en el formato real
      const fakeResponse = {
        data: {
          charactersByIds: [
            {
              id: '999',
              name: 'Jorge 22222',
              status: 'Alive',
              species: 'QA',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [{ name: 'Test Suite Alpha', id: '1' }],
              location: { name: 'QA Universe', id: '101' },
            },
            {
              id: '1000',
              name: 'Daniel 222222',
              status: 'Interdimensional',
              species: 'Tester',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              episode: [{ name: 'Regression Protocol', id: '2' }],
              location: { name: 'Parallel QA Earth', id: '102' },
            },
          ],
        },
      };

      // 3️⃣ Responder con el mock
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(fakeResponse),
      });
    } else {
      // Dejar pasar cualquier otra petición
      await route.continue();
    }
  });

  // 4️⃣ Abrir la página oficial
  await page.goto('https://rickandmortyapi.com/');

  console.log('🌍 Página cargada: Rick and Morty API oficial');
  await page.waitForTimeout(8000); // Esperar para observar
  console.log('✅ Mock aplicado. La interfaz debería mostrar personajes falsos.');
});
