module.exports = function() {
    return actor({
      login: async function(correo) {
        await this.fillField('//input[@type="email"]', correo);
        await this.wait(5)
        await this.click('//span[text()="Siguiente"]');
      }
    });
  };