const Helper = require('@codeceptjs/helper');
const fs = require('fs');
const path = require('path');

class PlaywrightVideoAllure extends Helper {
constructor(config) {
    super(config);
}

async _attachVideo(test) {
    try {
    const allure = codeceptjs.container.plugins('allure');
    if (!allure) return;

    const video = test.artifacts?.video || test._retriedTest?.artifacts?.video;
    const trace = test.artifacts?.trace || test._retriedTest?.artifacts?.trace;
    const screenshot = test.artifacts?.screenshot || test._retriedTest?.artifacts?.screenshot;

    if (video && fs.existsSync(video)) {
        console.log(`✓ Attaching Video: ${video}`);
        allure.addAttachment('Execution Video', fs.readFileSync(video), 'video/webm');
    } else {
        // Buscar video en la carpeta si no está en artifacts
        const videoDir = './output/videos';
        if (fs.existsSync(videoDir)) {
        const files = fs.readdirSync(videoDir);
        const latestVideo = files
            .filter(f => f.endsWith('.webm'))
            .map(f => ({
            name: f,
            path: path.join(videoDir, f),
            time: fs.statSync(path.join(videoDir, f)).mtime.getTime()
            }))
            .sort((a, b) => b.time - a.time)[0];

        if (latestVideo) {
            console.log(`✓ Attaching Video (from dir): ${latestVideo.path}`);
            allure.addAttachment('Execution Video', fs.readFileSync(latestVideo.path), 'video/webm');
        }
        }
    }

    if (trace && fs.existsSync(trace)) {
        console.log(`✓ Attaching Trace: ${trace}`);
        allure.addAttachment('Trace', fs.readFileSync(trace), 'application/zip');
    }

    if (screenshot && fs.existsSync(screenshot)) {
        console.log(`✓ Attaching Screenshot: ${screenshot}`);
        allure.addAttachment('Screenshot', fs.readFileSync(screenshot), 'image/png');
    }
    } catch (e) {
    console.error('Error attaching to Allure:', e.message);
    }
}

async _failed(test) {
    await this._attachVideo(test);
}

async _passed(test) {
    await this._attachVideo(test);
}
}

module.exports = PlaywrightVideoAllure;