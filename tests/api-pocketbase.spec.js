import { test, expect, request } from '@playwright/test';

test('Prueba pública: GET y POST en colección Semilleros', async ({ request }) => {
  // 1️⃣ GET: Consultar registros existentes
  const getResponse = await request.get('https://pb.testasservice.com/api/collections/semilleros/records');
  expect(getResponse.ok()).toBeTruthy();

  const getData = await getResponse.json();
  console.log(`📄 Total registros: ${getData.totalItems}`);
  expect(getData.page).toBe(1);

  // 2️⃣ POST: Crear un nuevo registro sin autenticación
  const nuevo = {
    ciudad: 'Monterrey',
    edad: 31,
    email: 'ejemplo@gmail.com',
    users: 'daniel',
    collectionId: 'pbc_274769734',
    collectionName: 'semilleros'
  };

  const postResponse = await request.post('https://pb.testasservice.com/api/collections/semilleros/records', {
    data: nuevo,
    headers: { 'Content-Type': 'application/json' }
  });

  expect(postResponse.ok()).toBeTruthy();

  const created = await postResponse.json();
  console.log(`✅ Registro creado con ID: ${created.id}`);

  // 3️⃣ GET filtrado opcional para validar que se creó
  const filter = "(email='ejemplo@gmail.com')";
  const getByFilter = await request.get(
    `https://pb.testasservice.com/api/collections/semilleros/records?filter=${encodeURIComponent(filter)}`
  );

  expect(getByFilter.ok()).toBeTruthy();
  const filtered = await getByFilter.json();
  console.log(`🔎 Coincidencias encontradas: ${filtered.totalItems}`);
  expect(filtered.items[0].email).toBe('ejemplo@gmail.com');

  // 4️⃣ DELETE (opcional, solo si quieres limpiar)
  const deleteResponse = await request.delete(
    `https://pb.testasservice.com/api/collections/semilleros/records/${created.id}`
  );
  expect(deleteResponse.ok()).toBeTruthy();
  console.log('🗑️ Registro eliminado correctamente.');
});
