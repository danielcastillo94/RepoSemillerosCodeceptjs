const Helper = require('@codeceptjs/helper');

class MiHelper extends Helper {
  async sayHello(name) {
    console.log(`Hola, ${name}! Este mensaje viene del Custom Helper.`);
  }

  async getCurrentUrl() {
    const { page } = this.helpers.Playwright;
    return page.url();
  }
}

module.exports = MiHelper;
