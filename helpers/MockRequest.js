const Helper = require('@codeceptjs/helper');

class MockRequest extends Helper {
  _before() {
    this.mocks = this.config.mocks || {};
    this.endpoint = this.config.endpoint;
  }

  async onRequest(request) {
    const { mocks } = this;
    const url = new URL(request.url());
    const path = `${request.method()} ${url.pathname}`;

    if (mocks[path]) {
      const mock = mocks[path];
      await request.respond({
        status: mock.status || 200,
        body: JSON.stringify(mock.body || {}),
        headers: mock.headers || { 'Content-Type': 'application/json' },
      });
    } else {
      await request.continue();
    }
  }

  async _init() {
    const { page } = this.helpers.Playwright;
    await page.route('**/*', (route, request) => this.onRequest(request));
  }
}

module.exports = MockRequest;
