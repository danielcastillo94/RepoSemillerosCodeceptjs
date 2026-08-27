import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuracion del escenario de carga
export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Ramp-up: de 0 a 10 VUs en 30s
    { duration: '1m',  target: 10 },  // Carga sostenida: 10 VUs durante 1 minuto
    { duration: '20s', target: 0  },  // Ramp-down: de 10 VUs a 0 en 20s
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // El 95% de las peticiones debe responder en menos de 500ms
    http_req_failed:   ['rate<0.01'],  // Menos del 1% de peticiones puede fallar
  },
};

const BASE_URL = 'https://rickandmortyapi.com';

export default function () {
  // Peticion 1: Lista de episodios
  const resLista = http.get(`${BASE_URL}/api/episode`);
  check(resLista, {
    'lista episodios - status 200': (r) => r.status === 200,
    'lista episodios - tiene results': (r) => JSON.parse(r.body).results.length > 0,
  });

  sleep(1);

  // Peticion 2: Episodio por ID
  const resEpisodio = http.get(`${BASE_URL}/api/episode/1`);
  check(resEpisodio, {
    'episodio por ID - status 200': (r) => r.status === 200,
    'episodio por ID - id correcto':  (r) => JSON.parse(r.body).id === 1,
  });

  sleep(1);

  // Peticion 3: Personaje
  const resPersonaje = http.get(`${BASE_URL}/api/character/1`);
  check(resPersonaje, {
    'personaje - status 200':      (r) => r.status === 200,
    'personaje - tiene nombre':    (r) => JSON.parse(r.body).name !== undefined,
  });

  sleep(1);
}
