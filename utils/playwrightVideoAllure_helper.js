const fs = require('fs');
const path = require('path');

const HelperModule = require('@codeceptjs/helper');
const Helper = HelperModule.default || HelperModule;

const allure = require('allure-js-commons');


class PlaywrightVideoAllure extends Helper {

    constructor(config) {
        super(config);

        this.currentTest = null;
        this.screenshotPath = null;
    }


    // ======================================================
    // TEST INITIALIZATION
    // ======================================================

    _test(test) {
        this.currentTest = test;
        this.screenshotPath = null;
    }


    // ======================================================
    // PASSED TEST
    // ======================================================

    async _passed(test) {

        this.currentTest = test;

        await this._captureScreenshot(
            test,
            'passed'
        );
    }


    // ======================================================
    // FAILED TEST
    // ======================================================

    async _failed(test) {

        this.currentTest = test;

        await this._captureScreenshot(
            test,
            'failed'
        );
    }


    // ======================================================
    // ATTACH ARTIFACTS TO ALLURE
    // ======================================================

    async _after() {

        if (!this.currentTest) {
            return;
        }

        try {

            const artifacts =
                this.currentTest.artifacts || {};


            // ==================================================
            // SCREENSHOT
            // ==================================================

            if (this.screenshotPath) {

                await this._attachFile(
                    'Final Screenshot',
                    this.screenshotPath,
                    'image/png',
                    'png'
                );
            }


            // ==================================================
            // TRACE
            // ==================================================

            if (artifacts.trace) {

                await this._attachFile(
                    'Playwright Trace',
                    artifacts.trace,
                    'application/zip',
                    'zip'
                );
            }


            // ==================================================
            // VIDEO
            // ==================================================

            if (artifacts.video) {

                await this._attachCompletedVideo(
                    'Playwright Video',
                    artifacts.video
                );

            } else {

                console.warn(
                    '[PlaywrightVideoAllure] No video artifact was registered.'
                );
            }


        } catch (error) {

            console.warn(
                `[PlaywrightVideoAllure] ${error.message}`
            );

        } finally {

            this.currentTest = null;
            this.screenshotPath = null;
        }
    }


    // ======================================================
    // CAPTURE SCREENSHOT
    // ======================================================

    async _captureScreenshot(test, status) {

        try {

            const playwright =
                this.helpers.Playwright;


            if (
                !playwright ||
                !playwright.page ||
                playwright.page.isClosed()
            ) {
                return;
            }


            const outputDir =
                path.resolve(
                    process.cwd(),
                    'output'
                );


            if (!fs.existsSync(outputDir)) {

                fs.mkdirSync(
                    outputDir,
                    {
                        recursive: true
                    }
                );
            }


            const safeTitle =
                test.title
                    .replace(/[<>:"/\\|?*]/g, '_')
                    .replace(/\s+/g, '_')
                    .substring(0, 100);


            this.screenshotPath =
                path.join(
                    outputDir,
                    `${safeTitle}.${status}.png`
                );


            await playwright.page.screenshot({

                path:
                    this.screenshotPath,

                fullPage:
                    true
            });


        } catch (error) {

            console.warn(
                `[PlaywrightVideoAllure] Screenshot error: ${error.message}`
            );
        }
    }


    // ======================================================
    // ATTACH COMPLETED VIDEO
    // ======================================================

    async _attachCompletedVideo(
        name,
        filePath
    ) {

        const absolutePath =
            path.isAbsolute(filePath)
                ? filePath
                : path.resolve(
                    process.cwd(),
                    filePath
                );


        console.log(
            `[PlaywrightVideoAllure] Waiting for complete video: ${absolutePath}`
        );


        const completed =
            await this._waitForFileToFinish(
                absolutePath
            );


        if (!completed) {

            console.warn(
                `[PlaywrightVideoAllure] Video did not finish writing: ${absolutePath}`
            );

            return;
        }


        const finalSize =
            fs.statSync(absolutePath).size;


        console.log(
            `[PlaywrightVideoAllure] Video completed: ${(finalSize / 1024 / 1024).toFixed(2)} MB`
        );


        await allure.attachmentPath(
            name,
            absolutePath,
            {
                contentType:
                    'video/webm',

                fileExtension:
                    'webm'
            }
        );
    }


    // ======================================================
    // WAIT UNTIL FILE STOPS GROWING
    // ======================================================

    async _waitForFileToFinish(
        filePath,
        timeout = 30000
    ) {

        const start =
            Date.now();

        let previousSize = -1;

        let stableChecks = 0;


        while (
            Date.now() - start < timeout
        ) {

            try {

                if (!fs.existsSync(filePath)) {

                    await this._sleep(500);

                    continue;
                }


                const stats =
                    fs.statSync(filePath);


                const currentSize =
                    stats.size;


                if (currentSize <= 0) {

                    stableChecks = 0;

                    await this._sleep(500);

                    continue;
                }


                /*
                 * The file must keep the exact same size
                 * for several consecutive checks.
                 *
                 * This prevents Allure from copying a WebM
                 * while Playwright is still writing it.
                 */

                if (currentSize === previousSize) {

                    stableChecks++;

                } else {

                    stableChecks = 0;

                    previousSize =
                        currentSize;
                }


                /*
                 * 4 checks x 500 ms =
                 * approximately 2 seconds without changes.
                 */

                if (stableChecks >= 4) {

                    return true;
                }


            } catch (error) {

                stableChecks = 0;
            }


            await this._sleep(500);
        }


        return false;
    }


    // ======================================================
    // ATTACH GENERIC FILE
    // ======================================================

    async _attachFile(
        name,
        filePath,
        contentType,
        fileExtension
    ) {

        const absolutePath =
            path.isAbsolute(filePath)
                ? filePath
                : path.resolve(
                    process.cwd(),
                    filePath
                );


        const exists =
            await this._waitForFile(
                absolutePath
            );


        if (!exists) {

            console.warn(
                `[PlaywrightVideoAllure] File not found: ${absolutePath}`
            );

            return;
        }


        await allure.attachmentPath(
            name,
            absolutePath,
            {
                contentType,
                fileExtension
            }
        );
    }


    // ======================================================
    // WAIT FOR FILE TO EXIST
    // ======================================================

    async _waitForFile(
        filePath,
        timeout = 10000
    ) {

        const start =
            Date.now();


        while (
            Date.now() - start < timeout
        ) {

            try {

                if (
                    fs.existsSync(filePath) &&
                    fs.statSync(filePath).size > 0
                ) {

                    return true;
                }

            } catch (error) {
                // File is not ready yet.
            }


            await this._sleep(250);
        }


        return false;
    }


    // ======================================================
    // SLEEP
    // ======================================================

    _sleep(milliseconds) {

        return new Promise(
            resolve =>
                setTimeout(
                    resolve,
                    milliseconds
                )
        );
    }

}


module.exports = PlaywrightVideoAllure;