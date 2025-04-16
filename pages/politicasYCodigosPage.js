const {I} = inject();

class PoliticasYCodigosPage {
  constructor() {
    this.fields = {
      seleccionarEstado:
        '//span[@class="telcel-controles-titulo-select-simulado" and text()="Selecciona tu estado"]',
      seleccionarModalidad:
        '//span[@class="telcel-controles-titulo-select-simulado" and text()="Selecciona tu modalidad"]',
    };
  }

  seleccionarAcceso(acceso) {
    const selector = `//p[@class="telcel-accesos-rapidos--tarjeta-titulo" and text()="${acceso}"]`;
    I.scrollTo(selector);
    I.waitForVisible(selector, 5);
    I.click(selector);
    I.wait(2);
    console.log(`Acceso rápido seleccionado: ${acceso}`);
  }

  seleccionarEstadoyModalidad(estado, modalidad) {
    const selectorEstado = `a[data-etiqueta="${estado}"]`;

    I.waitForVisible(this.fields.seleccionarEstado, 10);
    I.click(this.fields.seleccionarEstado);
    I.wait(2);

    //I.scrollTo(selectorEstado);

    I.waitForVisible(selectorEstado, 10);
    I.click(selectorEstado);

    I.wait(2);
}

}

module.exports = new PoliticasYCodigosPage();