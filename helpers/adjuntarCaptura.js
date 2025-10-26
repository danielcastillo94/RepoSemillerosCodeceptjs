// ubica este archivo en tu carpeta de helpers, por ejemplo: ./helpers/adjuntarCapturasAllure.js

const fs = require('fs');
const path = require('path');
const { helper } = codeceptjs;
const { allure } = codeceptjs;

class adjuntarCaptura extends helper {
  async _after(test) {
    const screenshotsDir = path.join(output_dir, 'output');

    if (!fs.existsSync(screenshotsDir)) return;

    const archivos = fs.readdirSync(screenshotsDir).filter(file => file.endsWith('.png'));

    archivos.forEach(nombre => {
      const ruta = path.join(screenshotsDir, nombre);
      const imagen = fs.readFileSync(ruta);
      allure.attachment(`Captura: ${nombre}`, imagen, 'image/png');
    });
  }
}

module.exports = adjuntarCaptura;