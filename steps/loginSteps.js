module.exports = function() {
    return actor({
      login: async function(correo) {
        await this.fillField('//input[@type="email"]', correo);
        await this.click('//span[text()="Siguiente"]');
      }
    });
  };