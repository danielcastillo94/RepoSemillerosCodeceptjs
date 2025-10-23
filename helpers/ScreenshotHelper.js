// Importa el módulo 'fs' para trabajar con el sistema de archivos (leer, escribir archivos)
const fs = require('fs');

// Importa el módulo 'path' para construir rutas de archivos de forma segura y multiplataforma
const path = require('path');

// Define una clase personalizada que extiende de Helper, base para crear lógica adicional en CodeceptJS
class ScreenshotHelper extends Helper {

  // Hook que se ejecuta automáticamente después de cada paso de prueba
  async _after() {
    // Obtiene el objeto 'page' de Playwright, necesario para tomar la captura
    const page = this.helpers.Playwright?.page;

    // Verifica que el objeto 'page' exista y que el navegador no esté cerrado
    if (page && typeof page.isClosed === 'function' && !page.isClosed()) {

      // Genera un timestamp único para evitar sobrescribir archivos
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

      // Define el nombre del archivo de la captura usando el timestamp
      const filename = `step-${timestamp}.png`;

      // Construye la ruta completa donde se guardará la imagen
      const filepath = path.join(global.output_dir || 'output', filename);

      // Toma la captura de pantalla y la guarda en la ruta especificada
      await page.screenshot({ path: filepath });

      // Lee el archivo de imagen como buffer para poder adjuntarlo al reporte Allure
      const image = fs.readFileSync(filepath);

      // ✅ Usa el objeto '_allure' expuesto por CodeceptJS para adjuntar la imagen al reporte
      if (this._allure && typeof this._allure.addAttachment === 'function') {
        this._allure.addAttachment('Captura final', image, 'image/png');
      } else {
        // Si el objeto _allure no está disponible, muestra una advertencia en consola
        console.warn('No se pudo adjuntar la imagen: _allure no está disponible.');
      }
    }
  }
}

// Exporta la clase para que pueda ser usada como helper en la configuración de CodeceptJS
module.exports = ScreenshotHelper;