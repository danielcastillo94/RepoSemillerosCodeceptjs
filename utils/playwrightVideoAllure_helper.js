const Helper = require('@codeceptjs/helper');
const codeceptjs = require('codeceptjs');
const fs = require('fs');
const path = require('path');
const { ContentType } = require('allure-js-commons');

console.log('HELPER CARGADO');

class PlaywrightVideoAllure extends Helper {

  constructor(config) {
    super(config);
  }

  async _failed(test) {

    console.log('TEST FALLÓ → BUSCANDO ARTEFACTOS');

    const allure = codeceptjs.container.plugins('allure');

    console.log('ALLURE PLUGIN:', !!allure);

    if (!allure) {
      console.log('No existe plugin Allure');
      return;
    }

    const outputDir = './output';
    const videoDir = './output/videos';
    const traceDir = './output/trace';

    // =========================
    // SCREENSHOT
    // =========================

    if (fs.existsSync(outputDir)) {

      const screenshots = fs.readdirSync(outputDir)
        .filter(file => file.endsWith('.failed.png'));

      console.log('SCREENSHOTS:', screenshots);

      if (screenshots.length > 0) {

        const screenshot = path.join(
          outputDir,
          screenshots[screenshots.length - 1]
        );

        console.log('SCREENSHOT:', screenshot);

        const buffer = fs.readFileSync(screenshot);

        await allure.attachment(
          'Failure Screenshot',
          buffer,
          ContentType.PNG
        );

        console.log('SCREENSHOT ADJUNTADO');
      }
    }

    // =========================
    // VIDEO
    // =========================

    if (fs.existsSync(videoDir)) {

      const videos = fs.readdirSync(videoDir)
        .filter(file => file.endsWith('.failed.webm'));

      console.log('VIDEOS:', videos);

      if (videos.length > 0) {

        const video = path.join(
          videoDir,
          videos[videos.length - 1]
        );

        console.log('VIDEO:', video);

        const buffer = fs.readFileSync(video);

        await allure.attachment(
          'Execution Video',
          buffer,
          ContentType.WEBM
        );

        console.log('VIDEO ADJUNTADO');
      }
    }

    // =========================
    // TRACE
    // =========================

    if (fs.existsSync(traceDir)) {

      const traces = fs.readdirSync(traceDir)
        .filter(file => file.endsWith('.failed.zip'));

      console.log('TRACES:', traces);

      if (traces.length > 0) {

        const trace = path.join(
          traceDir,
          traces[traces.length - 1]
        );

        console.log('TRACE:', trace);

        const buffer = fs.readFileSync(trace);

        await allure.attachment(
          'Playwright Trace',
          buffer,
          ContentType.ZIP
        );

        console.log('TRACE ADJUNTADO');
      }
    }
  }
}

module.exports = PlaywrightVideoAllure;