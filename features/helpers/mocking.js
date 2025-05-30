const { Helper } = require('codeceptjs');

class MockingHelper extends Helper {
    /**
     * This method runs before each test.
     */
    async _before() {
        // Access Puppeteer helper
        const puppeteer = this.helpers['Puppeteer'];
        if (!puppeteer) throw new Error('Puppeteer helper is required');
        this.page = await puppeteer.page;
    }

    /**
     * Example: Mock a network request
     * @param {string} url - URL to intercept
     * @param {object} response - Mocked response
     */
    async mockRequest(url, response) {
        await this.page.setRequestInterception(true);
        this.page.on('request', interceptedRequest => {
            if (interceptedRequest.url().includes(url)) {
                interceptedRequest.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify(response),
                });
            } else {
                interceptedRequest.continue();
            }
        });
    }

    /**
     * This method runs after each test.
     */
    async _after() {
        if (this.page) {
            await this.page.setRequestInterception(false);
            this.page.removeAllListeners('request');
        }
    }
}

module.exports = MockingHelper;