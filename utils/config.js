require('dotenv').config({ path: './secreto.env' })

/**
 * Lector central de configuración.
 * Ninguna URL ni timeout debe estar escrito directamente en un Page Object:
 * todo lo que cambia entre ambientes (dev, qa, prod) vive en secreto.env.
 */

function requerida(nombre) {
  const valor = process.env[nombre]
  if (!valor) {
    throw new Error(
      `Falta la variable "${nombre}" en secreto.env. Copia secreto_env.example y complétala.`
    )
  }
  return valor
}

module.exports = {
  BASE_URL: requerida('BASE_URL'),
  // Timeout por defecto para todas las esperas explícitas (en segundos)
  TIMEOUT: Number(process.env.TIMEOUT || 15)
}
