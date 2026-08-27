import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuracion del escenario de estres
// Objetivo: encontrar el punto de quiebre del sistema escalando VUs progresivamente
export const options = {
  stages: [
    { duration: '20s', target: 10  },  // Carga base
    { duration: '20s', target: 30  },  // Incremento
    { duration: '20s', target: 60  },  // Carga alta
    { duration: '20s', target: 100 },  // Punto de estres
    { duration: '20s', target: 0   },  // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],  // En estres aceptamos hasta 2s en el percentil 95
    http_req_failed:   ['rate<0.05'],   // En estres aceptamos hasta 5% de error
  },
};

const BASE_URL = 'https://rickandmortyapi.com';

export default function () {
  const res = http.get(`${BASE_URL}/api/episode`);
  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(0.5);
}
