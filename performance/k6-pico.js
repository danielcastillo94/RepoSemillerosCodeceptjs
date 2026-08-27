import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuracion del escenario de pico (spike test)
// Objetivo: validar comportamiento ante un incremento repentino de trafico
export const options = {
  stages: [
    { duration: '10s', target: 5   },  // Carga normal
    { duration: '10s', target: 100 },  // Pico brusco de trafico
    { duration: '10s', target: 100 },  // Mantener el pico
    { duration: '10s', target: 5   },  // Regreso a carga normal
    { duration: '10s', target: 0   },  // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'],
    http_req_failed:   ['rate<0.10'],
  },
};

const BASE_URL = 'https://rickandmortyapi.com';

export default function () {
  const res = http.get(`${BASE_URL}/api/character`);
  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(0.5);
}
