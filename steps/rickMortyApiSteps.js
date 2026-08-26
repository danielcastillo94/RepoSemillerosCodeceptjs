const { I } = inject();
const assert = require('assert');

let lastResponse;

When('hago GET al endpoint {string}', async (path) => {
  lastResponse = await I.sendGetRequest(path);
});

Then('el status de respuesta es {int}', (code) => {
  assert.strictEqual(lastResponse.status, code, `Status esperado: ${code}, recibido: ${lastResponse.status}`);
});

Then('la respuesta contiene resultados', () => {
  assert.ok(lastResponse.data.results.length > 0, 'La respuesta no contiene resultados');
});

Then('el campo {string} de la respuesta es {int}', (campo, valor) => {
  assert.strictEqual(lastResponse.data[campo], valor, `Campo "${campo}": esperado ${valor}, recibido ${lastResponse.data[campo]}`);
});
